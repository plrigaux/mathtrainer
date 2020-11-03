import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeManager, Range } from './rangeManager';




describe('RangeManager', () => {
  let component: RangeManager;
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
      declarations: [RangeManager]
    })

    component = RangeManager.getInstance();
  });



  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('one range', () => {

    let ranges : Range[] = component.rangeParser("1-5", false)

    expect(ranges.length).toBe(1)
  });


  fit('tow ranges', () => {

    let ranges : Range[] = component.rangeParser("1-5, 10-12", false)

    expect(ranges.length).toBe(2)
  });

  fit('handle spaces', () => {

    let ranges : Range[] = component.rangeParser(" 1 - 5 ", false)

    expect(ranges.length).toBe(1)

    expect(ranges[0].start).toBe(1)

    expect(ranges[0].end).toBe(5)

    console.log(ranges)
  });

  fit('handle negatives', () => {

    let ranges : Range[] = component.rangeParser(" -5 - -3 ", false)

    expect(ranges.length).toBe(1)

    expect(ranges[0].start).toBe(-5)

    expect(ranges[0].end).toBe(-3)

    console.log(ranges)
  });

  fit('handle single', () => {

    let ranges : Range[] = component.rangeParser("4", false)

    expect(ranges.length).toBe(1)

    expect(ranges[0].start).toBe(4)

    console.log(ranges)
  });

  fit('handle single and range', () => {

    let ranges : Range[] = component.rangeParser("4, 7-9", false)

    expect(ranges.length).toBe(2)

    expect(ranges[0].start).toBe(4)
    expect(ranges[1].start).toBe(7)
    expect(ranges[1].end).toBe(9)

    console.log(ranges)
  });

  fit('combine', () => {

    let ranges : Range[] = component.rangeParser("4-7, 6-9", true)
    console.log(ranges)
    expect(ranges.length).toBe(1)

    expect(ranges[0].start).toBe(4)
    expect(ranges[0].end).toBe(9)
  });

  fit('handle single and range combine ', () => {

    let ranges : Range[] = component.rangeParser("4-7, 6-9, 5", true)
    console.log(ranges)
    expect(ranges.length).toBe(1)

    expect(ranges[0].start).toBe(4)
    expect(ranges[0].end).toBe(9)
  });

  fit('handle single and range combine ', () => {

    let ranges : Range[] = component.rangeParser("4-7, 6-9, 5, 20-25, 26, 27-29", true)
    console.log(ranges)
    expect(ranges.length).toBe(2)

    expect(ranges[0].start).toBe(4)
    expect(ranges[0].end).toBe(9)

    expect(ranges[1].start).toBe(20)
    expect(ranges[1].end).toBe(29)
  });
});



class TestHelper {

  static isBetweenInbound(val: number, min: number, max: number) {
    expect(val >= min).toBe(true, `Test Failed! ${val} is not between ${min} and ${max}! ${val} not greater equals than ${min}`);
    expect(val <= max).toBe(true, `Test Failed! ${val} is not between ${min} and ${max}! ${val} not smaller equals than ${max}`);
  }


}
