import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserCredentialsForLoginModel} from "../../../../core/models/user-credentials-for-login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  form: FormGroup = inject(FormBuilder).group({
    username: ['', Validators.required,],
    password: ['', [Validators.required, Validators.min(8)]]
  });
  isSuccessfulLogin: boolean = false;

  async submitForm() {
    if (this.form.valid) {
      this.authService.loginUser(this.form.getRawValue() as UserCredentialsForLoginModel)
      if (this.authService.checkIsUserAuthenticated()) {
        this.isSuccessfulLogin = true;
      }
    }
  }
}
