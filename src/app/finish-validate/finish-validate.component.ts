import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { Subscription } from 'rxjs';
import { ValidateAllService, MathQuestionValidation } from '../services/validate-all.service'

@Component({
  selector: 'app-finish-validate',
  templateUrl: './finish-validate.component.html',
  styleUrls: ['./finish-validate.component.scss']
})
export class FinishValidateComponent implements OnInit {
  isDisabled: boolean;
  tooltipMsg: string;
  private myEventSubscriptions: Subscription[] = [];

  constructor(private configService: ConfigService, private validateAllService: ValidateAllService) { }

  ngOnInit(): void {
    this.myEventSubscriptions.push(
      this.configService.subscribe(
        cfi => {
          this.isDisabled = cfi.config.realTimeValidation;
          console.log("Is Validation disabled: " + this.isDisabled);
          if (this.isDisabled) {
            this.tooltipMsg = "Your answers are validated in real time."
          } else {
            this.tooltipMsg = "Validate all your answers!"
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  validate(): void {
    console.log("Is Validation disabled: " + this.isDisabled);

    //TODO see if below is the proper way
    let test: MathQuestionValidation[] = []
    this.validateAllService.updateValidation(test);
    //this.validateAllService.myValidation.complete();
    console.log("test " + test.length);
    test.forEach(v => console.log(`Question ${v.id} Results ${v.correct}`));
  }
}
