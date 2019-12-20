import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  public title = 'Please login';
  constructor() {}

  public loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.compose([Validators.required,
      Validators.email])),
    password: new FormControl('')
  });

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }
}
