import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";

export const authenticationInterceptor: HttpInterceptorFn = ( request: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const storageService = new StorageService();
  const token = storageService.getItem('token');
  const handledRequest = token
    ? request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`)} )
    : request;
  return next(handledRequest);
}
