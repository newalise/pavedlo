import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, Observer} from 'rxjs';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private cookieService: CookieService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean | UrlTree> |
        Promise<boolean | UrlTree> | boolean | UrlTree {
        return Observable.create((observer: Observer<boolean>) => {
            if (this.cookieService.get("type") === 'account' || this.cookieService.get("type") === 'admin') {
                console.log("true");
                observer.next(true);
            } else {
                observer.next(false);
                this.router.navigate(['app/login']);
            }
        });
    }
}
