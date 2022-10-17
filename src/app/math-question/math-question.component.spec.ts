import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MathQuestionComponent } from './math-question.component';
import { ConfigService } from '../services/config.service'
import { HttpBackend } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { UntypedFormArray, UntypedFormControl, FormsModule, Validators, UntypedFormBuilder, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

describe('MathQuestionComponent', () => {
  let component: MathQuestionComponent;
  let fixture: ComponentFixture<MathQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MathQuestionComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        ConfigService,
        HttpBackend,
        DatePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([UntypedFormBuilder], (fb: UntypedFormBuilder) => {
    fixture = TestBed.createComponent(MathQuestionComponent);
    component = fixture.componentInstance;

    //Mock data
    let panelForm: UntypedFormGroup = fb.group({
      name: ['Other Name', Validators.required],
      answers: new UntypedFormArray([new UntypedFormControl('', Validators.required)])
    });
 
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
