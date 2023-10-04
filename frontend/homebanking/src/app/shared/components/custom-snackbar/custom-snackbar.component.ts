import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar'
import { SnackbarModel } from '../../models/snackbar.model';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.css']
})
/**
 * Component representing a custom snackbar for displaying messages
 *
 * @export
 * @class CustomSnackbarComponent
 */
export class CustomSnackbarComponent {
  icon!: string;
  color!: string;
  message!: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarModel) { }

  /**
   * Initializes the custom snackbar component with the appropriate icon, color, and message
   *
   * @memberof CustomSnackbarComponent
   */
  ngOnInit() {
    if (this.data.level === 1) {
      this.icon = "done";
      this.color = "primary";
    } else if (this.data.level === 2) {
      this.icon = "warning";
      this.color = "accent";
    } else {
      this.icon = "report";
      this.color = "warn";
    }

    this.message = this.data.message;
  }
}
