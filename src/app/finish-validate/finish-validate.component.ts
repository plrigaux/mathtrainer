import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-finish-validate',
  templateUrl: './finish-validate.component.html',
  styleUrls: ['./finish-validate.component.scss']
})
export class FinishValidateComponent implements OnInit {

  myEventSubscription: Subscription;
  isDisabled: boolean;
  tooltipMsg: string;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.myEventSubscription = this.configService.configSource.subscribe(
      cf => {
        this.isDisabled = cf.realTimeValidation;
        console.log("Is Validation disabled: " + this.isDisabled);
        if (this.isDisabled) {
          this.tooltipMsg = "Your answers are validated in real time."
        } else {
          this.tooltipMsg = "Validate all your answers!"
        }
      })
  }
  
  ngOnDestroy(): void {
    this.myEventSubscription.unsubscribe()
  }
  
  validate(): void {
    console.log("Is Validation disabled: " + this.isDisabled);
  }
}
