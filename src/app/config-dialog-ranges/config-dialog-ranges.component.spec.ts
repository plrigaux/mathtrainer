import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDialogRangesComponent } from './config-dialog-ranges.component';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CONFIG } from '../services/config';
import { of } from 'rxjs';

export class MatDialogRefMock {

  close() {
  }
}

export class MatDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
}

describe('ConfigDialogRangesComponent', () => {
  let component: ConfigDialogRangesComponent;
  let fixture: ComponentFixture<ConfigDialogRangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDialogRangesComponent ],
      providers: [{ provide: MatDialogRef, useClass: MatDialogRefMock },     {
        // I was expecting this will pass the desired value
        provide: MAT_DIALOG_DATA,
        useValue: CONFIG
      }, { provide: MatDialog, useClass: MatDialogMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDialogRangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
