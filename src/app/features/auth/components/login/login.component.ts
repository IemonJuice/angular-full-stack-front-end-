import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router: Router = inject(Router);
  form: FormGroup = inject(FormBuilder).group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(8)]]
  });
  formSubmitted: boolean = false

  submitForm() {
    if (this.form.valid) {
      this.formSubmitted = true;
      setTimeout(async () => {
        this.formSubmitted = false;
        await this.router.navigate(['/welcome'])
      }, 1000)
    }
  }
}
