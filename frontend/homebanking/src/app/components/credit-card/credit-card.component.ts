import { Component, Input } from '@angular/core';
import { FundsModel } from 'src/app/shared/models/funds.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
/**
 * Component for displaying a bank card layout
 * 
 * @export
 * @class CreditCardComponent
 */
export class CreditCardComponent {
  @Input() accountData!: FundsModel;
  balance!: string;

  ngOnInit() {
    this.balance = this.accountData ? this.accountData.funds.toString() : "0";
  }
}
