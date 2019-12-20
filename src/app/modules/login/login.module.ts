import {NgModule} from "@angular/core";
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {MaiCatalogService} from "../catalog/service/catalog.service";
import {LoginComponent} from "./login.component";

@NgModule({
  imports: [
    MatButtonModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    MaiCatalogService
  ]
})

export class LoginModule {
  constructor() {
  }
}
