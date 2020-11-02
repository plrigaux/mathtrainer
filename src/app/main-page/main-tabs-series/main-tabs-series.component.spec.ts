import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabsSeriesComponent } from './main-tabs-series.component';

describe('MainTabsSeriesComponent', () => {
  let component: MainTabsSeriesComponent;
  let fixture: ComponentFixture<MainTabsSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTabsSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTabsSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
