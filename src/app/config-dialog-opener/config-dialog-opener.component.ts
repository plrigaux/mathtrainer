import { Component, OnInit } from '@angular/core';
import { ConfigDialogComponent } from "../config-dialog/config-dialog.component"
import { MatDialog } from '@angular/material/dialog';
import { Config } from '../config';
import { ConfigService } from '../config.service'



@Component({
  selector: 'app-config-dialog-opener',
  templateUrl: './config-dialog-opener.component.html',
  styleUrls: ['./config-dialog-opener.component.scss']
})


export class ConfigDialogOpenerComponent implements OnInit {

  config: Config;

  constructor(public dialog: MatDialog, private configService: ConfigService) {

  }

  ngOnInit(): void {

    this.configService.subscribe(
      cfi => { this.config = cfi.config; }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfigDialogComponent, {
      width: '400px',
      data: this.config
    });

    dialogRef.afterClosed().subscribe(results => {
      console.log('The dialog was closed');
      console.log(results);

      if (results) {
        this.config = { ...results }
        this.configService.next(this.config, true)
      }
    });
  }
}
