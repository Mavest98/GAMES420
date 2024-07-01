import { TestBed } from '@angular/core/testing';

import { GamesapiService } from './gamesapi.service';

describe('GamesapiService', () => {
  let service: GamesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
