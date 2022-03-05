import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMiscTableComponent } from './control-misc-table.component';

describe('ControlMiscTableComponent', () => {
  let component: ControlMiscTableComponent;
  let fixture: ComponentFixture<ControlMiscTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMiscTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMiscTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
