import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermAndConditionsFormComponent } from './term-and-conditions-form.component';

describe('TermAndConditionsFormComponent', () => {
  let component: TermAndConditionsFormComponent;
  let fixture: ComponentFixture<TermAndConditionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermAndConditionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermAndConditionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
