import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsHistoryComponent } from './funds-history.component';

describe('FundsHistoryComponent', () => {
  let component: FundsHistoryComponent;
  let fixture: ComponentFixture<FundsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundsHistoryComponent]
    });
    fixture = TestBed.createComponent(FundsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
