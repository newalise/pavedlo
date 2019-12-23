import {Component, EventEmitter, Input, OnInit, Output, HostBinding} from '@angular/core';
import {MaiCatalogItemModel} from "../models/catalog.model";
import { MaiCatalogService } from '../service/catalog.service';

@Component({
    selector: 'catalog-overlay',
    templateUrl: './catalog-overlay.component.html'
})

export class CatalogOverlayComponent implements OnInit {

    @HostBinding("class") classes = 'catalog-overlay';

    public totalPrice: number = 0;
    @Input()
    public confirmCatalogData: Array<MaiCatalogItemModel>;

    @Output()
    public closePopUpEmit: EventEmitter<void> = new EventEmitter<void>();

    constructor(private catalogService: MaiCatalogService) {
    }

    public ngOnInit(): void {
        this.confirmCatalogData.forEach((elem) => {
            this.totalPrice += elem.newPrice;
        });
    }

    public _closePopup() {
        this.closePopUpEmit.emit();
    }

    public _confirmOrder() {
        this.confirmCatalogData.forEach((data: MaiCatalogItemModel) => {
            this.catalogService.changeCatalogData({
                id: data.id,
                inStock: data.inStock - data.qnty
                // tslint:disable-next-line:no-shadowed-variable
            }).subscribe((data) => {
               window.location.reload();
            });
        });
    }
}
