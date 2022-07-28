import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsModelosComponent } from './details-modelos.component';

describe('DetailsModelosComponent', () => {
  let component: DetailsModelosComponent;
  let fixture: ComponentFixture<DetailsModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsModelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
