import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFundsItemComponent } from './manage-funds-item.component';

describe('ManageFundsItemComponent', () => {
  let component: ManageFundsItemComponent;
  let fixture: ComponentFixture<ManageFundsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageFundsItemComponent]
    });
    fixture = TestBed.createComponent(ManageFundsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
