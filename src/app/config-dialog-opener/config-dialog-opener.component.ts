import { Component, OnInit } from '@angular/core';
import { ConfigDialogComponent } from "../config-dialog/config-dialog.component"
import { MatDialog } from '@angular/material/dialog';
import { Config } from '../services/config';
import { ConfigService, ConfigServiceMarchelor } from '../services/config.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-config-dialog-opener',
  templateUrl: './config-dialog-opener.component.html',
  styleUrls: ['./config-dialog-opener.component.scss']
})


export class ConfigDialogOpenerComponent implements OnInit {
  private myEventSubscriptions : Subscription[] = [];
  private config: Config;

  constructor(public dialog: MatDialog, private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.myEventSubscriptions.push(this.configService.subscribe(
      (cfi : ConfigServiceMarchelor) => { this.config = cfi.config; }
    ));
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
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
