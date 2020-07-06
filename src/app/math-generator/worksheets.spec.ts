import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Worksheets } from './worksheets';
import { MathProblem } from './mathGenerator';



describe('Worksheets', () => {
  let component: Worksheets;
  let fixture: ComponentFixture<Worksheets>;
  /*
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ Worksheets ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(Worksheets);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Worksheets]
    })

    component = new Worksheets();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  for (var i = 0; i < 5; ++i) {
    it('add Single Digit Number', () => {
      let num = component.addSingleDigitNumber().values;
      expect(num.length).toEqual(2);
      TestHelper.isBetweenInbound(num[0], 1, 10);
      TestHelper.isBetweenInbound(num[1], 1, 10);
    });
  }

  it('add Single Digit Number Sum 10 or Less', () => {
    let mathProblem: MathProblem = component.addSingleDigitNumberSum10orLess();

    expect(mathProblem.getAnswer()).toBeLessThanOrEqual(10);

    expect(mathProblem.values.length).toEqual(2);

    TestHelper.isBetweenInbound(mathProblem.values[0], 1, 10);
    TestHelper.isBetweenInbound(mathProblem.values[1], 1, 10);
  });

});

class TestHelper {

  static isBetweenInbound(val: number, min: number, max: number) {
    expect(val >= min).toBe(true, `Test Failed! ${val} not greater equals than ${min}`);
    expect(val <= max).toBe(true, `Test Failed! ${val} not smaller equals than ${max}`);
  }
}
