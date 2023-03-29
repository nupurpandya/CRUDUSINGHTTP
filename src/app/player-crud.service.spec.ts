import { TestBed } from '@angular/core/testing';

import { PlayerCrudService } from './player-crud.service';

describe('PlayerCrudService', () => {
  let service: PlayerCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
