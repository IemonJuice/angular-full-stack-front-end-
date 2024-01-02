import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserCredentialsForRegisterModel} from "../../../../core/models/user-credentials-for-register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  positiveCharacter?:boolean;
  isCharacterChosen: boolean = false;

  authService:AuthService = inject(AuthService);
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
    if(character =='sith') {
      this.positiveCharacter = false;
      this.isCharacterChosen = true;
    }
    if(character== 'jedi') {
      this.positiveCharacter = true;
      this.isCharacterChosen = true;
    }
  }

  submitForm() {
    if(this.form.valid){
     this.authService.register(this.form.getRawValue() as UserCredentialsForRegisterModel)
    }
    console.log(this.form.valid)
  }
}
