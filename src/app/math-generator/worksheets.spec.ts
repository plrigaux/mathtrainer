import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Worksheets } from './worksheets';



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

  it('add Single Digit Number', () => {
    expect(component).toBeTruthy();

    let num = component.addSingleDigitNumber();

    expect(num.length).toEqual(2);


    //expect(num[0] > 1 && num[0] <= 10).toBeTruthy();
    //expect(num[1] > 1 && num[1] <= 2).toBe(true, `test ${num}`);

    //expect(num[1]).toBeWithinRange(0, 4);

    TestHelper.test(num[0], 1, 10);
    TestHelper.test(num[1], 1, 10);
  });






});

class TestHelper {

  static test(val: number, min: number, max: number) {
    expect(val >= min).toBe(true, `Test Failed! ${val} not greater equals than ${min}`);
    expect(val <= max).toBe(true, `Test Failed! ${val} not smaller equals than ${max}`);
  }
}
