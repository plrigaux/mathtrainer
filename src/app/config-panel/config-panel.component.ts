import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.css']
})

export class ConfigPanelComponent implements OnInit {
  config: Config = {
    nbProblems: 10,
    nbNumbers: 3
  }
  constructor() { }

  ngOnInit(): void {
  }

  action():void {
    console.log("Action")
    console.log(this.config)
  }
}
