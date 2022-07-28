import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModelosComponent } from './form-modelos.component';

describe('FormModelosComponent', () => {
  let component: FormModelosComponent;
  let fixture: ComponentFixture<FormModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
