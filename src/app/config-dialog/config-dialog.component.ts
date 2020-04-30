import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { mathProplemActions } from '../mathProblemTypes'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
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

  constructor(
    public dialogRef: MatDialogRef<ConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Config,
    public dialog: MatDialog) {

    this.mathProplemActions = mathProplemActions;
    this.mathProplemActionsKeys = Object.keys(mathProplemActions);
    console.log("data");

    console.log(data);

    this.config = { ...data };
  }


  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  apply(): void {
    this.dialogRef.close(this.config);
  }

  setRanges() : void {
    const dialogRef = this.dialog.open(ConfigDialogRangesComponent, {
      width: '500px',
      data: this.config
    });

    dialogRef.afterClosed().subscribe(results => {
      console.log('The dialog was closed');
      console.log(results);

      if (results) {
        this.config.generateRange = { ...results }
      }
    });
  }
}
