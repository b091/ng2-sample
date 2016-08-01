import {Http} from '@angular/http';

import {TypeMoq} from '../../../utils/TypeMoq';
import {HttpJSONService} from '../../../../src/app/http/HttpJSONService';
import {Observable} from 'rxjs';
import {DataExtractor} from '../../../../src/app/http/DataExtractor';
import {ErrorHandler} from '../../../../src/app/http/ErrorHandler';

describe('Service: Translation', () => {

  let mockHttp:TypeMoq.Mock<Http>;
  let mockDataExtractor:TypeMoq.Mock<DataExtractor>;
  let mockErrorHandler:TypeMoq.Mock<ErrorHandler>;
  let mockObservableAny:TypeMoq.Mock<Observable<any>>;
  let httpJSONService:HttpJSONService;

  beforeEach(() => {
    mockHttp = TypeMoq.Mock.ofType(Http);
    mockDataExtractor = TypeMoq.Mock.ofType(DataExtractor);
    mockErrorHandler = TypeMoq.Mock.ofType(ErrorHandler);
    mockObservableAny = TypeMoq.Mock.ofType(Observable);
    httpJSONService = new HttpJSONService(mockHttp.object, mockDataExtractor.object, mockErrorHandler.object);
  });

  describe('removing data', () => {

    it('calls the API to remove data', () => {
      // given
      const apiUrl:string = 'my-sample-api-url';
      mockHttp
        .setup(x => x.delete(TypeMoq.It.isAny()))
        .returns(() => mockObservableAny.object);

      // when
      httpJSONService.delete(apiUrl);

      // then
      mockHttp.verify(x => x.delete(apiUrl), TypeMoq.Times.once());
    });

    it('logs error to console on failure', () => {
      // given
      const error:any = 'my-sample-error';
      mockHttp
        .setup(x => x.delete(TypeMoq.It.isAny()))
        .returns(() => Observable.throw(new Error(error)));

      // when
      httpJSONService.delete(TypeMoq.It.isAny());

      // then
      mockErrorHandler.verify(x => x.logToConsole(error), TypeMoq.Times.once());
    });
  });

});
