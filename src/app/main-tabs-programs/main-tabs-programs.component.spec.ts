import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabsProgramsComponent } from './main-tabs-programs.component';

describe('MainTabsProgramsComponent', () => {
  let component: MainTabsProgramsComponent;
  let fixture: ComponentFixture<MainTabsProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTabsProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTabsProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
