import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CustomSnackbarService } from 'src/app/shared/services/custom-snackbar.service';

@Component({
  selector: 'app-material-sidenav',
  templateUrl: './material-sidenav.component.html',
  styleUrls: ['./material-sidenav.component.css']
})
/**
 * Component representing the side navigation of the website
 *
 * @export
 * @class MaterialSidenavComponent
 */
export class MaterialSidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private router: Router, private customSnackbarService: CustomSnackbarService) { }

  /**
   * Observable that tracks whether the screen is a handset-sized screen
   *
   * @type {Observable<boolean>}
   * @memberof MaterialSidenavComponent
   */
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  /**
   * Handles the logout action by clearing local storage, displaying a success message,
   * and navigating to the login page
   *
   * @memberof MaterialSidenavComponent
   */
  handleLogout() {
    localStorage.clear();
    this.customSnackbarService.openSnackBar("Successfully logged out", 1);
    this.router.navigate(["/login"]);
  };
}
