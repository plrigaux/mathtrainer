import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtestComponent } from './inputtest.component';

describe('InputtestComponent', () => {
  let component: InputtestComponent;
  let fixture: ComponentFixture<InputtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
