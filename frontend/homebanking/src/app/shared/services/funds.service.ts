import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FundsActionModel } from '../models/funds-action.model';
import { FundsModel } from '../models/funds.model';
import { FundsMovementsModel } from '../models/funds-movements.model';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  private apiFundsUrl: string = environment.apiBaseUrl + 'funds';
  private apiFundsMovementsUrl: string = environment.apiBaseUrl + 'funds/movements';

  constructor(private http: HttpClient) { }

  /**
   * Retrieves the user's funds
   *
   * @returns {Observable<FundsModel>} An observable containing the user's funds
   */
  getUserFunds(): Observable<FundsModel> {
    return this.http.get<FundsModel>(this.apiFundsUrl, httpOptions);
  }

  /**
   * Retrieves the user's funds movements history
   *
   * @returns {Observable<FundsMovementsModel[]>} An observable containing the user's funds movements
   */
  getUserFundsMovements(): Observable<FundsMovementsModel[]> {
    return this.http.get<FundsMovementsModel[]>(this.apiFundsMovementsUrl, httpOptions);
  }

  /**
   * Adds funds to the user's account
   *
   * @param {FundsActionModel} amount - The amount of funds to add
   * @returns {Observable<FundsActionModel>} An observable containing the added funds amount
   */
  addUserFunds(amount: FundsActionModel): Observable<FundsActionModel> {
    return this.http.put<FundsActionModel>(this.apiFundsUrl, amount, httpOptions);
  }

  /**
   * Withdraws funds from the user's account
   *
   * @param {FundsActionModel} amount - The amount of funds to withdraw
   * @returns {Observable<FundsActionModel>} An observable containing the withdrawn funds amount
   */
  withdrawUserFunds(amount: FundsActionModel): Observable<FundsActionModel> {
    const options = {
      body: amount,
      httpOptions
    }
    return this.http.delete<FundsActionModel>(this.apiFundsUrl, options);
  }
}
