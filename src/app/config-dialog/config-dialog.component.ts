import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Config } from '../config';
import { mathProplemActions } from '../mathProblemTypes'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigDialogRangesComponent } from '../config-dialog-ranges/config-dialog-ranges.component';

@Component({
  selector: 'app-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrls: ['./config-dialog.component.scss']
})
export class ConfigDialogComponent implements OnInit {

  mathProplemActions: any;
  mathProplemActionsKeys: string[];
  config: Config;

  configForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Config,
    public dialog: MatDialog) {

    this.mathProplemActions = mathProplemActions;
    this.mathProplemActionsKeys = Object.keys(mathProplemActions);
    console.log("data");

    console.log(data);

    this.config = { ...data };

    this.configForm = new FormGroup({

      nbNumbers: new FormControl(this.config.nbNumbers, [Validators.required, Validators.min(2)]),
      nbProblems: new FormControl(this.config.nbProblems, [Validators.required, Validators.min(1)]),
      mathProblemTypes: new FormControl(this.config.mathProblemTypes, []),
      realTimeValidation: new FormControl(this.config.realTimeValidation, []),
      stacked: new FormControl(this.config.stacked, [])

    });

  }


  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  apply(): void {

    Object.assign(this.config, this.configForm.value);

    console.log('result');
    console.log(this.config);
    console.log(JSON.stringify(this.config));
    console.log(JSON.stringify([1, 3, 4, 5]));
    console.log(JSON.stringify([{ name: "asdf" }, { name: "asdf" }, { name: "asdf" }]));
    
    this.dialogRef.close(this.config);
  }

  setRanges(): void {
    const dialogRef = this.dialog.open(ConfigDialogRangesComponent, {
      width: '500px',
      data: this.config
    });

    dialogRef.afterClosed().subscribe(results => {
      console.log('The dialog was closed');
      console.log(results);

      if (results) {
        this.config.generateRange = results;
      }
    });
  }

  testpizza(val: any): boolean {

    console.log(val.errors);
    return true;
  }
}
