import {Component, inject, OnInit} from '@angular/core';
import {AuthState} from "../../../../store/models/state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  username: string = '';
  character: string = '';
  email: string = '';
  store: Store<{ auth: AuthState }> = inject(Store<{ auth: AuthState }>)

  ngOnInit() {
    this.store.select('auth').subscribe(user => {
      if ("email" in user.user && "username" in user.user && "character" in user.user) {
        this.email = user.user.email
        this.username = user.user.username
        this.character = user.user.character;
      }
    })
  }
}
