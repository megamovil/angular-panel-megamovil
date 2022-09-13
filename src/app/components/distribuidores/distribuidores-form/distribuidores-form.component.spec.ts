import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidoresFormComponent } from './distribuidores-form.component';

describe('DistribuidoresFormComponent', () => {
  let component: DistribuidoresFormComponent;
  let fixture: ComponentFixture<DistribuidoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribuidoresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuidoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
