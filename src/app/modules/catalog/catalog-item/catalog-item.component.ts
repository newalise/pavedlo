import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MaiCatalogItemModel} from '../models/catalog.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'mai-catalog-item',
  templateUrl: './catalog-item.component.html'
})

export class MaiCatalogItemComponent implements OnInit {
  @Input()
  public catalogData: MaiCatalogItemModel;

  @Output()
  public priceChange: EventEmitter<number> = new EventEmitter<number>();

  public options: FormGroup = new FormGroup({
    quantity: new FormControl(''),
  });

  public ngOnInit(): void {
    this.options.controls['quantity'].valueChanges.subscribe(
      (value) => {
        this.priceChange.emit(value);
      });
  }

  constructor() {
  }
}