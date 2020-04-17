import { Component, OnInit } from '@angular/core';
import { MathProblem } from '../mathGenerator'
import { Config } from '../config';
import { ConfigService } from '../config.service'
//import { CONFIG } from '../mock-config';

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.css']
})

export class ProblemPanelComponent implements OnInit {

  cfg: Config;
  problems: MathProblem[];

  constructor(private configService: ConfigService) {
    //this.cfg = CONFIG;
  }

  ngOnInit(): void {
    this.configService.configSource.subscribe(
      cf => {
        this.cfg = cf;
        this.problems = new Array(this.cfg.nbProblems);
      }
    );
  }

  ngOnDestroy(): void {
    this.configService.configSource.unsubscribe()
  }
}


/*
  fetchConfigFromService(): void {
    this.configService.configSource.subscribe(
      cf => {
        this.cfg = cf;
        this.problems = new Array(this.cfg.nbProblems);
      }
    );
  }
  */

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


