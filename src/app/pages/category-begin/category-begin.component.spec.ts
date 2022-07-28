import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBeginComponent } from './category-begin.component';

describe('CategoryBeginComponent', () => {
  let component: CategoryBeginComponent;
  let fixture: ComponentFixture<CategoryBeginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBeginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
