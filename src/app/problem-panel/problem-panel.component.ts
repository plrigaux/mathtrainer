import { Component, OnInit, NgModule } from '@angular/core';
import { MathProblem } from '../mathGenerator'
import { MathQuestionComponent } from '../math-question/math-question.component';
import { Config } from '../config';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.css']
})
export class ProblemPanelComponent implements OnInit {

  config: Config;
  problems: MathProblem[];

  constructor(private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.fetchConfigFromService();
    this.problems = new Array(10);
  }

  fetchConfigFromService(): void {
    this.configService.getConfig().subscribe((config) => this.config = config);
  }
/*
  draw() {
    console.log("Test this")
    var numbs : number[] = new Array(50);
    for(let i = 1;i <= 50; i++) {
      numbs[i-1] = i
    }
    console.log(numbs)

    var bdays = [8,
      12,
      26,
      1,
      10,
      20,
      20]

      var draw = [];

      let inc = 0;
      for(let j of bdays) {
        inc = inc + j
        let idx =  (inc - 1) % numbs.length
        let val = numbs[idx]
        numbs.splice(idx, 1)
        inc = inc - 1
        console.log(`val ${val} - idx ${idx} - ${numbs.length} - bday ${j}`)
        draw.push(val)
      }

      console.log(...draw)
      console.log(...numbs)
  }
*/

}
