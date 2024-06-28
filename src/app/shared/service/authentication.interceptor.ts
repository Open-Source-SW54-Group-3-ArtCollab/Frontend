import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";

export const authenticationInterceptor: HttpInterceptorFn = ( request: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJndWVzdCIsImlhdCI6MTcxOTUwNTczNiwiZXhwIjoxNzIwMTEwNTM2fQ._wGefY1AwUHdFmgvez-EzYetuq5DncEYcx7_2wGQM60cmH-XiHXRmtTaTbe5xh0I";
  const handledRequest = token
    ? request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`)} )
    : request;
  return next(handledRequest);
}
