import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDialogOpenerComponent } from './config-dialog-opener.component';

import { MatDialog} from '@angular/material/dialog';
import { ConfigService } from '../config.service'
import { of } from 'rxjs';

//<<-- Create a MatDialog mock class -->>
export class MatDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
}

describe('ConfigDialogOpenerComponent', () => {
  let component: ConfigDialogOpenerComponent;
  let fixture: ComponentFixture<ConfigDialogOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDialogOpenerComponent ],
      imports:[
        
      ], 
      providers: [ConfigService, { provide: MatDialog, useClass: MatDialogMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDialogOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
