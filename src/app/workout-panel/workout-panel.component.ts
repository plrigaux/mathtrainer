import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { Subscription } from 'rxjs';
import { ConfigService } from '../config.service'
import { WorkTask  } from './worktask'
import { MathProblem } from '../mathGenerator'


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


  config: Config;
  stacked: boolean;
  myEventSubscriptions: Subscription[] = [];
  tasks: WorkTask[];
  currentTask: WorkTask;
  userInput: string;
  index: number;
  WorkoutStatusEnum = WorkoutStatus;
  status: WorkoutStatus;
  progress: number = 0;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.myEventSubscriptions.push(this.configService.subscribe(
      cfsi => {
        this.config = cfsi.config;
        this.stacked = this.config.orientation == "VERTICAL";
        this.initTasks();
        if (cfsi.needReset) {
          //this.reset();
        }
      }
    ));
    this.userInput = ""
    this.status = WorkoutStatus.Begin;
  }

  initTasks() {
    this.tasks = new Array(this.config.nbProblems);

    for (let i = 0; i < this.config.nbProblems; i++) {
      let task = new WorkTask();
      this.tasks[i] = task;
      task.problem = MathProblem.generateProblem(this.config);
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
    this.userInput = (<HTMLInputElement>event.target).value;
    console.log(`check ui: '${this.userInput}'`);
    console.log(event);

    let uInput = parseInt(this.userInput);

    if (uInput == this.currentTask.answer) {
      this.index = this.index + 1;
      if (this.index >= this.tasks.length) {
        this.currentTask = null;
        this.status = WorkoutStatus.Finish;
        this.progress = 100;
      } else {
        this.currentTask = this.tasks[this.index];
        (<HTMLInputElement>event.target).value = "";
        this.progress = (this.index / this.tasks.length) * 100;
      }
    }
  }

  start() {
    this.index = 0;
    this.currentTask = this.tasks[this.index];
    this.status = WorkoutStatus.Work;
    this.progress = 0;
  }
}
