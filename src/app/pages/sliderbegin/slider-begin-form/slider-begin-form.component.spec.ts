import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBeginFormComponent } from './slider-begin-form.component';

describe('SliderBeginFormComponent', () => {
  let component: SliderBeginFormComponent;
  let fixture: ComponentFixture<SliderBeginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBeginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBeginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
