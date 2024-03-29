import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MaiHttpService {
  private baseUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) {
  }

  public post<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[]; },
    params?: HttpParams | { [param: string]: string | string[]; }
  }): Observable<T> {
    return this.http.post<T>(this.buildUrl(url), body, options);
  }

  public get<T>(url: string, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[]; },
    params?: HttpParams | { [param: string]: string | string[]; }
  }): Observable<T> {
    return this.http.get<T>(this.buildUrl(url), options);
  }

  public patch<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[]; },
    params?: HttpParams | { [param: string]: string | string[]; }
  }): Observable<T> {
    return this.http.patch<T>(this.buildUrl(url), body, options);
  }

  public delete <T>(url: string, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[]; },
    params?: HttpParams | { [param: string]: string | string[]; }
  }): Observable<T> {
    return this.http.delete<T>(this.buildUrl(url), options);
  }

  private buildUrl(url: string): string {
    return url && url.startsWith('http') ? url : this.baseUrl + url;
  }
}
