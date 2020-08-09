import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Worksheets } from './worksheets';
import { MathProblem } from './mathGenerator';
import { MathProblemTypes } from './mathProblemTypes';



describe('Worksheets', () => {
  let component: Worksheets;
  let fixture: ComponentFixture<Worksheets>;
  const iteration: number = 8;
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

  for (var i = 0; i < iteration; ++i) {
    it('add Single Digit Number', () => {
      let mathProblem: MathProblem = component.addSingleDigitNumber();
      let num = mathProblem.values;

      expect(num.length).toEqual(2);
      TestHelper.isBetweenInbound(num[0], 0, 10);
      TestHelper.isBetweenInbound(num[1], 0, 10);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('add Single Digit Number no Carry', () => {

      let mathProblem: MathProblem = component.addSingleDigitNumberNoCarry();
      let num = mathProblem.values;

      expect(num.length).toEqual(2);

      TestHelper.isBetweenInbound(num[0], 0, 10);
      TestHelper.isBetweenInbound(num[1], 0, 10);
      TestHelper.isBetweenInbound(mathProblem.answer, 1, 10);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('add Two Single Digit Numbers with Sum 10 or Less', () => {
      let mathProblem: MathProblem = component.addTowSingleDigitNumberSum10orLess();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.answer).toBeLessThanOrEqual(10);

      expect(mathProblem.values.length).toEqual(2);

      TestHelper.isBetweenInbound(mathProblem.values[0], 0, 10);
      TestHelper.isBetweenInbound(mathProblem.values[1], 0, 10);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    fit('add a Single Digit Number with a Double digit Number No Carry', () => {
      let mathProblem: MathProblem = component.addDoubleDigitWithSingleDigitNumberNoCarry();
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

  for (var i = 0; i < iteration; ++i) {
    fit('add Tow Double Digit Numbers No Carry', () => {
      let mathProblem: MathProblem = component.addTowDoubleDigitNumbersNoCarry();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      TestHelper.isBetweenInbound(mathProblem.values[0], 0, 99);
      TestHelper.isBetweenInbound(mathProblem.values[1], 0, 99);


    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('add Tow Numbers Answer bellow 20', () => {
      let mathProblem: MathProblem = component.addTwoNumbersAnswerBellow20();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      TestHelper.isBetweenInbound(mathProblem.answer, 0, 19);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('add Two Numbers Answer Betwen 10 and 20', () => {
      let mathProblem: MathProblem = component.addTwoNumbersAnswerBetwen10And20();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);
      expect(mathProblem.mptd.code).toBe(MathProblemTypes.ADDITION);

      TestHelper.isBetweenInbound(mathProblem.answer, 10, 20);
    });
  }

  
  for (var i = 0; i < iteration; ++i) {
    it('Subtract a one-digit number from a two-digit number - without regrouping', () => {
      let mathProblem: MathProblem = component.subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      expect(mathProblem.mptd.code).toBe(MathProblemTypes.SUBTRACTION);

      let number1 = mathProblem.values[0];
      let number2 = mathProblem.values[1];

      TestHelper.isBetweenInbound(number1, 10, 99);
      TestHelper.isBetweenInbound(number2, 0, 9);

      let answerTen = parseInt(mathProblem.answer.toString()[0]);
      let number1Ten = parseInt(number1.toString()[0]);

      expect(number1Ten - answerTen).toBe(0)
    });
  }

  //Subtraction facts - numbers up to 10
  for (var i = 0; i < iteration; ++i) {
    it('Subtract a one-digit number from a one-digit number', () => {
      let mathProblem: MathProblem = component.  subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      expect(mathProblem.mptd.code).toBe(MathProblemTypes.SUBTRACTION);

      let number1 = mathProblem.values[0];
      let number2 = mathProblem.values[1];

      TestHelper.isBetweenInbound(number1, 0, 9);
      TestHelper.isBetweenInbound(number2, 0, 9);

      let answerTen = mathProblem.answer < 10 ? 0 : parseInt(mathProblem.answer.toString()[0]);
      let number1Ten = parseInt(number1.toString()[0]);

      expect(mathProblem.answer >= 0).toBe(true);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('Subtract a one-digit number from a two-digit number - with regrouping', () => {
      let mathProblem: MathProblem = component.subtractOneDigitNumberFromTwoDigitNumberWithRegrouping();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      expect(mathProblem.mptd.code).toBe(MathProblemTypes.SUBTRACTION);

      let number1 = mathProblem.values[0];
      let number2 = mathProblem.values[1];

      TestHelper.isBetweenInbound(number1, 10, 99);
      TestHelper.isBetweenInbound(number2, 0, 9);

      let answerTen = mathProblem.answer < 10 ? 0 : parseInt(mathProblem.answer.toString()[0]);
      let number1Ten = parseInt(number1.toString()[0]);

      expect(number1Ten - answerTen).toBe(1, `Test Failed! ${number1Ten} - ${answerTen} != 1`);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('Subtract two two-digit numbers - with regrouping', () => {
      let mathProblem: MathProblem = component.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      expect(mathProblem.mptd.code).toBe(MathProblemTypes.SUBTRACTION);

      let number1 = mathProblem.values[0];
      let number2 = mathProblem.values[1];

      TestHelper.isBetweenInbound(number1, 10, 99);
      TestHelper.isBetweenInbound(number2, 10, 99);

      let answerTen = mathProblem.answer < 10 ? 0 : parseInt(mathProblem.answer.toString()[0]);
      let number1Ten = parseInt(number1.toString()[0]);
      let number2Ten = parseInt(number2.toString()[0]);

      expect(number1Ten - number2Ten).toBe(answerTen + 1, `Test Failed! ${number1Ten} - ${number2Ten} != ${answerTen} + 1`);
    });
  }

});



class TestHelper {

  static isBetweenInbound(val: number, min: number, max: number) {
    expect(val >= min).toBe(true, `Test Failed! ${val} is not between ${min} and ${max}! ${val} not greater equals than ${min}`);
    expect(val <= max).toBe(true, `Test Failed! ${val} is not between ${min} and ${max}! ${val} not smaller equals than ${max}`);
  }
}
