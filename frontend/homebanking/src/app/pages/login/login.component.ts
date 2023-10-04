import { Component } from '@angular/core';
import { AuthModel } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { CustomSnackbarService } from 'src/app/shared/services/custom-snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * Component for displaying the login page
 *
 * @export
 * @class LoginComponent
 */
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router, private customSnackbarService: CustomSnackbarService) {}

  /**
   * Handles the login process when the user submits login credentials
   *
   * @param {AuthModel} userData - User login credentials
   * @memberof LoginComponent
   */
  loginUser(userData: AuthModel) {
    this.authService.login(userData).subscribe(
      (response) => {
        localStorage.setItem('token', response.token!);
        this.customSnackbarService.openSnackBar("Successfully logged in", 1);
        this.router.navigate([""]);
      },
      (error) => {
        if (error.status === 400) {
          this.customSnackbarService.openSnackBar("The email or password is incorrect", 3);
        } else {
          this.customSnackbarService.openSnackBar("An error occurred, try again", 3);
        }
      }
    );
  }
}
