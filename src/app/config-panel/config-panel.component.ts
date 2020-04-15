import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.css']
})

export class ConfigPanelComponent implements OnInit {
  config: Config;

  constructor(private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.fetchConfigFromService();
  }

  action(): void {
    console.log("Action")
    console.log(this.config)
  }

  fetchConfigFromService(): void {
    this.configService.getConfig().subscribe((config) => this.config = config);
    //this.config = this.configService.getConfig();
  }
}
