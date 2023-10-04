import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthModel } from '../../models/auth.model';
import { CustomSnackbarService } from '../../services/custom-snackbar.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
/**
 * Component that serves as an input form for both registration and login pages
 *
 * @export
 * @class AuthFormComponent
 */
export class AuthFormComponent {
  @Output() onUserAuthAction: EventEmitter<AuthModel> = new EventEmitter;
  @Input() buttonText!: string;
  email!: string;
  password!: string;
  subscription!: Subscription;

  constructor(private snackbarService: CustomSnackbarService) { };

  /**
   * Handles form submission for user authentication (login or registration)
   *
   * @memberof AuthFormComponent
   */
  onSubmit() {
    if (!this.email && !this.password) {
      this.snackbarService.openSnackBar("Please enter email and password!", 2);
      return;
    }

    const userData: AuthModel = {
      email: this.email,
      password: this.password
    };

    this.onUserAuthAction.emit(userData);

    this.email = "";
    this.password = "";
  };
}
