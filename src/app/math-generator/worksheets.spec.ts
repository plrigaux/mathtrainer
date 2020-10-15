import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Worksheets } from './worksheets';
import { MathProblem } from './mathProblem';
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
      let mathProblem: MathProblem = Worksheets.addSingleDigitNumber();
      let num = mathProblem.values;

      expect(num.length).toEqual(2);
      TestHelper.isBetweenInbound(num[0], 0, 10);
      TestHelper.isBetweenInbound(num[1], 0, 10);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('add Single Digit Number no Carry', () => {

      let mathProblem: MathProblem = Worksheets.addSingleDigitNumberNoCarry();
      let num = mathProblem.values;

      expect(num.length).toEqual(2);

      TestHelper.isBetweenInbound(num[0], 0, 10);
      TestHelper.isBetweenInbound(num[1], 0, 10);
      TestHelper.isBetweenInbound(mathProblem.answer, 1, 10);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('add Two Single Digit Numbers with Sum 10 or Less', () => {
      let mathProblem: MathProblem = Worksheets.addTowSingleDigitNumberSum10orLess();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.answer).toBeLessThanOrEqual(10);

      expect(mathProblem.values.length).toEqual(2);

      TestHelper.isBetweenInbound(mathProblem.values[0], 0, 10);
      TestHelper.isBetweenInbound(mathProblem.values[1], 0, 10);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('add a Single Digit Number with a Double digit Number No Carry', () => {
      let mathProblem: MathProblem = Worksheets.addDoubleDigitWithSingleDigitNumberNoCarry();
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
    it('add Tow Double Digit Numbers No Carry', () => {
      let mathProblem: MathProblem = Worksheets.addTowDoubleDigitNumbersNoCarry();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      TestHelper.isBetweenInbound(mathProblem.values[0], 0, 99);
      TestHelper.isBetweenInbound(mathProblem.values[1], 0, 99);

      let va1unit = mathProblem.values[0] % 10
      let va2unit = mathProblem.values[1] % 10

      //No carry on unit
      expect(va1unit + va2unit).toBeLessThan(10, `${va1unit} + ${va2unit} NOT less than 10`);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('add Tow Double Digit Numbers With Carry', () => {
      let mathProblem: MathProblem = Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      expect(mathProblem.mathProplemActions.code).toBe(MathProblemTypes.ADDITION);

      TestHelper.isBetweenInbound(mathProblem.values[0], 0, 99);
      TestHelper.isBetweenInbound(mathProblem.values[1], 0, 99);

      let va1unit = mathProblem.values[0] % 10
      let va2unit = mathProblem.values[1] % 10

      //With carry on unit
      expect(va1unit + va2unit).toBeGreaterThanOrEqual(10, `${va1unit} + ${va2unit} NOT greater or equal than 10`);
    });
  }


  for (var i = 0; i < iteration; ++i) {
    it('add Tow Numbers Answer bellow 20', () => {
      let mathProblem: MathProblem = Worksheets.addTwoNumbersAnswerBellow20();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      TestHelper.isBetweenInbound(mathProblem.answer, 0, 19);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    it('add Two Numbers Answer Betwen 10 and 20', () => {
      let mathProblem: MathProblem = Worksheets.addTwoNumbersAnswerBetwen10And20();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);
      expect(mathProblem.mathProplemActions.code).toBe(MathProblemTypes.ADDITION);

      TestHelper.isBetweenInbound(mathProblem.answer, 10, 20);
    });
  }


  for (var i = 0; i < iteration; ++i) {
    it('Subtract a one-digit number from a two-digit number - without regrouping', () => {
      let mathProblem: MathProblem = Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      expect(mathProblem.mathProplemActions.code).toBe(MathProblemTypes.SUBTRACTION);

      let number1 = mathProblem.values[0];
      let number2 = mathProblem.values[1];

      expect(mathProblem.answer).toBeGreaterThanOrEqual(0, `${number1} - ${number2} NOT greater or equals than 0`);
      
      TestHelper.isBetweenInbound(number1, 10, 99);
      TestHelper.isBetweenInbound(number2, 0, 9);

      let answerTen = parseInt(mathProblem.answer.toString()[0]);
      let number1Ten = parseInt(number1.toString()[0]);

      expect(number1Ten - answerTen).toBe(0)
    });
  }

  //Subtraction facts - numbers up to 10
  for (var i = 0; i < iteration; ++i) {
    fit('Subtract a one-digit number from a one-digit number', () => {
      let mathProblem: MathProblem = Worksheets.subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      expect(mathProblem.mathProplemActions.code).toBe(MathProblemTypes.SUBTRACTION);

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
    fit('subtract Multiples Of 10', () => {
      let mathProblem: MathProblem = Worksheets.subtractMultiplesOf10();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      TestHelper.isBetweenInbound(mathProblem.values[0], 10, 90);
      TestHelper.isBetweenInbound(mathProblem.values[1], 10, 90);

      let val1 = mathProblem.values[0];
      let val2 = mathProblem.values[1];

      expect(val1 % 10).toBe(0, `${val1} NOT multibl of 10`);
      expect(val2 % 10).toBe(0, `${val2} NOT multibl of 10`);
      expect(mathProblem.answer).toBeGreaterThanOrEqual(0, `${val1} - ${val2} NOT greater or equals than 0`);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    fit('Subtract a one-digit number from a two-digit number - with regrouping', () => {
      let mathProblem: MathProblem = Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithRegrouping();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      expect(mathProblem.mathProplemActions.code).toBe(MathProblemTypes.SUBTRACTION);

      let number1 = mathProblem.values[0];
      let number2 = mathProblem.values[1];

      expect(mathProblem.answer).toBeGreaterThanOrEqual(0, `${number1} - ${number2} NOT greater or equals than 0`);

      TestHelper.isBetweenInbound(number1, 10, 99);
      TestHelper.isBetweenInbound(number2, 0, 9);

      let answerTen = mathProblem.answer < 10 ? 0 : parseInt(mathProblem.answer.toString()[0]);
      let number1Ten = parseInt(number1.toString()[0]);

      expect(number1Ten - answerTen).toBe(1, `Not different ten! number1Ten ${number1Ten} - answerTen ${answerTen} != 1`);
    });
  }

  for (var i = 0; i < iteration; ++i) {
    fit('Subtract two two-digit numbers - with regrouping', () => {
      let mathProblem: MathProblem = Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping();
      console.log("" + mathProblem.question + mathProblem.answer)
      expect(mathProblem.values.length).toEqual(2);

      expect(mathProblem.mathProplemActions.code).toBe(MathProblemTypes.SUBTRACTION);

      let number1 = mathProblem.values[0];
      let number2 = mathProblem.values[1];

      expect(mathProblem.answer).toBeGreaterThanOrEqual(0, `${number1} - ${number2} NOT greater or equals than 0`);

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
