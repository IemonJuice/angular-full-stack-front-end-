import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../features/auth/services/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  authService: AuthService = inject(AuthService);

  isUserAuthenticated?: boolean;

  ngOnInit(): void {
    this.isUserAuthenticated = this.authService.checkIsUserAuthenticated()
  }

  logout() {
    this.authService.logout()
  }

  getUserProfile() {
    this.authService.getUserProfile()
  }
}
