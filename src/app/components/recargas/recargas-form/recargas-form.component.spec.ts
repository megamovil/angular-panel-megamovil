import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargasFormComponent } from './recargas-form.component';

describe('RecargasFormComponent', () => {
  let component: RecargasFormComponent;
  let fixture: ComponentFixture<RecargasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecargasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
