import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentListingComponent } from './restaurent-listing.component';

describe('RestaurentListingComponent', () => {
  let component: RestaurentListingComponent;
  let fixture: ComponentFixture<RestaurentListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurentListingComponent]
    });
    fixture = TestBed.createComponent(RestaurentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
