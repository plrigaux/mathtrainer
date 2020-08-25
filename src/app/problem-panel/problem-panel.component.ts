import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MathProblem } from '../math-generator/mathGenerator'
import { ConfigService } from '../config.service'
import { FormGroup, FormArray } from '@angular/forms';
import { MathQuestionService, MathQuestionNotifier, QuestionStatus } from '../math-question.service';
import { MathQuestionComponent } from '../math-question/math-question.component'

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.scss']
})

export class ProblemPanelComponent implements OnInit {
  problems: MathProblem[];
  @ViewChildren(MathQuestionComponent) private mathQuestionComponents: QueryList<MathQuestionComponent>;
  panelForm: FormGroup;
  answersFormArray: FormArray;
  progress: number;
  successCount: number;
  answerMap: Map<string, QuestionStatus> = new Map();

  constructor(private configService: ConfigService, private mathQuestionService: MathQuestionService) {
    console.log(this.answersFormArray)
    //this.answersFormArray.push(new FormControl());
    this.clearForm();
    this.progress = 0;
    this.successCount = 0;
  }

  ngOnInit(): void {
    this.configService.subscribe(
      cfsi => {
        this.problems = new Array(cfsi.config.nbProblems >= 1 ? cfsi.config.nbProblems : 1); //TODO make an universal function
        for (let i = this.answersFormArray.length; i > this.problems.length;) {
          this.answersFormArray.removeAt(--i);
          console.log("FA: " + this.answersFormArray.length);
        }

        //reset state
        if (cfsi.needReset) {
          this.progress = 0;
          this.successCount = 0;
        }
      }
    );

    this.mathQuestionService.observable.subscribe(notification => {
      this.manageNotification(notification);
    });
  }

  private manageNotification(notification: MathQuestionNotifier): void {
    let currentStatus = this.answerMap.get(notification.id)
    console.log(notification)
    console.log("" + currentStatus + " " + QuestionStatus[currentStatus])


    switch (notification.status) {
      case QuestionStatus.RIGHT:
        if (currentStatus !== QuestionStatus.RIGHT) {
          this.successCount++;
          this.updateProgress();

          console.log(`SC: ${this.successCount} PR: ${this.progress}`);

          let arr = this.mathQuestionComponents.toArray();

          let mqc: MathQuestionComponent;

          for (let i = 0; i < arr.length; ++i) {
            let mq = arr[i];
            
            //find the next one first
            if (i > notification.index) {
              if (mq.notRight()) {
                mqc = mq;
                break;
              }
            } else {
              //take the firs beffore if no after
              if (mq.notRight() && mqc === undefined) {
                mqc = mq;
              }
            }
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

    this.answerMap.set(notification.id, notification.status);
  }

  private decreaseProgress(currentStatus: QuestionStatus): void {
    if (currentStatus === QuestionStatus.RIGHT) {
      this.successCount--;
      this.updateProgress()
    }
  }

  private updateProgress(): void {
    this.progress = Math.round((this.successCount / this.problemsCount) * 100);
  }

  ngAfterViewInit() {
    //this.mathQuestionComponents.forEach(mq => console.log(mq.name));
  }

  ngOnDestroy(): void {
    this.configService.unsubscribe()
    this.mathQuestionService.unsubscribe()
  }

  clearForm() {
    this.panelForm = new FormGroup({
      answers: new FormArray([])
    })
    this.answersFormArray = this.panelForm.get('answers') as FormArray;
  }

  get problemsCount(): number {
    return this.problems.length;
  }

  padding(padSize: number): any[] {
    return new Array(padSize);
  }
}
