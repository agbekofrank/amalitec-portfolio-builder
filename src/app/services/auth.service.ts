import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JWTPayload } from '../interfaces/jwt-payload';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiRoot = environment.baseUrl;
  // http://127.0.0.1:8000/accounts/api/login

  constructor(private http: HttpClient) {}
  private setSession(authResult: any) {
    const token = authResult.token;
    const payload = jwtDecode<JWTPayload>(token);
    const expiresAt = moment.unix(payload.exp);
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('currentUser', JSON.stringify(authResult.username));
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem('token')!;
  }

  login(username: string, password: string) {
    return this.http
      .post(`${this.apiRoot}/accounts/api/login`, { username, password })
      .pipe(
        tap((resp: any) => this.setSession(resp)),
        shareReplay()
      );
  }
  signup(
    username: string,
    email: string,
    password: string,
    password2: string,
    first_name: string,
    last_name: string
  ) {
    return this.http
      .post(this.apiRoot.concat('/accounts/api/register2'), {
        username,
        email,
        password,
        password2,
        first_name,
        last_name,
      })
      .pipe(
        tap((response) => this.setSession(response)),
        shareReplay()
      );
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('expires_at');
    this.refresh();
  }
  refreshToken(){
    if (
      moment().isBetween(
        this.getExpiration().subtract(1, 'days'),
        this.getExpiration()
      )
    ) {
      return this.http
        .post(this.apiRoot.concat('refresh-token/'), { token: this.token })
        .pipe(
          tap((response) => this.setSession(response)),
          shareReplay()
        )
        .subscribe();
    }else{
      return
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration!);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  getUser() {
    const c = localStorage.getItem('currentUser')
    console.log(c)
    return localStorage.getItem('currentUser');
  }
  refresh(): void {
    window.location.reload();
  }
}
