import { Component, Input, HostListener } from '@angular/core';
import { FundsMovementsModel } from 'src/app/shared/models/funds-movements.model';
import { FundsModel } from 'src/app/shared/models/funds.model';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './dashboard-items.component.html',
  styleUrls: ['./dashboard-items.component.css']
})
/**
 * Component for displaying dashboard items
 *
 * @export
 * @class DashboardItemsComponent
 */
export class DashboardItemsComponent {
  @Input() userAccountData!: FundsModel;
  @Input() userLastMovements!: FundsMovementsModel[];
  @Input() userMovements!: FundsMovementsModel[];
  userExpenseSummary!: string;
  userIncomeSummary!: string;
  userAverageBalance!: string;

  ngOnInit(): void {
    this.calculateFundsSummary();
    this.calculateAverageBalance();
  }

  colsSpanNumber: number = 1;

  /**
   * Host listener to adjust the number of columns based on window resize
   *
   * @param {Event} event - The window resize event
   * @memberof DashboardItemsComponent
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth >= 1340) {
      this.colsSpanNumber = 1;
    } else if (window.innerWidth < 1340 && window.innerWidth >= 960) {
      this.colsSpanNumber = 2;
    } else {
      this.colsSpanNumber = 3;
    }
  }

  /**
   * Calculates and sets the user's average balance
   *
   * @memberof DashboardItemsComponent
   */
  calculateAverageBalance(): void {
    const balanceSum = this.userMovements.reduce((total, movement) => {
      return total + movement.newBalance;
    }, 0);
    const averageBalance = (balanceSum / this.userMovements.length).toFixed(2);

    this.userAverageBalance = `${averageBalance}€`;
  }

  /**
   * Calculates and sets the user's expense and income summary for a specified period
   *
   * @memberof DashboardItemsComponent
   */
  calculateFundsSummary(): void {
    const actualDate = new Date();

    const startDate = new Date();
    startDate.setDate(actualDate.getDate() - 30);

    const movementsInPeriod = this.userMovements.filter((movement) => {
      const date = movement.date.slice(0, 9).trim();
      const formattedDateParts = date.split('/');
      const movementDate = new Date(parseInt(formattedDateParts[2]), parseInt(formattedDateParts[1]) - 1, parseInt(formattedDateParts[0]));
      return movementDate >= startDate && movementDate <= actualDate;
    });

    const expenseInPeriod = movementsInPeriod.reduce((total, movement) => {
      const value = movement.newBalance - movement.balance;
      if (value < 0) {
        return total + movement.amount;
      }
      return total;
    }, 0);

    const incomeInPeriod = movementsInPeriod.reduce((total, movement) => {
      const value = movement.newBalance - movement.balance;
      if (value > 0) {
        return total + movement.amount;
      }
      return total;
    }, 0);

    this.userExpenseSummary = `- ${expenseInPeriod.toFixed(2)}€`;
    this.userIncomeSummary = `+ ${incomeInPeriod.toFixed(2)}€`;
  }
}
