import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { ConfigService } from '../config.service'
import {MathProblemTypes} from '../mathProblemTypes'

@Component({
  selector: 'app-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.css']
})

export class ConfigPanelComponent implements OnInit {
  config: Config;

  MathProblemTypes = MathProblemTypes;

  constructor(private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.fetchConfigFromService();
  }

  action(): void {
    console.log("Action")
    console.log(this.config)
    this.configService.configSource.next(this.config)
  }

  fetchConfigFromService(): void {
    this.configService.configSource.subscribe(
      cf => { this.config = cf; }
    );
  }
}
