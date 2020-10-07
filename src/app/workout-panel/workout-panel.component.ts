import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Config } from '../services/config';
import { Subscription } from 'rxjs';
import { ConfigService, ConfigServiceInfo } from '../services/config.service'
import { WorkTask  } from './worktask'
import { MathGenerator } from '../math-generator/mathGenerator'


enum WorkoutStatus {
  Begin,
  Work,
  Finish
}

@Component({
  selector: 'app-workout-panel',
  templateUrl: './workout-panel.component.html',
  styleUrls: ['./workout-panel.component.scss']
})
export class WorkoutPanelComponent implements OnInit {
  @ViewChild('answerField') answerField: ElementRef; 

  config: Config;
  stacked: boolean;
  myEventSubscriptions: Subscription[] = [];
  tasks: WorkTask[];
  currentTask: WorkTask;
  userInput: string;
  index: number;
  WorkoutStatusEnum = WorkoutStatus;
  status: WorkoutStatus;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.myEventSubscriptions.push(this.configService.subscribe(
      (cfsi : ConfigServiceInfo) => {
        this.config = cfsi.config;
        this.stacked = this.config.orientation == "VERTICAL";
        if (cfsi.needReset) {
          //this.reset();
        }
      }
    )
    );
    this.userInput = ""
    this.status = WorkoutStatus.Begin;
  }

  initTasks() {
    this.tasks = new Array(this.config.nbQuestions);

    for (let i = 0; i < this.config.nbQuestions; i++) {
      let task = new WorkTask();
      this.tasks[i] = task;
      task.problem = MathGenerator.generateProblem(this.config);
      task.errors = 0;
    }
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  typeKey(event: KeyboardEvent) {
    console.log("typeKey");
    console.log(event);
  }

  check(event: KeyboardEvent) {
    console.log(`check ui: '${this.userInput}'`);
    console.log(event);

    let uInput = parseInt(this.userInput);

    if (uInput == this.currentTask.answer) {
      this.currentTask.setEndTime();
      this.index++;
      if (this.index >= this.tasks.length) {
        this.currentTask = null;
        this.status = WorkoutStatus.Finish;
      } else {
        this.setCurrentTask();
      }
    } else {
      //calculate errors
      let answerLength = this.currentTask.answer.toString().length;
      let userInputLength = uInput.toString().length;

      if (answerLength == userInputLength) {
        this.currentTask.errors++;
      }
    }
  }

  start()  : void {
    this.initTasks();
    this.index = 0;
    this.status = WorkoutStatus.Work;
    this.setCurrentTask()
    //TODO set focus on input
    this.setFocus();
  }

  setCurrentTask() : void {
    this.currentTask = this.tasks[this.index];
    this.userInput = "";
    this.currentTask.setStartTime();
  }

  setFocus() { 
    setTimeout(() => this.answerField.nativeElement.focus()); 
  } 

  get totalCount() {
    return this.tasks?.length;
  }
}
