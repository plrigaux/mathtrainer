import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MathQuestionComponent } from './math-question.component';
import { ConfigService } from '../services/config.service'
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
        ConfigService,
        HttpBackend,
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
 
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
