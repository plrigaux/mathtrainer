import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFeaturesComponent } from './test-features.component';

describe('TestFeaturesComponent', () => {
  let component: TestFeaturesComponent;
  let fixture: ComponentFixture<TestFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
