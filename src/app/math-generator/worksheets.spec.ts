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
      TestHelper.isBetweenInbound(num[0], 0, 10);
      TestHelper.isBetweenInbound(num[1], 0, 10);
    });
  }

  for (var i = 0; i < 5; ++i) {
    it('add Two Single Digit Numbers with Sum 10 or Less', () => {
      let mathProblem: MathProblem = component.addTowSingleDigitNumberSum10orLess();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.answer).toBeLessThanOrEqual(10);

      expect(mathProblem.values.length).toEqual(2);

      TestHelper.isBetweenInbound(mathProblem.values[0], 0, 10);
      TestHelper.isBetweenInbound(mathProblem.values[1], 0, 10);
    });
  }

  for (var i = 0; i < 8; ++i) {
    fit('add a Single Digit Number with a Double digit Number No Carry', () => {
      let mathProblem: MathProblem = component.addDoubleDigitWithSingleDigitNumberSum10orLess();
      console.log("" + mathProblem.question + mathProblem.answer)
      //expect(mathProblem.getAnswer()).toBeLessThanOrEqual(10);

      expect(mathProblem.values.length).toEqual(2);

      let max = Math.max(...mathProblem.values);

      let min = Math.min(...mathProblem.values);

      //2 digits
      TestHelper.isBetweenInbound(max, 10, 99);

      //1 digit
      TestHelper.isBetweenInbound(min, 0, 9);

      //No carry
      let maxten = max.toString()[0]
      let answerten = mathProblem.answer.toString()[0]

      expect(answerten).toEqual(maxten);
    });
  }

  for (var i = 0; i < 5; ++i) {
    it('add Tow Double Digit Numbers No Carry', () => {
      let mathProblem: MathProblem = component.addTowDoubleDigitNumbersNoCarry();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      TestHelper.isBetweenInbound(mathProblem.values[0], 0, 99);
      TestHelper.isBetweenInbound(mathProblem.values[1], 0, 99);


    });                             
  }
});



class TestHelper {

  static isBetweenInbound(val: number, min: number, max: number) {
    expect(val >= min).toBe(true, `Test Failed! ${val} is not between ${min} and ${max}! ${val} not greater equals than ${min}`);
    expect(val <= max).toBe(true, `Test Failed! ${val} is not between ${min} and ${max}! ${val} not smaller equals than ${max}`);
  }
}
