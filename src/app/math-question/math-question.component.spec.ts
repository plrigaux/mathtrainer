import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MathQuestionComponent } from './math-question.component';
import { ConfigService } from '../config.service'
import { NGXLogger, NGXMapperService, NGXLoggerHttpService, LoggerConfig } from 'ngx-logger';
import { HttpBackend } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormArray, FormControl, FormsModule, Validators, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';

describe('MathQuestionComponent', () => {
  let component: MathQuestionComponent;
  let fixture: ComponentFixture<MathQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MathQuestionComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        NGXLogger,
        NGXMapperService,
        ConfigService,
        HttpBackend,
        NGXLoggerHttpService,
        LoggerConfig,
        DatePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(MathQuestionComponent);
    component = fixture.componentInstance;

    //Mock data
    let panelForm: FormGroup = fb.group({
      name: ['Other Name', Validators.required],
      answers: new FormArray([new FormControl('', Validators.required)])
    });
    Object.defineProperty(component, 'panelForm', { value: panelForm });
    Object.defineProperty(component, 'questionId', { value: 1 });
    component.answer = new FormControl('', Validators.required);

    Object.defineProperty(component, 'answers', {
      value: {
        at: (i: number) => { 
          return new FormControl('', Validators.required); 
        }
      }      /*
      () => {
      return new FormArray([new FormControl('', Validators.required)])
    }
  */
    });

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
