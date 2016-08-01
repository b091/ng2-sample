import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {DataExtractor} from './DataExtractor';
import {ErrorHandler} from './ErrorHandler';

@Injectable()
export class HttpJSONService {

  private requestOptions:RequestOptions = new RequestOptions({
    headers: new Headers({'Content-Type': 'application/json'})
  });

  constructor(private http:Http,
              private dataExtractor:DataExtractor,
              private errorHandler:ErrorHandler) {
  }

  public get<T>(url:string):Observable<T> {
    return this.http.get(url)
      .map((r:Response) => this.dataExtractor.getJSON<T>(r))
      .catch((err) => this.errorHandler.logToConsole<T>(err));
  }

  public post<T>(url:string, data:T):Observable<T> {
    const body:string = this.dataExtractor.getString(data);

    return this.http.post(url, body, this.requestOptions)
      .map((r:Response) => this.dataExtractor.getJSON<T>(r))
      .catch((err) => this.errorHandler.logToConsole<T>(err));
  }

  public delete<T>(url:string):Observable<T> {
    return this.http.delete(url)
      .catch((err) => this.errorHandler.logToConsole<T>(err));
  }

}
