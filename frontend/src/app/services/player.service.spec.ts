import { TestBed } from '@angular/core/testing';

import { playerService } from './player.service';

describe('playerService', () => {
  let service: playerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(playerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
