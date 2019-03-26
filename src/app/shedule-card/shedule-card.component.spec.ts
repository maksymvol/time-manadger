import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleCardComponent } from './shedule-card.component';

describe('SheduleCardComponent', () => {
  let component: SheduleCardComponent;
  let fixture: ComponentFixture<SheduleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
