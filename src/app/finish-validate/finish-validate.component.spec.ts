import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishValidateComponent } from './finish-validate.component';

describe('FinishValidateComponent', () => {
  let component: FinishValidateComponent;
  let fixture: ComponentFixture<FinishValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
