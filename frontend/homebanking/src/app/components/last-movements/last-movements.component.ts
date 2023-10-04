import { Component, Input } from '@angular/core';
import { FundsMovementsModel } from 'src/app/shared/models/funds-movements.model';
import { FormattedFundsMovementsModel } from 'src/app/shared/models/formatted-funds-movements.model';

@Component({
  selector: 'app-last-movements',
  templateUrl: './last-movements.component.html',
  styleUrls: ['./last-movements.component.css']
})
/**
 * Component for displaying the user's last movements as part of the dashboard items
 *
 * @export
 * @class LastMovementsComponent
 */
export class LastMovementsComponent {
  @Input() userMovements!: FundsMovementsModel[];
  userLastMovements!: FormattedFundsMovementsModel[];

  /**
   * Initializes the component by mapping and formatting the user's last movements
   *
   * @memberof LastMovementsComponent
   */
  ngOnInit() {
    this.userLastMovements = this.userMovements.map(movement => {
      const value = movement.newBalance - movement.balance;
      const title = value > 0 ? "Add Funds" : "Withdraw Funds";
      const amount = value > 0 ? `+ ${movement.amount}€` : `- ${movement.amount}€`;
      const color = value > 0 ? "text-lime-500" : "text-red-600";
      const date = movement.date;

      const newLastFundsMovements: FormattedFundsMovementsModel = {
        title: title,
        amount: amount,
        color: color,
        date: date
      };

      return newLastFundsMovements;
    })
  };
}
