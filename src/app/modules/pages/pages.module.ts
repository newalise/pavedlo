import {NgModule} from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";
import {AppPagesComponent} from './pages.component';
import {BrowserModule} from "@angular/platform-browser";
import {LoginModule} from "../login/login.module";
import {MaiCatalogModule} from "../catalog/catalog.module";
import {PagesRoutingModule} from './pages-routing.module';
import {AdminGuard} from "../../guards/admin.guard";
import { AuthGuard } from 'src/app/guards/auth.guard';
import {CatalogManageModule} from "../catalog-manage/catalog-manage.module";

@NgModule({
    declarations: [
        AppPagesComponent,
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        AuthGuard,
        AdminGuard
    ],
    imports: [
        BrowserModule,
        PagesRoutingModule,
        LoginModule,
        MaiCatalogModule,
        CatalogManageModule
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
