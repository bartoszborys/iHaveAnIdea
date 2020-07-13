import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveElementInfoComponent } from './reactive-element-info.component';

describe('ReactiveElementInfoComponent', () => {
  let component: ReactiveElementInfoComponent;
  let fixture: ComponentFixture<ReactiveElementInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveElementInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveElementInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
