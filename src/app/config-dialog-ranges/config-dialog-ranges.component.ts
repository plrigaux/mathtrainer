import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Config, GenerateRange } from '../config';
import { mathProplemActions } from '../mathProblemTypes'
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-config-dialog-ranges',
  templateUrl: './config-dialog-ranges.component.html',
  styleUrls: ['./config-dialog-ranges.component.scss']
})
export class ConfigDialogRangesComponent implements OnInit {

  mathProplemActions: any;
  mathProplemActionsKeys: string[];
  config: Config;

  displayedColumns: string[] = ['min', 'max'];
  dataSource : GenerateRange[] = [];

  valueFormControl = new FormControl('', { updateOn: 'blur' });

  myGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ConfigDialogRangesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Config,
    private formBuilder: FormBuilder) {

    this.mathProplemActions = mathProplemActions;
    this.mathProplemActionsKeys = Object.keys(mathProplemActions);
    console.log("data");

    console.log(data);

    this.config = { ...data };

    this.myGroup = this.formBuilder.group({
      arr: this.formBuilder.array([])
    });

    let arr = this.myGroup.get('arr') as FormArray;

    for (let i = 0; i < this.config.nbNumbers; i++) {

      let gr: GenerateRange = this.config.generateRange[i]

      let elem: GenerateRange = gr || {
        min: 0,
        max: 10
      }

      this.dataSource.push(elem);

      arr.push(
        this.formBuilder.group({
          min: [elem.min, [Validators.required]],
          max: [elem.max, [Validators.required]]
        })
      );

    }
    console.log(this.dataSource);




  }


  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  apply(): void {


    console.log(this.dataSource);

    this.dialogRef.close(this.dataSource);
  }

  setRanges(): void {

  }
}
