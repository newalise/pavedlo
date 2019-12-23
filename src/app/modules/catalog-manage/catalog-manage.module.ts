import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CatalogManageComponent} from "./catalog-manage.component.";
import {CatalogManageService} from "./service/catalog-manage.service";
import {MaiCatalogService} from "../catalog/service/catalog.service";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        CatalogManageComponent
    ],
    declarations: [
        CatalogManageComponent
    ],
    providers: [
        CatalogManageService,
        MaiCatalogService
    ]
})

export class CatalogManageModule {
    constructor() {
    }
}
