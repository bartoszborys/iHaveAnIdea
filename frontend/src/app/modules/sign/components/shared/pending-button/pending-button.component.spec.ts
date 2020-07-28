import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingButtonComponent } from './pending-button.component';

describe('PendingButtonComponent', () => {
  let component: PendingButtonComponent;
  let fixture: ComponentFixture<PendingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
