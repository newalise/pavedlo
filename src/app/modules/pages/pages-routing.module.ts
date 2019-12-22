import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from '../login/login.component';
import {MaiCatalogComponent} from "../catalog/catalog.component";
import {AdminGuard} from "../../guards/admin.guard";
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: 'app/login', component: LoginComponent},
  {path: 'app/catalog', component: MaiCatalogComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule {}
