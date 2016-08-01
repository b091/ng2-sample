import {Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DataExtractor {

  public getJSON<T>(res:Response):T {
    const body:T = res.json();
    return <T>(body || {});
  }

  public getString(data:Object):string {
    return JSON.stringify(data);
  }

}
