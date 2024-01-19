import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCatelogueComponent } from './food-catelogue.component';

describe('FoodCatelogueComponent', () => {
  let component: FoodCatelogueComponent;
  let fixture: ComponentFixture<FoodCatelogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCatelogueComponent]
    });
    fixture = TestBed.createComponent(FoodCatelogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
