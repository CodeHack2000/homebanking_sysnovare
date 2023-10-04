import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMovementsComponent } from './last-movements.component';

describe('LastMovementsComponent', () => {
  let component: LastMovementsComponent;
  let fixture: ComponentFixture<LastMovementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastMovementsComponent]
    });
    fixture = TestBed.createComponent(LastMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
