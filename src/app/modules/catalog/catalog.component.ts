import {Component, OnInit} from '@angular/core';
import {MaiCatalogItemModel} from './models/catalog.model';
import {Subscription} from 'rxjs';
import {MaiCatalogService} from './service/catalog.service';

@Component({
  selector: 'mai-catalog',
  templateUrl: './catalog.component.html'
})

export class MaiCatalogComponent implements OnInit {
  public subscriptions = new Subscription();
  public catalogData: Array<MaiCatalogItemModel>;

  constructor(private service: MaiCatalogService) {
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.service.getCatalogData().subscribe(data => {
      this.catalogData = data;
    }));
  }

  public onPriceChange(value, item: MaiCatalogItemModel) {
    item.newPrice = item.price * value;
  }
}
