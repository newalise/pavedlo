import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MaiHttpService} from "../../../services/http.service";
import {AccountModel} from "../model/login.model";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class LoginService {
    public accountModel: AccountModel;

    constructor(private http: MaiHttpService, private cookieService: CookieService) {
    }

    public login(login: string, password: string): Observable<AccountModel> {
        return Observable.create((observer: Observer<AccountModel>) => {
                return this.http.get<Array<AccountModel>>("employeesAccounts").subscribe((employeesAccounts) => {
                        this.accountModel = (employeesAccounts.find(employee =>
                            employee.login === login && employee.password === password));
                        if (!!this.accountModel) {
                            observer.next(this.accountModel);
                            observer.complete();
                            this.cookieService.set('type', this.accountModel.type);
                        }
                    },
                    error => {
                        observer.error(error);
                    });
            }
        );
    }
}
