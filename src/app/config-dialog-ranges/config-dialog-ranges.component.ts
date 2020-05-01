import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Config, GenerateRange } from '../config';
import { mathProplemActions } from '../mathProblemTypes'
import { FormControl, Validators, FormGroup, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

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

  valueFormControl = new FormControl('', { updateOn: 'blur' });

  equationRangeForm: FormGroup;
  numbers: FormArray;

  constructor(
    public dialogRef: MatDialogRef<ConfigDialogRangesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Config) {

    this.mathProplemActions = mathProplemActions;
    this.mathProplemActionsKeys = Object.keys(mathProplemActions);
    console.log("data");

    console.log(data);

    this.config = { ...data };
    this.numbers = new FormArray([])
    this.equationRangeForm = new FormGroup({ numbers: this.numbers });



    let arr = this.equationRangeForm.get('arr') as FormArray;

    for (let i = 0; i < this.config.nbNumbers; i++) {

      let gr: GenerateRange = this.config.generateRange[i]

      let elem: GenerateRange = gr || {
        min: 0,
        max: 10
      }

      this.numbers.push(
        new FormGroup({
          min: new FormControl(elem.min, [Validators.required, Validators.min(0)]),
          max: new FormControl(elem.max, [Validators.required, Validators.min(0)])
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
export const minBiggerThanMaxValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  console.log(control);
  const min: number = +control.value.min;
  const max: number = +control.value.max;
  console.log(`min ${min} max ${max}`);

  return min > max ? { 'minBiggerThanMax': true } : null;
};