import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, from } from 'rxjs';
import { IGenericHttpClient } from './igeneric-http-client';
import { Injectable } from '@angular/core';
import { HttpMethod } from '../view-models/component-type.enum'
import { IRequestOptions } from '../view-models/interface';
import { EnvironmentViewModel } from '../view-models/environment-view-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoggerService } from "./logger.service";
import { ComponentType } from '../view-models/component-type.enum';
import { HttpStatusCode } from "../view-models/HttpStatusCodeEnum";
@Injectable()
export class GenericHttpClient<T> implements IGenericHttpClient<T>{

  constructor(private httpClient: HttpClient, private environment: EnvironmentViewModel,
    private _snackBar: MatSnackBar, private logger: LoggerService) { }
  /**
    * @description
    * Generic Http post method to post the view model and bind the return view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpClientService.Post(post-url,post-view-model).subscribe(item => {
    *        console.log(item);
    *      },
    *      err => {
    *        console.log(err);
    *      });
    * ```
  */
  public Post(destinationUrl: string, options?: IRequestOptions | any): Observable<T> {
    return this.request<T>(HttpMethod.Post, destinationUrl, options);
  }
  /**
    * @description
    * Generic Http Put method to post the view model and bind the return view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpClientService.Put(post-url, post-view-model).subscribe(item => {
    *        console.log(item);
    *      },
    *      err => {
    *        console.log(err);
    *      });
    * ```
  */
  public Put(destinationUrl: string, options?: IRequestOptions | any): Observable<T> {
    return this.request<T>(HttpMethod.Put, destinationUrl, options);
  }
  /**
    * @description
    * Generic Http GET method to Get the response and bind to the view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpService.Get("get_url").subscribe(data => {
    *        console.log('success');
    *      }, error => {
    *      console.log(error);
    *      });
    * ```
  */
  public Get(destinationUrl: string, options?: IRequestOptions | any): Observable<T> {
    return this.request<T>(HttpMethod.Get, destinationUrl, options);
  }
  /**
    * @description
    * Generic Http Delete method to Delete the item and bind the return view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpClientService.Delete(this.deleteUserUrl).subscribe(item => {
    *         console.log('success');
    *      }, error => {
    *        console.log(error);
    *      });
    * ```
  */
  public Delete(destinationUrl: string, options?: IRequestOptions | any): Observable<T> {
    return this.request<T>(HttpMethod.Delete, destinationUrl, options);
  }
  /**
      * @description
      * Http request method to accept different method type and params
      * @param {string} method Http methods - GET, POST, PUT, DELETE.
      * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
      * @param {IRequestOptions} options options of the request like headers, body, etc.
      * @returns {Observable<T>}
      * @usageNotes
      * The following snippet shows how to use this method
      * ```ts
      *    this.request<T>(HttpMethod.Delete, destinationUrl, options);
      * ```
    */
  private request<T>(method: string, url: string, options?: IRequestOptions): Observable<T> {
    return Observable.create((observer: any) => {
      let destinationUrl = "";
      if (this.environment.baseUrl != undefined)
        destinationUrl = (this.environment.baseUrl) + url
      else
        destinationUrl = url
      this.httpClient.request<T>(new HttpRequest(method, destinationUrl, options)).subscribe(
        (response: any) => {
          const responsTye = response as HttpEvent<any>
          switch (responsTye.type) {
            case HttpEventType.Sent:
              this.logger.info("Http Client : Sent ->", "Request sent!");
              break;
            case HttpEventType.ResponseHeader:
              this.logger.info("Http Client : ResponseHeader ->", "Response header received!");
              break;
            case HttpEventType.DownloadProgress:
              const kbLoaded = Math.round(responsTye.loaded / 1024);
              this.logger.info("Http Client : DownloadProgress ->", `Download in progress! ${kbLoaded}Kb loaded`);
              break;
            case HttpEventType.Response:
              observer.next(response.body);
              this.logger.info("Http Client : Response -> 😺 Done!", responsTye.body);
          }
        },
        (error) => {
          switch (error.status) {
            case HttpStatusCode.FORBIDDEN:
              //observer.complete();
              this._snackBar.open('Access to the requested resource is forbidden.', 'Forbidden', { duration: 5 * 1000 });
              observer.error(error);
              break;
            case HttpStatusCode.BAD_REQUEST:
              this._snackBar.open('Server cannot or will not process the request', 'Bad Request', { duration: 5 * 1000 });
              observer.error(error);
              break;
            case HttpStatusCode.UNAUTHORIZED:
              this._snackBar.open('Request has not been applied because it lacks valid authentication credentials', 'Unauthorized', { duration: 5 * 1000 });
              observer.error(error);
              break;
            case HttpStatusCode.INTERNAL_SERVER_ERROR:
              this._snackBar.open('Server encountered an unexpected condition', 'Internal server error', { duration: 5 * 1000 });
              observer.error(error);
              break;
            default:
              this._snackBar.open('Default', 'Default', { duration: 5 * 1000 });
              observer.error(error);
              break;
          }
        }
      );
    });
  }
}
