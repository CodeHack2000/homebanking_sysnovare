import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './shared/services/http-interceptor.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthContainerComponent } from './shared/components/auth-container/auth-container.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { AuthFormComponent } from './shared/components/auth-form/auth-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomSnackbarComponent } from './shared/components/custom-snackbar/custom-snackbar.component';
import { MaterialSidenavComponent } from './shared/components/material-sidenav/material-sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardItemsComponent } from './components/dashboard-items/dashboard-items.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { LastMovementsComponent } from './components/last-movements/last-movements.component';
import { ManageFundsComponent } from './pages/manage-funds/manage-funds.component';
import { ManageFundsItemComponent } from './components/manage-funds-item/manage-funds-item.component';
import { FundsHistoryComponent } from './pages/funds-history/funds-history.component';
import { FundsHistoryTableComponent } from './components/funds-history-table/funds-history-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthContainerComponent,
    LogoComponent,
    AuthFormComponent,
    RegisterComponent,
    DashboardComponent,
    CustomSnackbarComponent,
    MaterialSidenavComponent,
    DashboardItemsComponent,
    CreditCardComponent,
    LastMovementsComponent,
    ManageFundsComponent,
    ManageFundsItemComponent,
    FundsHistoryComponent,
    FundsHistoryTableComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
