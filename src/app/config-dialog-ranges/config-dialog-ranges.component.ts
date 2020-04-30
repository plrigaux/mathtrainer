import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Config, GenerateRange } from '../config';
import { mathProplemActions } from '../mathProblemTypes'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

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
  dataSource = [];

  valueFormControl = new FormControl('', { updateOn: 'blur' });

  constructor(
    public dialogRef: MatDialogRef<ConfigDialogRangesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Config) {

    this.mathProplemActions = mathProplemActions;
    this.mathProplemActionsKeys = Object.keys(mathProplemActions);
    console.log("data");

    console.log(data);

    this.config = { ...data };

    for (let i = 0; i < this.config.nbNumbers; i++) {

      let gr: GenerateRange = this.config.generateRange[i]

      let min = 0;
      let max = 10;

      if (gr) {
        min = gr.min;
        max = gr.max;
      }

      let elem: GenerateRange = {
        min: min,
        max: max
      }

      this.dataSource.push(elem);
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
