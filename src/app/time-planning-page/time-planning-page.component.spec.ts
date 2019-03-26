import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePlanningPageComponent } from './time-planning-page.component';

describe('TimePlanningPageComponent', () => {
  let component: TimePlanningPageComponent;
  let fixture: ComponentFixture<TimePlanningPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePlanningPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePlanningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
