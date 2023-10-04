import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthModel } from '../../models/auth.model';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.css']
})
/**
 * Component that serves as a container for both the login and register pages
 *
 * @export
 * @class AuthContainerComponent
 */
export class AuthContainerComponent {
  @Output() onUserAuthAction: EventEmitter<AuthModel> = new EventEmitter;
  @Input() isLogin!: boolean;
  title!: string;
  buttonText!: string;
  footerText!: string;
  footerButtonText!: string;
  footerButtonRoute!: string;

  /**
   * Initializes component properties based on whether it is used for login or registration
   *
   * @memberof AuthContainerComponent
   */
  ngOnInit() {
    this.title = this.isLogin ? "Sign in to Homebanking" : "Sign up to Homebanking";
    this.buttonText = this.isLogin ? "Sign In" : "Sign Up";
    this.footerText = this.isLogin ? "Don't have an account?" : "Have an account?";
    this.footerButtonText = this.isLogin ? "Sign up" : "Sign in";
    this.footerButtonRoute = this.isLogin ? "/subscribe" : "/login";
  }

  /**
   * Handles user authentication action (login or registration)
   *
   * @param {AuthModel} userData - User authentication data
   * @memberof AuthContainerComponent
   */
  userAuthAction(userData: AuthModel) {
    this.onUserAuthAction.emit(userData);
  }
}
