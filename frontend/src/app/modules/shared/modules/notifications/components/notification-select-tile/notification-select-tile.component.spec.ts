import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSelectTileComponent } from './notification-select-tile.component';

describe('NotificationSelectTileComponent', () => {
  let component: NotificationSelectTileComponent;
  let fixture: ComponentFixture<NotificationSelectTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationSelectTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSelectTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
