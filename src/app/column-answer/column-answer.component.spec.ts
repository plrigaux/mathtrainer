import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnAnswerComponent } from './column-answer.component';

describe('ColumnAnswerComponent', () => {
  let component: ColumnAnswerComponent;
  let fixture: ComponentFixture<ColumnAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
