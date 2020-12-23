import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../open-id/auth.service';
import { LoggerService } from '../logger.service';

@Injectable({
    providedIn: 'root'
})
export class HttpFalconInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService, private logger: LoggerService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Get the auth token from the service.
        const authToken = this.authService.getAuthorizationHeaderValue();
        this.logger.info("Auth bearer token ", authToken);

        const authRequest = request.clone({
            setHeaders: {
                Authorization: authToken
            }
        });
        return next.handle(authRequest);
    }
}