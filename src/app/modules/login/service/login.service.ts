import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MaiHttpService} from "../../../services/http.service";
import {AccountModel} from "../model/login.model";

@Injectable()
export class LoginService {
  constructor(private http: MaiHttpService) {
  }

  public login(login: string, password: string): Observable< AccountModel | {} > {
    return Observable.create((observer: Observer< AccountModel | {} >) => {
      return this.http.get< AccountModel | {}>("employeesAccounts").subscribe((employeesAccounts: Array<AccountModel>) => {
          observer.next( employeesAccounts.find(employee =>
            employee.login === login && employee.password === password
          ));
          observer.complete();
        },
        error => {
          observer.error(error);
        });
    });
  }
}
