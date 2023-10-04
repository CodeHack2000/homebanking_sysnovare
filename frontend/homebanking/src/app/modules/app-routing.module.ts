import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ManageFundsComponent } from '../pages/manage-funds/manage-funds.component';
import { FundsHistoryComponent } from '../pages/funds-history/funds-history.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'subscribe', component: RegisterComponent},
  {path: '', component: DashboardComponent},
  {path: 'manage-funds', component: ManageFundsComponent},
  {path: 'funds-history', component: FundsHistoryComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

/**
 * Routing module for configuring application routes
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
