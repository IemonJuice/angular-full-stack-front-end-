import { TestBed } from '@angular/core/testing';

import { WriteTopicService } from './write-topic.service';

describe('WriteTopicService', () => {
  let service: WriteTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriteTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
