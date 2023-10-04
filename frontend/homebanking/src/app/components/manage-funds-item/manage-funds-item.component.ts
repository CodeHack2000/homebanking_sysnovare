import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-funds-item',
  templateUrl: './manage-funds-item.component.html',
  styleUrls: ['./manage-funds-item.component.css']
})
/**
 * Component for managing user funds by adding or withdrawing funds
 *
 * @export
 * @class ManageFundsItemComponent
 */
export class ManageFundsItemComponent {
  @Output() handleWithdrawFunds: EventEmitter<number> = new EventEmitter;
  @Output() handleAddFunds: EventEmitter<number> = new EventEmitter;
  amount: number = 0;

  /**
   * Handles the withdrawal of funds by emitting the withdrawal amount
   *
   * @memberof ManageFundsItemComponent
   */
  handleWithdraw() {
    this.handleWithdrawFunds.emit(this.amount);
    this.amount = 0;
  }

  /**
   * Handles the addition of funds by emitting the addition amount.
   *
   * @memberof ManageFundsItemComponent
   */
  handleAdd() {
    this.handleAddFunds.emit(this.amount);
    this.amount = 0;
  }
}
