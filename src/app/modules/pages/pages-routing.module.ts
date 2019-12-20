import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from '../login/login.component';
import {MaiCatalogComponent} from "../catalog/catalog.component";

const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: 'app/login', component: LoginComponent},
  {path: 'app/catalog', component: MaiCatalogComponent}
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
