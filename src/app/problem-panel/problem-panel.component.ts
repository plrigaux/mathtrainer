import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MathProblem } from "../math-generator/mathProblem";
import { ConfigService } from '../services/config.service'
import { MathQuestionService, MathQuestionNotifier, QuestionStatus } from '../services/math-question.service';
import { MathQuestionComponent } from '../math-question/math-question.component'
import { Subscription } from 'rxjs';
import { Config, OrientationTypesKey, EquationOrientation, EquationOrientations } from '../services/config';
import { ColumnAnswerMode, ANSWER_MODES } from '../column-answer/column-answer.component'

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.scss']
})

export class ProblemPanelComponent implements OnInit {
  problems: MathProblem[];
  @ViewChildren(MathQuestionComponent) private mathQuestionComponents: QueryList<MathQuestionComponent>;
  progress: number;
  successCount: number;
  answerMap: Map<string, QuestionStatus> = new Map();
  equationOrientations: EquationOrientation[] = EquationOrientations;
  private substriptions: Subscription[] = [];
  config : Config = null;
  ANSWER_MODES = ANSWER_MODES;
  needReset : boolean = false;

  constructor(private configService: ConfigService,
    private mathQuestionService: MathQuestionService) {
    this.progress = 0;
    this.successCount = 0;
  }

  ngOnInit(): void {
    this.substriptions.push(
      this.configService.subscribe(
        cfsi => {
          this.config = {...cfsi.config}; //to force the change detection
          this.problems = new Array(cfsi.config.nbQuestions >= 1 ? cfsi.config.nbQuestions : 1); //TODO make an universal function
        
          //reset state
          this.needReset = cfsi.needReset;
          if (cfsi.needReset) {
            this.progress = 0;
            this.successCount = 0;
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

    switch (notification.status) {
      case QuestionStatus.RIGHT:
        if (currentStatus !== QuestionStatus.RIGHT) {

          this.increaseProgress();

          console.debug(`SC: ${this.successCount} PR: ${this.progress}`);

          let array = this.mathQuestionComponents.toArray();

          let mathQuestionComponent: MathQuestionComponent;

          mathQuestionComponent = this.runOverCommponents(notification.index + 1, array.length, array)

          if (mathQuestionComponent === undefined) {
            mathQuestionComponent = this.runOverCommponents(0, notification.index, array)
          }

          if (mathQuestionComponent !== undefined) {
            mathQuestionComponent.focus();
          }
        }
        break;
      case QuestionStatus.WRONG:
        this.decreaseProgress(currentStatus);
        break;
      case QuestionStatus.EMPTY:
        this.decreaseProgress(currentStatus);
        break;
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
    this.updateProgress()
  }

  private decreaseProgress(currentStatus: QuestionStatus): void {
    if (currentStatus === QuestionStatus.RIGHT) {
      this.successCount--;
      this.updateProgress()
    }
  }

  private updateProgress(): void {
    console.debug(`this.successCount ${this.successCount} this.problemsCount ${this.problemsCount}`)
    this.progress = Math.round((this.successCount / this.problemsCount) * 100);
  }

  ngAfterViewInit() {
    //focus on the first child
    this.focusFirst()
  }

  ngOnDestroy(): void {
    this.substriptions.forEach(substription => substription.unsubscribe());
  }

  clearAll() {
    this.mathQuestionComponents.forEach(c => c.clear())
    this.focusFirst()

  }

  reset() {
    this.mathQuestionComponents.forEach(c => c.reset());
    this.focusFirst()
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
    if (this.mathQuestionComponents.length > 0) {
      //Wrapped to avoid error ExpressionChangedAfterItHasBeenCheckedError
      Promise.resolve(null).then(() => this.mathQuestionComponents.first.focus());
    }
  }

  orientationChangeFn(orientation : string) {
    console.log(`New orientation: ${orientation} ${typeof orientation}`)
    this.config.orientation = orientation as OrientationTypesKey
    this.configService.next(this.config, false);
  }

  realTimeValidationChangeFn(realTimeValidation : boolean) {
    this.config.realTimeValidation = realTimeValidation;
    this.configService.next(this.config, false);
  }

  selectedAnswerModeChangeFn(selectedAnswerMode : ColumnAnswerMode) {
    this.config.answerMode = selectedAnswerMode;
    this.configService.next(this.config, false);
  }

  nbProblemsChangeFn(nbProblems : number) {
    this.config.nbQuestions = nbProblems
    this.configService.next(this.config, false);
  }
}
