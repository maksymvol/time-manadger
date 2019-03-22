import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPreviewListComponent } from './tasks-preview-list.component';

describe('TasksPreviewListComponent', () => {
  let component: TasksPreviewListComponent;
  let fixture: ComponentFixture<TasksPreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksPreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
