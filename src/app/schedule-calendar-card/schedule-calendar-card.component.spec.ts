import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCalendarCardComponent } from './schedule-calendar-card.component';

describe('ScheduleCalendarCardComponent', () => {
  let component: ScheduleCalendarCardComponent;
  let fixture: ComponentFixture<ScheduleCalendarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCalendarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalendarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
