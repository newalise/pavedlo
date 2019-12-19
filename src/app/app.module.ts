import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaiCatalogModule} from './modules/catalog/catalog.module';
import {MaiHttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaiCatalogModule
  ],
  providers: [
    MaiHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
