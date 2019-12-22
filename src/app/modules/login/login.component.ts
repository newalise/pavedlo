import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators, NgForm} from "@angular/forms";
import {LoginService} from "./service/login.service";
import {ErrorStateMatcher} from "@angular/material";
import {Router} from "@angular/router";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

    public title = 'Please login';
    public matcher = new MyErrorStateMatcher();

    constructor(private loginService: LoginService, private router: Router) {
    }

    public loginForm: FormGroup = new FormGroup({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    public ngOnInit(): void {
    }

    public _login() {
        this.loginService.login(this.loginForm.getRawValue().login, this.loginForm.getRawValue().password).subscribe((data) => {
            if (!!data) {
                console.log(data.type)
                data.type === 'admin' ? this.router.navigate(['app/manage-account'])
                    : this.router.navigate(['app/catalog']);
            }
        });

    }

    public ngOnDestroy(): void {
    }
}
