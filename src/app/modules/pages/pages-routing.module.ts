import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from '../login/login.component';
import {MaiCatalogComponent} from "../catalog/catalog.component";
import {AdminGuard} from "../../guards/admin.guard";
import {AuthGuard} from "../../guards/auth.guard";
import {CatalogManageComponent} from "../catalog-manage/catalog-manage.component.";

const routes: Routes = [
    {path: '', redirectTo: 'app/login', pathMatch: 'full'},
    {path: 'app/login', component: LoginComponent},
    {path: 'app/catalog', component: MaiCatalogComponent, canActivate: [AuthGuard]},
    {path: 'app/catalog-manage', component: CatalogManageComponent, canActivate: [AdminGuard]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule {
}
