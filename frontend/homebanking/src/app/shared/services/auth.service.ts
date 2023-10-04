import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthModel } from '../models/auth.model';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../models/auth-response.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiLoginUrl: string = environment.apiBaseUrl + 'login';
  private apiRegisterUrl: string = environment.apiBaseUrl + 'subscribe';

  constructor(private http: HttpClient) { }

  /**
   * Logs in a user with the provided credentials
   *
   * @param {AuthModel} user - User credentials including email and password.
   * @returns {Observable<AuthResponse>} - An observable that emits an AuthResponse
   */
  login(user: AuthModel): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiLoginUrl, user, httpOptions);
  }

  /**
  * Registers a new user with the provided credentials
  *
  * @param {AuthModel} user - User credentials including email and password
  * @returns {Observable<AuthResponse>} - An observable that emits an AuthResponse
  */
  register(user: AuthModel): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiRegisterUrl, user, httpOptions);
  }
}
