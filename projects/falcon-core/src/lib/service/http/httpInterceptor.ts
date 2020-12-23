import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../open-id/auth.service';

@Injectable()
export class HttpFalconInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getAccessToken()}`
            }
        });
        return next.handle(request);
    }
}