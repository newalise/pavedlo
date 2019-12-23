import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Observer} from "rxjs";
import {MaiHttpService} from '../../../services/http.service';
import {MaiCatalogItemModel, MaiCatalogChangeItemData} from '../models/catalog.model';

@Injectable()
export class MaiCatalogService {

  constructor(private http: MaiHttpService) {
  }

  public getCatalogData(): Observable<MaiCatalogItemModel[]> {
    return Observable.create((observer: Observer<MaiCatalogItemModel[]>) => {
      return this.http.get<MaiCatalogItemModel[]>("catalog").subscribe(data => {
          observer.next(data);
          observer.complete();
        },
        error => {
          observer.error(error);
        });
    });
  }

  public changeCatalogData(changeItem: MaiCatalogChangeItemData): Observable<MaiCatalogItemModel> {
    return Observable.create((observer: Observer<MaiCatalogItemModel>) => {
      return this.http.patch<MaiCatalogItemModel>( "catalog/" + changeItem.id, changeItem).subscribe(data => {
            observer.next(data);
            observer.complete();
          },
          error => {
            observer.error(error);
          });
    });
  }
}
