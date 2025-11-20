import { TestBed } from '@angular/core/testing';

import { TheVanityVaultData } from './the-vanity-vault-data';

describe('TheVanityVaultData', () => {
  let service: TheVanityVaultData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheVanityVaultData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
