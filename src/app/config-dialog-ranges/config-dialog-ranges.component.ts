import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Config } from '../services/config';
import { GenerateRange } from '../math-generator/mathProblemTypes';
import { MATHProplemActions } from '../math-generator/mathProblemTypes'
import { UntypedFormControl, Validators, UntypedFormGroup, UntypedFormArray, ValidationErrors, ValidatorFn, FormGroupDirective, NgForm, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-config-dialog-ranges',
  templateUrl: './config-dialog-ranges.component.html',
  styleUrls: ['./config-dialog-ranges.component.scss']
})
export class ConfigDialogRangesComponent implements OnInit {

  mathProplemActions: any;
  mathProplemActionsKeys: string[];
  config: Config;

  displayedColumns: string[] = ["position", 'min', 'max'];

  valueFormControl = new UntypedFormControl('', { updateOn: 'blur' });

  equationRangeForm: UntypedFormGroup;
  numbers: UntypedFormArray;
  parentErrorStateMatcher = new ParentErrorStateMatcher();
  
  constructor(
    public dialogRef: MatDialogRef<ConfigDialogRangesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Config) {

    this.mathProplemActions = MATHProplemActions;
    this.mathProplemActionsKeys = Object.keys(MATHProplemActions);
    //console.log("data");

    //console.log(data);

    this.config = { ...data };
    this.numbers = new UntypedFormArray([])
    this.equationRangeForm = new UntypedFormGroup({ numbers: this.numbers });



    let arr = this.equationRangeForm.get('arr') as UntypedFormArray;

    for (let i = 0; i < this.config.nbNumbers; i++) {

      let gr: GenerateRange = this.config.generateRange[i]

      let elem: GenerateRange = gr || {
        min: 0,
        max: 10
      }

      this.numbers.push(
        new UntypedFormGroup({
          min: new UntypedFormControl(elem.min, [Validators.required, Validators.min(0)]),
          max: new UntypedFormControl(elem.max, [Validators.required, Validators.min(0)])
        }, { validators: minBiggerThanMaxValidator })
      );

    }
    //console.log(this.dataSource);
  }


  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  apply(): void {
    let results: GenerateRange[] = []

    this.numbers.controls.forEach(element => {
      results.push({
        min: +element.value.min,
        max: +element.value.max
      });
    });

    console.log(results)
    this.dialogRef.close(results);
  }

  setRanges(): void {

  }

  minBiggerThanMaxTest(i: number): boolean {
    return this.numbers.controls[i].errors?.minBiggerThanMax;  
  }
}

/** A hero's name can't match the hero's alter ego */
export const minBiggerThanMaxValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //console.log(control);
  const min: number = +control.get('min').value;
  const max: number = +control.get('max').value;
  //console.log(`min ${min} max ${max}`);

  return min > max ? { 'minBiggerThanMax': true } : null;
};

export class ParentErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = !!(form && form.submitted);
      const controlTouched = !!(control && (control.dirty || control.touched));
      const controlInvalid = !!(control && control.invalid);
      const parentInvalid = !!(control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched));

      return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));
  }
}