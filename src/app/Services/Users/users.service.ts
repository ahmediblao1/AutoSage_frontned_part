import { Injectable } from '@angular/core';
import { environment } from 'src/app/Environments/myEnvironment';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/Models/Credentials.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  LogStatus: boolean = false;

  constructor(private jwtHelper: JwtHelperService) { }

  get token(): any {
    return localStorage.getItem('jwt');
  }

  PostLogin(credentials: Credentials): Observable<Credentials> {
    return new Observable((observer: any) => {
      $.ajax({
        url: environment.ServerUrl + "/api/User/Login",
        type: 'POST',
        data: JSON.stringify(credentials),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
          observer.next(data);
          observer.complete();
        },
        error: function (xhr: any, status: any, error: any) {
          observer.error(error);
        }
      });
    });
  }

  LogOut() {
    localStorage.removeItem('jwt'); // Remove the JWT token from storage
    this.LogStatus = false; // Update the LoggedIn flag
  }

  IsUserAuthenticated() {
    const token = localStorage.getItem('jwt');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.LogStatus = true;
      return this.LogStatus;
    }
    this.LogStatus = false;
    return this.LogStatus;
  }
}
