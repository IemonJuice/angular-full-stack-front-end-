import {Component, inject} from '@angular/core';
import {AuthService} from "../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  authService:AuthService = inject(AuthService);
  router:Router = inject(Router);
  redirectIfAuthenticated() {
    if(this.authService.checkIsUserAuthenticated()){
      this.router.navigateByUrl('/topics')
    }
    else{
      this.router.navigateByUrl('/register')
    }
  }
}
