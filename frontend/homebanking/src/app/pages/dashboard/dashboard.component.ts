import { Component } from '@angular/core';
import { FundsModel } from 'src/app/shared/models/funds.model';
import { FundsService } from 'src/app/shared/services/funds.service';
import { CustomSnackbarService } from 'src/app/shared/services/custom-snackbar.service';
import { Router } from '@angular/router';
import { FundsMovementsModel } from 'src/app/shared/models/funds-movements.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
/**
 * Component for displaying the dashboard page
 *
 * @export
 * @class DashboardComponent
 */
export class DashboardComponent {
  userAccountData!: FundsModel;
  userLastMovements!: FundsMovementsModel[];
  userMovements!: FundsMovementsModel[];

  constructor(private fundsService: FundsService, private customSnackbarService: CustomSnackbarService, private router: Router) { }

   /**
   * Initializes the component by fetching user account data and movements from the service
   *
   * @memberof DashboardComponent
   */
  ngOnInit(): void {
    this.fundsService.getUserFunds().subscribe((userData) => {
      this.userAccountData = userData
    },
      (error) => {
        if (error.status === 401) {
          this.customSnackbarService.openSnackBar("Please log in first", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
        } else {
          this.customSnackbarService.openSnackBar("An error occurred, try again", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      });
    

    this.fundsService.getUserFundsMovements().subscribe((userMovementsFunds) => {
      const reversedList = userMovementsFunds.reverse();
      this.userLastMovements = reversedList.slice(0, 8);
      this.userMovements = userMovementsFunds;
    },
      (error) => {
        if (error.status === 401) {
          this.customSnackbarService.openSnackBar("Please log in first", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
        } else {
          this.customSnackbarService.openSnackBar("An error occurred, try again", 3);
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      })
  }
}
