import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderEventsFormComponent } from './slider-events-form.component';

describe('SliderEventsFormComponent', () => {
  let component: SliderEventsFormComponent;
  let fixture: ComponentFixture<SliderEventsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderEventsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
