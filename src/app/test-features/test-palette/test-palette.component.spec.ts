import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaletteComponent } from './test-palette.component';

describe('TestPaletteComponent', () => {
  let component: TestPaletteComponent;
  let fixture: ComponentFixture<TestPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
