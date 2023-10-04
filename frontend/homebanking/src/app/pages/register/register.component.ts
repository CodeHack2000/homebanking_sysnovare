import { Component } from '@angular/core';
import { AuthModel } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { CustomSnackbarService } from 'src/app/shared/services/custom-snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
/**
 * Component for displaying the registration page.
 *
 * @export
 * @class RegisterComponent
 */
export class RegisterComponent {
  constructor(private authService: AuthService, private customSnackbarService: CustomSnackbarService, private router: Router) { }

  /**
   * Handles user registration when the user submits registration data
   *
   * @param {AuthModel} userData - User registration data
   * @memberof RegisterComponent
   */
  registerUser(userData: AuthModel) {
    this.authService.register(userData).subscribe(
      () => {
        this.customSnackbarService.openSnackBar("Successful registration", 1);
        this.router.navigate(['/login']);
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
