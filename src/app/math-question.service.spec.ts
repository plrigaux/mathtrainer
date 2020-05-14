import { TestBed } from '@angular/core/testing';

import { MathQuestionService } from './math-question.service';

describe('MathQuestionService', () => {
  let service: MathQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
