import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from '../open-id/auth.service';
import { LoggerService } from '../logger.service';
import { catchError } from "rxjs/internal/operators";

@Injectable({
    providedIn: 'root'
})
export class HttpFalconInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService, private logger: LoggerService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request.clone({ setHeaders: { 'Content-Type': 'application/json' } })

        // Get the auth token from the service.
        const authToken = this.authService.getAuthorizationHeaderValue();
        this.logger.info("Auth bearer token ", authToken);

        if (authToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: authToken
                }
            });
        }

        /**
            * continues request execution
        */
        return next.handle(request).pipe(catchError((error, caught) => {
            //intercept the respons error and displace it to the console
            this.logger.error(error);
            return of(error);
        }) as any);
    }
}