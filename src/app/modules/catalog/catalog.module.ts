import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import {MaiCatalogItemComponent} from './catalog-item/catalog-item.component';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {MaiCatalogService} from './service/catalog.service';
import {MaiCatalogComponent} from "./catalog.component";
import { CatalogOverlayComponent } from './catalog-overlay/catalog-overlay.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    MaiCatalogComponent,
    MaiCatalogItemComponent
  ],
  declarations: [
    MaiCatalogComponent,
    MaiCatalogItemComponent,
    CatalogOverlayComponent
  ],
  providers: [
    MaiCatalogService
  ]
})

export class MaiCatalogModule {
  constructor() {
  }
}
