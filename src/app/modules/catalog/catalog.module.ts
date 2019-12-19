import {NgModule} from '@angular/core';
import {MaiCatalogComponent} from './catalog.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MaiCatalogItemComponent} from './catalog-item/catalog-item.component';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
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