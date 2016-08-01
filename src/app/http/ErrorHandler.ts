import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class ErrorHandler {

  public logToConsole<T>(error:any):Observable<T> {
    const errMsg:string = this.getErrorMessage(error);
    console.error(`ICFLIX ERROR MESSAGE: ${errMsg}`);
    return Observable.throw(errMsg);
  }

  private getErrorMessage(error:any):string {
    return (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  }

}
