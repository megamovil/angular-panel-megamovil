import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBeginFormComponent } from './category-begin-form.component';

describe('CategoryBeginFormComponent', () => {
  let component: CategoryBeginFormComponent;
  let fixture: ComponentFixture<CategoryBeginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBeginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBeginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
