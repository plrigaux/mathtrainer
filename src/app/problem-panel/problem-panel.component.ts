import { Component, OnInit } from '@angular/core';
import { MathProblem } from '../mathGenerator'
import { Config } from '../config';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.scss']
})

export class ProblemPanelComponent implements OnInit {

  cfg: Config;
  problems: MathProblem[];
  
  constructor(private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.configService.configSource.subscribe(
      cf => {
        this.problems = new Array(cf.nbProblems >= 1 ? cf.nbProblems : 1); //TODO make an universal function
      }
    );
  }

  ngOnDestroy(): void {
    this.configService.configSource.unsubscribe()
  }
}
