import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsPopupComponent } from './employee-details-popup.component';

describe('EmployeeDetailsPopupComponent', () => {
  let component: EmployeeDetailsPopupComponent;
  let fixture: ComponentFixture<EmployeeDetailsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDetailsPopupComponent]
    });
    fixture = TestBed.createComponent(EmployeeDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
