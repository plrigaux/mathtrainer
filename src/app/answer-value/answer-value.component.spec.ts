import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerValueComponent } from './answer-value.component';

describe('AnswerValueComponent', () => {
  let component: AnswerValueComponent;
  let fixture: ComponentFixture<AnswerValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
