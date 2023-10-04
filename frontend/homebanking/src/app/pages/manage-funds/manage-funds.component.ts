import { Component } from '@angular/core';
import { CustomSnackbarService } from 'src/app/shared/services/custom-snackbar.service';
import { FundsService } from 'src/app/shared/services/funds.service';
import { FundsActionModel } from 'src/app/shared/models/funds-action.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-funds',
  templateUrl: './manage-funds.component.html',
  styleUrls: ['./manage-funds.component.css']
})
/**
 * Component for displaying the manage funds page where the user can add or withdraw funds
 *
 * @export
 * @class ManageFundsComponent
 */
export class ManageFundsComponent {
  constructor(private snackbarService: CustomSnackbarService, private fundsService: FundsService, private router: Router) {}

  /**
   * Initializes the component and checks the user's funds
   *
   * @memberof ManageFundsComponent
   */
  ngOnInit() {
    this.fundsService.getUserFunds().subscribe(() => {},
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
    });
  }

  /**
   * Handles adding funds to the user's balance
   *
   * @param {number} value - The amount of funds to add
   * @memberof ManageFundsComponent
   */
  handleAdd(value: number) {
    if (value <= 0) {
      this.snackbarService.openSnackBar("The value must be greater than 0", 2);
      return;
    }

    const fundsAction: FundsActionModel = {
      amount: value
    }

    this.fundsService.addUserFunds(fundsAction).subscribe(() => {
      this.snackbarService.openSnackBar("Funds added to your balance successfully", 1);
    },
    (error) => {
      if (error.status === 401) {
        this.snackbarService.openSnackBar("Please log in first", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
      } else if (error.status === 400) {
        this.snackbarService.openSnackBar("Please enter a valid number", 2);
      } else {
        this.snackbarService.openSnackBar("An error occurred, try again", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
      }
    })
  }

  /**
   * Handles withdrawing funds from the user's balance
   *
   * @param {number} value - The amount of funds to withdraw
   * @memberof ManageFundsComponent
   */
  handleWithdraw(value: number) {
    if (value <= 0) {
      this.snackbarService.openSnackBar("The value must be greater than 0", 2);
      return;
    }

    const fundsAction: FundsActionModel = {
      amount: value
    }

    this.fundsService.withdrawUserFunds(fundsAction).subscribe(() => {
      this.snackbarService.openSnackBar("Funds successfully withdrawn from your balance", 1);
    },
    (error) => {
      if (error.status === 401) {
        this.snackbarService.openSnackBar("Please log in first", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
      } else if (error.status === 400) {
        this.snackbarService.openSnackBar("Insufficient funds to withdraw", 2);
      } else {
        this.snackbarService.openSnackBar("An error occurred, try again", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
      }
    })
  }
}
