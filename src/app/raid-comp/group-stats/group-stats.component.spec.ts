import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStatsComponent } from './group-stats.component';

describe('GroupStatsComponent', () => {
  let component: GroupStatsComponent;
  let fixture: ComponentFixture<GroupStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
