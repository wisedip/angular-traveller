import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
const jwt = new JwtHelperService();
import {Router} from '@angular/router';

class DecodedToken {
  exp: number = 0;
  username: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken;
  authToken: any;
  user: any;

  constructor(private http: HttpClient,
              private router: Router) {
    this.decodedToken = JSON.parse(localStorage.getItem('traveller_meta')) || new DecodedToken();
   }

  private saveToken(token: string): string {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('traveller', token);
    localStorage.setItem('traveller_meta', JSON.stringify(this.decodedToken));
    this.authToken = jwt.decodeToken(token);
    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  public register(userData: any): Observable<any> {
    return this.http.post('http://localhost:3000/users/register', userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post('http://localhost:3000/users/login', userData).map(
      (token: any) => this.saveToken(token));
  }


  public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public logOut() {
    localStorage.removeItem('traveller');
    localStorage.removeItem('traveller_meta');
    this.decodedToken = new DecodedToken();
    this.router.navigate(['/login']);
  }

  public getUsername(): string {
    return this.decodedToken.username;
  }

}
