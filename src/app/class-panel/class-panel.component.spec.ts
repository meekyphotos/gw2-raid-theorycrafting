import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPanelComponent } from './class-panel.component';

describe('ClassPanelComponent', () => {
  let component: ClassPanelComponent;
  let fixture: ComponentFixture<ClassPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
