import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormattedFundsMovementsModel } from 'src/app/shared/models/formatted-funds-movements.model';
import { CustomSnackbarService } from 'src/app/shared/services/custom-snackbar.service';
import { FundsService } from 'src/app/shared/services/funds.service';

@Component({
  selector: 'app-funds-history',
  templateUrl: './funds-history.component.html',
  styleUrls: ['./funds-history.component.css']
})
/**
 * Component for displaying the user's funds movements history page
 *
 * @export
 * @class FundsHistoryComponent
 */
export class FundsHistoryComponent {
  formattedUserMovements!: FormattedFundsMovementsModel[];

  constructor(private fundsService: FundsService, private snackbarService: CustomSnackbarService, private router: Router) {}

  /**
   * Initializes the component by fetching and formatting user funds movements
   *
   * @memberof FundsHistoryComponent
   */
  ngOnInit() {
    this.fundsService.getUserFundsMovements().subscribe((userMovementsFunds) => {
      const reversedList = userMovementsFunds.reverse();
      this.formattedUserMovements = reversedList.map(movement => {
        const value = movement.newBalance - movement.balance;
        const title = value > 0 ? "Add Funds" : "Withdraw Funds";
        const amount = value > 0 ? `+ ${movement.amount}€` : `- ${movement.amount}€`;
        const color = value > 0 ? "text-lime-500" : "text-red-600";
        const date = movement.date;

        const newFormattedFundsMovements: FormattedFundsMovementsModel = {
          title: title,
          amount: amount,
          color: color,
          date: date
        };
        
        return newFormattedFundsMovements;
      })
    },
      (error) => {
        if (error.status === 401) {
          this.snackbarService.openSnackBar("Please log in first", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
        } else {
          this.snackbarService.openSnackBar("An error occurred, try again", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      })
  }
}
