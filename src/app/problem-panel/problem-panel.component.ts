import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MathProblem } from "../math-generator/mathProblem";
import { ConfigService } from '../config.service'
import { MathQuestionService, MathQuestionNotifier, QuestionStatus } from '../math-question.service';
import { MathQuestionComponent } from '../math-question/math-question.component'
import { Subscription } from 'rxjs';

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
  private substriptions: Subscription[] = [];

  constructor(private configService: ConfigService,
    private mathQuestionService: MathQuestionService
  ) {
    this.clearForm();
    this.progress = 0;
    this.successCount = 0;
  }

  ngOnInit(): void {
    this.substriptions.push(
      this.configService.subscribe(
        cfsi => {
          this.problems = new Array(cfsi.config.nbProblems >= 1 ? cfsi.config.nbProblems : 1); //TODO make an universal function
          //for (let i = this.answersFormArray.length; i > this.problems.length;) {
            //this.answersFormArray.removeAt(--i);
            //console.log("FA: " + this.answersFormArray.length);
          //}

          //reset state
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

  private  manageNotification(notification: MathQuestionNotifier) {
    let currentStatus =  this.manageStatus(notification);
    
    switch (notification.status) {
      case QuestionStatus.RIGHT:
        if (currentStatus !== QuestionStatus.RIGHT) {
          
          this.increaseProgress();

          console.log(`SC: ${this.successCount} PR: ${this.progress}`);

          let array = this.mathQuestionComponents.toArray();

          let mqc: MathQuestionComponent;

          mqc = this.runOverCommponents(notification.index + 1, array.length, array)

          if (mqc === undefined) {
            mqc = this.runOverCommponents(0, notification.index, array)
          }

          if (mqc !== undefined) {
            mqc.focus();
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

  private manageStatus(notification: MathQuestionNotifier) : QuestionStatus {
    let currentStatus = this.answerMap.get(notification.id); 
    this.answerMap.set(notification.id, notification.status); //There is a race condition here TODO find a way to sync
    console.log(notification)
    console.log("Notification Status '" + notification.status + "' currentStatus: '" + currentStatus + "' notification.id '" + notification.id +"'")

    return currentStatus;
  }

  private runOverCommponents(i: number, limit: number, arr: MathQuestionComponent[]): MathQuestionComponent {
    while (i < limit) {
      let mq = arr[i];
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
    console.log(`this.successCount ${this.successCount} this.problemsCount ${this.problemsCount}`)
    this.progress = Math.round((this.successCount / this.problemsCount) * 100);
  }

  ngAfterViewInit() {
    //this.mathQuestionComponents.forEach(mq => console.log(mq.name));
  }

  ngOnDestroy(): void {
    this.substriptions.forEach(substription => substription.unsubscribe());
  }

  clearForm() {
    /*
    this.panelForm = new FormGroup({
      answers: new FormArray([])
    })
    this.answersFormArray = this.panelForm.get('answers') as FormArray;
    */
  }

  get problemsCount(): number {
    return this.problems.length;
  }

  padding(padSize: number): any[] {
    return new Array(padSize);
  }
}
