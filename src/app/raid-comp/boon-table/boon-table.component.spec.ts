import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoonTableComponent } from './boon-table.component';

describe('BoonTableComponent', () => {
  let component: BoonTableComponent;
  let fixture: ComponentFixture<BoonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoonTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
