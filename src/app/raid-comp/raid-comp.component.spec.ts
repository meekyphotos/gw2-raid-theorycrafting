import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidCompComponent } from './raid-comp.component';

describe('RaidCompComponent', () => {
  let component: RaidCompComponent;
  let fixture: ComponentFixture<RaidCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
