import {inject, Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {UserCredentialsForLoginModel} from "../../../core/models/user-credentials-for-login.model";
import {Router} from "@angular/router";
import {UserResponse} from "../../../core/models/user-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cookieService: CookieService = inject(CookieService);
  http: HttpClient = inject(HttpClient);

  isSuccessfulLogin:boolean = false;

  private router: Router = inject(Router);

  checkIsUserAuthenticated(): boolean {
    return this.cookieService.get('token') !== '';
  }

  loginUser(loginForm: UserCredentialsForLoginModel) {
    return this.http.post<UserResponse>('http://localhost:3000/auth/login', loginForm)
      .subscribe({
        next: (user: UserResponse) => {
          this.cookieService.set('token', user.token);
          this.router.navigate(['/welcome']).then()
          return this.isSuccessfulLogin = true;
        },
        error: (err) => {
          return err.error.message
        }
      })
  }

  logout() {
    this.cookieService.delete('token')
  }
}

