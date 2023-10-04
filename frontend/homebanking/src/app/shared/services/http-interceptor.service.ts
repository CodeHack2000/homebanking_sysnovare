import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  /**
   * Intercepts HTTP requests and adds the authorization token to the headers
   * if a token is available in the local storage
   *
   * @param {HttpRequest<any>} req - The original HTTP request
   * @param {HttpHandler} next - The next HTTP handler
   * @returns {Observable<HttpEvent<any>>} An observable of the HTTP response
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
