import {Component} from '@angular/core';
import {MaiCatalogItemModel} from './models/catalog.model';

@Component({
  selector: 'mai-catalog',
  templateUrl: './catalog.component.html'
})

export class MaiCatalogComponent {
  public catalogData: Array<MaiCatalogItemModel> = [
    {
      title: 'French fries',
      subtitle: 'Crispy and tasty',
      image: 'https://www.seriouseats.com/2018/04/20180309-french-fries-vicky-wasik-15-1500x1125.jpg',
      description: 'French fries are prepared by first cutting the potato (peeled or unpeeled) ' +
      'into even strips, which are then wiped off or soaked in cold water to remove the surface starch, and thoroughly dried.',
      price: '3'
    }
  ];

  constructor() {
  }

  public onPriceChange(value, item: MaiCatalogItemModel) {
    item.newPrice = item.price * value;
  }
}