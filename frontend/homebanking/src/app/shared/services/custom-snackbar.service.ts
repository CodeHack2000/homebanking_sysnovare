import { Injectable } from '@angular/core';
import { CustomSnackbarComponent } from 'src/app/shared/components/custom-snackbar/custom-snackbar.component';
import { SnackbarModel } from 'src/app/shared/models/snackbar.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  /**
   * Opens a custom snackbar with the specified message and level
   *
   * @param {string} message - The message to display in the snackbar
   * @param {number} level - The level of the snackbar (1 for success, 2 for warning, 3 for error)
   */
  openSnackBar(message: string, level: number) {
    const snackbarData: SnackbarModel = {
      level: level,
      message: message
    }

    this.snackBar.openFromComponent(CustomSnackbarComponent, {
      data: snackbarData,
      duration: 3000
    })
  }
}
