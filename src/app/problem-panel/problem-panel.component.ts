import { Component, OnInit, ViewChildren, QueryList, Inject } from '@angular/core';
import { MathProblem } from "../math-generator/mathProblem";
import { ConfigService, ConfigServiceInfo } from '../services/config.service'
import { Config, OrientationTypesKey, EquationOrientation, EquationOrientations } from '../services/config';
import { MathQuestionService, MathQuestionNotifier, QuestionStatus } from '../services/math-question.service';
import { MathQuestionComponent } from '../math-question/math-question.component'
import { Subscription } from 'rxjs';
import { ColumnAnswerMode, ANSWER_MODES } from '../column-answer/column-answer.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.scss']
})
export class ProblemPanelComponent implements OnInit {
  problems: MathProblem[];
  @ViewChildren(MathQuestionComponent) private mathQuestionComponents: QueryList<MathQuestionComponent>;
  successCount: number;
  answerMap: Map<string, QuestionStatus> = new Map();
  equationOrientations: EquationOrientation[] = EquationOrientations;
  private substriptions: Subscription[] = [];
  config: Config = null;
  ANSWER_MODES = ANSWER_MODES;
  needReset: boolean = false;
  dialogRef : MatDialogRef<ProblemPanelComponentDialog> = null

  constructor(private configService: ConfigService,
    private mathQuestionService: MathQuestionService,
    private dialog: MatDialog) {
    this.resetProgress()
  }

  ngOnInit(): void {
    this.substriptions.push(
      this.configService.subscribe(
        (cfsi: ConfigServiceInfo) => {
          this.config = { ...cfsi.config }; //to force the change detection
          this.problems = new Array(cfsi.config.nbQuestions >= 1 ? cfsi.config.nbQuestions : 1); //TODO make an universal function
          //reset state
          this.needReset = cfsi.needReset;
          if (cfsi.needReset) {
            this.resetProgress()
          }
        }
      )
    );

    this.substriptions.push(
      this.mathQuestionService.subscribe(notification => {
        this.manageNotification(notification);
      })
    );
  }

  private manageNotification(notification: MathQuestionNotifier) {
    let currentStatus = this.manageStatus(notification);


    if (this.config.realTimeValidation) {
      let next: boolean = false;
      switch (notification.status) {
        case QuestionStatus.RIGHT:
          if (currentStatus !== QuestionStatus.RIGHT) {
            this.increaseProgress();
            console.debug(`SC: ${this.successCount} PC: ${this.problemsCount}`);

            next = true;
          }
          break;
        case QuestionStatus.WRONG:
        case QuestionStatus.EMPTY:
          this.decreaseProgress(currentStatus);
          break;
      }

      if (next || notification.forceExitFocus) {
        this.nextComponentFocus(notification.index);
      }
    } else if (notification.isParentCanValidate) {

      let canValidate: boolean = true;

      if (this.answerMap.size >= this.problems.length) {
        this.answerMap.forEach((value: QuestionStatus) => {
          switch (value) {
            case QuestionStatus.EMPTY:
            case QuestionStatus.FOCUS:
              canValidate = false;
              break;
          }
        });
      } else {
        canValidate = false
      }

      if (canValidate) {
        this.validate();
      }
    }
  }

  private nextComponentFocus(index: number) {
    let array = this.mathQuestionComponents.toArray();

    let mathQuestionComponent: MathQuestionComponent;

    mathQuestionComponent = this.runOverCommponents(index + 1, array.length, array)

    if (mathQuestionComponent === undefined) {
      mathQuestionComponent = this.runOverCommponents(0, index + 1, array)
    }

    if (mathQuestionComponent !== undefined) {
      mathQuestionComponent.focus();
    } else {
      let nextOne = index + 1 >= array.length ? 0 : index + 1;
      array[nextOne].focus();
    }
  }

  private manageStatus(notification: MathQuestionNotifier): QuestionStatus {
    let currentStatus = this.answerMap.get(notification.id);
    this.answerMap.set(notification.id, notification.status); //There is a race condition here TODO find a way to sync
    console.debug(notification)
    console.debug("Notification Status '" + notification.status + "' currentStatus: '" + currentStatus + "' notification.id '" + notification.id + "'")

    return currentStatus;
  }

  private runOverCommponents(i: number, limit: number, mqcArray: MathQuestionComponent[]): MathQuestionComponent {
    while (i < limit) {
      let mq = mqcArray[i];
      if (mq.notRight()) {
        return mq;
      }
      ++i
    }
  }

  private increaseProgress() {
    this.successCount++;
  }

  private decreaseProgress(currentStatus: QuestionStatus): void {
    if (currentStatus === QuestionStatus.RIGHT) {
      this.successCount--;
    }
  }

  ngAfterViewInit() {
    //focus on the first child
    this.focusFirst()
  }

  ngOnDestroy(): void {
    this.substriptions.forEach(substription => substription.unsubscribe());
  }

  clearAll() {
    this.mathQuestionComponents?.forEach(c => c.clear())
    this.focusFirst()
    this.resetProgress()
  }

  reset() {
    this.mathQuestionComponents?.forEach(c => c.reset());
    this.focusFirst()
    this.resetProgress()
  }

  resetProgress() {
    this.successCount = 0;
  }

  get problemsCount(): number {
    return this.problems.length;
  }

  padding(padSize: number): any[] {
    return new Array(padSize);
  }

  invert() {
    this.mathQuestionComponents.forEach(c => c.invert());
    this.focusFirst();
  }

  focusFirst() {
    if (this.mathQuestionComponents?.length > 0) {
      //Wrapped to avoid error ExpressionChangedAfterItHasBeenCheckedError
      Promise.resolve(null).then(() => this.mathQuestionComponents.first.focus());
    }
  }

  orientationChangeFn(orientation: string) {
    console.log(`New orientation: ${orientation} ${typeof orientation}`)
    this.config.orientation = orientation as OrientationTypesKey
    this.configService.next(this.config, false);
  }

  realTimeValidationChangeFn(realTimeValidation: boolean) {
    this.config.realTimeValidation = realTimeValidation;
    this.configService.next(this.config, false);

    if (realTimeValidation) {
      this.mathQuestionComponents.forEach((m: MathQuestionComponent) => m.validateAnswer(false));
    } else {
      this.mathQuestionComponents.forEach((m: MathQuestionComponent) => m.validateInput());
    }
  }

  selectedAnswerModeChangeFn(selectedAnswerMode: ColumnAnswerMode) {
    this.config.answerMode = selectedAnswerMode;
    this.configService.next(this.config, false);
  }

  nbProblemsChangeFn(nbProblems: number) {
    this.config.nbQuestions = nbProblems
    this.configService.next(this.config, false);
  }

  validate(): void {
    this.mathQuestionComponents.forEach((m: MathQuestionComponent) => m.validateAnswer(false));
    this.openDialog();
  }


  openDialog(): void {
    if (this.dialogRef != null) {
      return;
    }

    console.log("Open dialog")

    let data: DialogData = {
      right: 0,
      wrong: 0,
      empty: 0,
      total: this.answerMap.size
    }

    this.answerMap.forEach((v) => {
      switch (v) {
        case QuestionStatus.RIGHT:
          data.right++
          break;
        case QuestionStatus.WRONG:
          data.wrong++
          break;
        case QuestionStatus.EMPTY:
          data.empty++
          break;
        default:
          console.log("investigate")
          break;
      }
    });

    this.dialogRef = this.dialog.open(ProblemPanelComponentDialog, {
      width: '250px',
      data: data
    });

    
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogRef = null;
    });
  }
}

export interface DialogData {
  right: number,
  wrong: number,
  empty: number,
  total: number,
}

@Component({
  selector: 'app-problem-panel-dialog',
  templateUrl: './problem-panel-dialog.component.html',
  styleUrls: ['./problem-panel.component.scss']
})
export class ProblemPanelComponentDialog {
  public dialogRef: MatDialogRef<ProblemPanelComponentDialog>;

  congratulationMsg: string = null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {

    let result = data.right / data.total

    if (result == 1) {
      this.congratulationMsg = $localize`Excellent`
    } else if (result >= 0.7) {
      this.congratulationMsg = $localize`Good`
    } else {
      this.congratulationMsg = $localize`:@@resultTryAgain:Try again`
    }
  }
}
