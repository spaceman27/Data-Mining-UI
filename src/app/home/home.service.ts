import {Injectable} from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
export class ErrorModel {
  error: string;
}
@Injectable()
export class HomeService {
  constructor(private http: Http) {
  }
  getUrlRequestOption(): RequestOptions {
  const headers = new Headers({ 'Content-Type': 'application/json'})
  const option = new RequestOptions({headers: headers});
  return option;
}
  getByCountry(): Observable<any> {   
      const opt = this.getUrlRequestOption(); 
      opt.url = 'http://085cc1f3.ngrok.io/totalbycountry';
    return this.http.get(opt.url, opt).map((res: Response) => {
               return res.json();
             });
  }

  getByHashTag(): Observable<any> { 
      const opt = this.getUrlRequestOption(); 
      opt.url = 'http://085cc1f3.ngrok.io/tophashtag/10';   
    return this.http.get(opt.url).map((res: Response) => {
               return res.json();
             });;
  }
}
