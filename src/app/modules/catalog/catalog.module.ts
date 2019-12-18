import {NgModule} from '@angular/core';
import {MaiCatalogComponent} from './catalog.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {MaiCatalogItemComponent} from './catalog-item/catalog-item.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule
  ],
  exports: [
    MaiCatalogComponent,
    MaiCatalogItemComponent
  ],
  declarations: [
    MaiCatalogComponent,
    MaiCatalogItemComponent
  ]
})

export class MaiCatalogModule {
  constructor() {
  }
}