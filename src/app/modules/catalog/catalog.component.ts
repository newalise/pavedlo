import {Component, OnDestroy, OnInit} from '@angular/core';
import {MaiCatalogItemModel} from './models/catalog.model';
import {Subscription} from 'rxjs';
import {MaiCatalogService} from './service/catalog.service';

@Component({
    selector: 'mai-catalog',
    templateUrl: './catalog.component.html'
})

export class MaiCatalogComponent implements OnInit, OnDestroy {
    public subscriptions = new Subscription();
    public catalogData: Array<MaiCatalogItemModel>;
    public fullPrice: number = 0;
    public visiblePopUp: boolean = false;
    public newData: Array<MaiCatalogItemModel>;

    constructor(private service: MaiCatalogService) {
    }

    public ngOnInit(): void {
        this.subscriptions.add(this.service.getCatalogData().subscribe(data => {
            this.catalogData = data.filter(item => !!item.inStock);
        }));
    }

    public onPriceChange(quantity, item: MaiCatalogItemModel) {
        item.qnty = quantity;
        item.newPrice = item.price * item.qnty;
        if (!!item.newPrice) {
            this.fullPrice += item.newPrice;
        }
    }

    public _confirmOrder() {
        this.visiblePopUp = true;
        this.newData = this.catalogData.filter(item => item.newPrice > 0);

    }

    public ngOnDestroy(): void {
        this.subscriptions && this.subscriptions.unsubscribe();
    }
}
