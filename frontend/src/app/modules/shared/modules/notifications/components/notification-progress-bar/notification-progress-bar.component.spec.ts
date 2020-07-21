import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationProgressBarComponent } from './notification-progress-bar.component';

describe('NotificationProgressBarComponent', () => {
  let component: NotificationProgressBarComponent;
  let fixture: ComponentFixture<NotificationProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
