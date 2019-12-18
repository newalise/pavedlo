import {Component, Input} from '@angular/core';
import {MaiCatalogItemModel} from '../models/catalog.model';

@Component({
  selector: 'mai-catalog-item',
  templateUrl: './catalog-item.component.html'
})

export class MaiCatalogItemComponent {
  @Input()
  public catalogData: MaiCatalogItemModel;

  constructor() {
  }
}