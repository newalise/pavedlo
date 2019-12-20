import {NgModule} from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";
import {AppPagesComponent} from './pages.component';
import {BrowserModule} from "@angular/platform-browser";
import {LoginModule} from "../login/login.module";
import {MaiCatalogModule} from "../catalog/catalog.module";
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  declarations: [
    AppPagesComponent,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    LoginModule,
    MaiCatalogModule
  ],
  exports: [
    AppPagesComponent
  ],
  bootstrap: [
    AppPagesComponent
  ]
})

export class AppPagesModule {
  constructor() {
  }
}
