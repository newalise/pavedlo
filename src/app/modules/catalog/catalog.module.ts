import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MaiCatalogItemComponent} from './catalog-item/catalog-item.component';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {MaiCatalogService} from './service/catalog.service';
import {MaiCatalogComponent} from "./catalog.component";

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
  ],
  providers: [
    MaiCatalogService
  ]
})

export class MaiCatalogModule {
  constructor() {
  }
}
