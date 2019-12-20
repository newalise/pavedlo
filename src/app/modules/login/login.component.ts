import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./service/login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  public title = 'Please login';
  constructor(private loginService: LoginService) {}

  public loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  public ngOnInit(): void {
  }
  
  public _login() {
    this.loginService.login(this.loginForm.getRawValue().login, this.loginForm.getRawValue().password).subscribe((data) => {
      console.log(data);
    });
    
  }
  public ngOnDestroy(): void {
  }
}
