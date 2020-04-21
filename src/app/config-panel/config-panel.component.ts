import { Component, OnInit, NgModule } from '@angular/core';
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { mathProplemActions } from '../mathProblemTypes'


/*
@NgModule({
  imports: [MatSliderModule]
})
*/

@Component({
  selector: 'app-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.scss']
})

export class ConfigPanelComponent implements OnInit {
  config: Config;

  //MathProblemTypes = MathProblemTypes;
  mathProplemActions: any = mathProplemActions;
  mathProplemActionsKeys: string[];

  constructor(private configService: ConfigService) {
    this.mathProplemActionsKeys = Object.keys(mathProplemActions);
    console.log("this.mathProplemActionsKeys")
    console.log(this.mathProplemActionsKeys)
    console.log(mathProplemActions)
  }

  ngOnInit(): void {
    this.fetchConfigFromService();
  }

  action(): void {
    console.log("Action")
    console.log(this.config)
    this.configService.configSource.next({ ...this.config })
  }

  fetchConfigFromService(): void {
    this.configService.configSource.subscribe(
      cf => { this.config = { ...cf }; }
    );
  }
}
