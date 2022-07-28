import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationssComponent } from './notificationss.component';

describe('NotificationssComponent', () => {
  let component: NotificationssComponent;
  let fixture: ComponentFixture<NotificationssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
