import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { Subscription } from 'rxjs';
import { ConfigService } from '../config.service'
import { WorkTask } from './worktask'
import { MathProblem } from '../mathGenerator'

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
  }

  initTasks() {
    this.tasks = new Array(this.config.nbProblems);

    for (let i = 0; i < this.config.nbProblems; i++) {
      let task = new WorkTask();
      this.tasks[i] = task;
      task.problem = MathProblem.generateProblem(this.config);
    }

    this.currentTask = this.tasks[0];
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  typeKey(event) {
  
  }

  check() {

  }
}
