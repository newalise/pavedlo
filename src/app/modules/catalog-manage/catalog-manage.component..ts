import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CatalogManageService} from './service/catalog-manage.service';
import {MaiCatalogService} from '../catalog/service/catalog.service';
import {MaiCatalogItemModel} from "../catalog/models/catalog.model";
import {LoginService} from "../login/service/login.service";
import {AccountModel} from "../login/model/login.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'catalog-manage',
    templateUrl: './catalog-manage.component.html'
})

export class CatalogManageComponent implements OnInit, OnDestroy {

    public subscriptions = new Subscription();
    public catalogData: Array<MaiCatalogItemModel>;
    public accountData: Array<AccountModel>;
    public adminId: string;

    public accountForm: FormGroup = new FormGroup({
        // login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    public options: FormGroup = new FormGroup({
        quantity: new FormControl(''),
    });

    constructor(private catalogManageService: CatalogManageService,
                private catalogService: MaiCatalogService,
                private loginService: LoginService) {
    }

    public ngOnInit(): void {
        this.subscriptions.add(this.catalogService.getCatalogData().subscribe((data) => {
            this.catalogData = data;
        }));

        this.adminId = this.loginService.getCustomerId();
        this.subscriptions.add(this.catalogManageService.getEmployeeAccountsByAdminId(this.adminId).subscribe((data) => {
            this.accountData = data;
        }));

        this.options.controls['quantity'].valueChanges.subscribe(
            (value) => {

            });
    }

    public _deleteCustomerAccount(account: AccountModel) {
        this.subscriptions.add(this.catalogManageService.DeleteEmployeeById(account.id).subscribe((data) => {
            window.location.reload();
        }));
    }

    public _updatePassword(account: AccountModel) {
        this.subscriptions.add(this.catalogManageService.updatePasswordById(account.id, this.accountForm.getRawValue().password)
            .subscribe((data) => {
                window.location.reload();
            }));
    }

    public ngOnDestroy(): void {
        this.subscriptions && this.subscriptions.unsubscribe();
    }
}
