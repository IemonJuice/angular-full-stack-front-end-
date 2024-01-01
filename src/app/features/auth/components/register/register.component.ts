import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  positiveCharacter?:boolean;
  form:FormGroup  = inject(FormBuilder).group({
    email:['',[Validators.required,Validators.email]],
    username:['',[Validators.required]],
    password:['',Validators.required],
    character:['',Validators.required],
  })
  isCharacterChosen: boolean = false;

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
      console.log(this.form.getRawValue());
    }
  }
}
