import {inject, Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {UserCredentialsForLoginModel} from "../../../core/models/user-credentials-for-login.model";
import {Router} from "@angular/router";
import {UserResponse} from "../../../core/models/user-response.model";
import {UserCredentialsForRegisterModel} from "../../../core/models/user-credentials-for-register.model";
import {Observable} from "rxjs";
import {UserModel} from "../../../core/models/user.model";
import {logoutAction, successLoginAction, successRegisterAction} from "../../../store/actions/auth.actions";
import {AuthState} from "../../../store/models/state";
import {Store} from "@ngrx/store";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cookieService: CookieService = inject(CookieService);
  http: HttpClient = inject(HttpClient);
  store:Store = inject(Store<{auth:AuthState}>)
  isSuccessfulLogin: boolean = false;

  private router: Router = inject(Router);

  checkIsUserAuthenticated(): boolean {
    return this.cookieService.get('token') !== '';
  }

  login(loginForm: UserCredentialsForLoginModel) {
    return this.http.post<UserResponse>('http://localhost:3000/auth/login', loginForm)
      .subscribe({

        next: (user: UserResponse) => {
          this.cookieService.set('token', user.token);
          this.store.dispatch(successLoginAction({isLogin:true,user:user.user}))
          this.router.navigate(['/welcome']).then()
          return this.isSuccessfulLogin = true;
        },

        error: (err) => err

      })
  }

  logout() {
    this.cookieService.delete('token')
    this.store.dispatch(logoutAction());
  }

  getUserProfile():Observable<UserModel> {
    return this.http.get<UserModel>('http://localhost:3000/auth/profile');
  }

  register(userToRegisterCredentials:UserCredentialsForRegisterModel) {
    this.http.post<UserResponse>('http://localhost:3000/auth/register',userToRegisterCredentials).subscribe({
      next:(user:UserResponse)=> {
        this.cookieService.set('token',user.token);
        this.store.dispatch(successRegisterAction({isLogin:true,user:user.user}))
      },
      error: err => console.log(err),
    });
  }
}


