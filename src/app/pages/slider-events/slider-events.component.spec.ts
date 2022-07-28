import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderEventsComponent } from './slider-events.component';

describe('SliderEventsComponent', () => {
  let component: SliderEventsComponent;
  let fixture: ComponentFixture<SliderEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
