import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDialogOpenerComponent } from './config-dialog-opener.component';

describe('ConfigDialogOpenerComponent', () => {
  let component: ConfigDialogOpenerComponent;
  let fixture: ComponentFixture<ConfigDialogOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDialogOpenerComponent ]
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
