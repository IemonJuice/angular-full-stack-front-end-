import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form:FormGroup  = inject(FormBuilder).group({
    email:['',[Validators.required,Validators.email]],
    username:['',[Validators.required]],
    password:['',Validators.required],
    character:['',Validators.required],
  })

  changeCharacter(character: string) {
    this.form.patchValue({
      character:character
    })
  }

  submitForm() {
    if(this.form.valid){
      console.log(this.form.getRawValue());
    }
  }
}
