import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../features/auth/services/auth.service";
import {UserResponse} from "../../models/user-response.model";
import {UserModel} from "../../models/user.model";
import {Store} from "@ngrx/store";
import {AuthState} from "../../../store/models/state";
import {successLoginAction} from "../../../store/actions/auth.actions";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  isPositiveCharacter?: boolean;
  isUserAuthenticated?: boolean;
  store: Store<{ auth: AuthState }> = inject(Store<{ auth: AuthState }>)

  ngOnInit(): void {

    this.authService.getUserProfile().subscribe((userResponse: UserModel) => {
      this.store.dispatch(successLoginAction({isLogin: true, user: userResponse}))

      this.store.select('auth').subscribe((data:AuthState) => {
        this.isUserAuthenticated = data.isAuthenticated;
        if ("character" in data.user) {
          this.isPositiveCharacter = 'jedi' === data.user.character;
        }
      });
    })
  }

  logout() {
    this.authService.logout()
  }

  getUserProfile() {
    this.authService.getUserProfile().subscribe((userResponse: UserModel) => {
      console.log(userResponse);
    })
  }
}
