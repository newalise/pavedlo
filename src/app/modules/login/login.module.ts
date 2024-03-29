import {NgModule} from "@angular/core";
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {MaiCatalogService} from "../catalog/service/catalog.service";
import {LoginComponent} from "./login.component";
import {LoginService} from "./service/login.service";
import {CookieService} from "ngx-cookie-service";

@NgModule({
    imports: [
        MatButtonModule,
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    exports: [
        LoginComponent,
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
        MaiCatalogService,
        LoginService,
        CookieService
    ]
})

export class LoginModule {
    constructor() {
    }
}
