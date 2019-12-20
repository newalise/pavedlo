import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaiCatalogModule} from './modules/catalog/catalog.module';
import {MaiHttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {AppPagesModule} from "./modules/pages/pages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaiCatalogModule,
    AppPagesModule
  ],
  providers: [
    MaiHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
