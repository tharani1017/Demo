import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdetailsComponent } from './getdetails.component';

describe('GetdetailsComponent', () => {
  let component: GetdetailsComponent;
  let fixture: ComponentFixture<GetdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetdetailsComponent]
    });
    fixture = TestBed.createComponent(GetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
