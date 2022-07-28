import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEventsFormComponent } from './category-events-form.component';

describe('CategoryEventsFormComponent', () => {
  let component: CategoryEventsFormComponent;
  let fixture: ComponentFixture<CategoryEventsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryEventsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
