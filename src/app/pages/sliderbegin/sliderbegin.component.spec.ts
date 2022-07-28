import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderbeginComponent } from './sliderbegin.component';

describe('SliderbeginComponent', () => {
  let component: SliderbeginComponent;
  let fixture: ComponentFixture<SliderbeginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderbeginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderbeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
