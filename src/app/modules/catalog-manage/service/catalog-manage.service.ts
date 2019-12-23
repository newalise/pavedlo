import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Observer} from "rxjs";
import {MaiHttpService} from '../../../services/http.service';
import {MaiCatalogItemModel} from "../../catalog/models/catalog.model";
import {AccountModel} from "../../login/model/login.model";

@Injectable()
export class CatalogManageService {

    constructor(private http: MaiHttpService) {}

    public getEmployeeAccountsByAdminId(adminId: string): Observable<Array<AccountModel>> {
        return Observable.create((observer: Observer<AccountModel[]>) => {
            return this.http.get<AccountModel[]>("employeesAccounts").subscribe(data => {
                    observer.next(data.filter(elem => elem.id !== adminId));
                    observer.complete();
                },
                error => {
                    observer.error(error);
                });
        });
    }

    public AddNewEmployee(newAccount: AccountModel): Observable<AccountModel> {
        return Observable.create((observer: Observer<AccountModel[]>) => {
            return this.http.post<AccountModel[]>("employeesAccounts", newAccount).subscribe(data => {
                    observer.next(data);
                    observer.complete();
                },
                error => {
                    observer.error(error);
                });
        });
    }

    public DeleteEmployeeById(employeeId: string): Observable<{}> {
        return Observable.create((observer: Observer<{}>) => {
            return this.http.delete<{}>("employeesAccounts/" + employeeId).subscribe(data => {
                    observer.next(data);
                    observer.complete();
                },
                error => {
                    observer.error(error);
                });
        });
    }

    public updatePasswordById(employeeId: string, newPassword: string): Observable<AccountModel> {
        return Observable.create((observer: Observer<AccountModel>) => {
            return this.http.patch<AccountModel>("employeesAccounts/" + employeeId, {password: newPassword}).subscribe(data => {
                    observer.next(data);
                    observer.complete();
                },
                error => {
                    observer.error(error);
                });
        });
    }

    public updateQuantityProductById(productId: string, newQuantity: number): Observable<MaiCatalogItemModel> {
      return Observable.create((observer: Observer<MaiCatalogItemModel>) => {
        return this.http.patch<MaiCatalogItemModel>("catalog/" + productId, {inStock: newQuantity}).subscribe(data => {
            observer.next(data);
            observer.complete();
          },
          error => {
            observer.error(error);
          });
      });
    }
}
