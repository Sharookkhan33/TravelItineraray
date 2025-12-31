import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDropdown } from './destination-dropdown';

describe('DestinationDropdown', () => {
  let component: DestinationDropdown;
  let fixture: ComponentFixture<DestinationDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
