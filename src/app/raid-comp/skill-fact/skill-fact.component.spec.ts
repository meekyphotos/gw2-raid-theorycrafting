import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillFactComponent } from './skill-fact.component';

describe('SkillFactComponent', () => {
  let component: SkillFactComponent;
  let fixture: ComponentFixture<SkillFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillFactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
