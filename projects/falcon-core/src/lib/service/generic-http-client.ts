import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, from } from 'rxjs';
import { IGenericHttpClient } from './igeneric-http-client';
import { Injectable } from '@angular/core';
import { HttpMethod } from '../view-models/component-type.enum'
import { IRequestOptions } from '../view-models/interface';
import { EnvironmentViewModel } from '../view-models/environment-view-model';
import { retry } from 'rxjs/operators';
@Injectable()
export class GenericHttpClient<T> implements IGenericHttpClient<T>{

  constructor(private httpClient: HttpClient, private environment: EnvironmentViewModel) { }
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
  public Post(destinationUrl: string, options?: IRequestOptions): Observable<T> {
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
  public Put(destinationUrl: string, options?: IRequestOptions): Observable<T> {
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
  public Get(destinationUrl: string, options?: IRequestOptions): Observable<T> {
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
  public Delete(destinationUrl: string, options?: IRequestOptions): Observable<T> {
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
      this.httpClient.request<T>(new HttpRequest(method, this.environment.baseUrl + url, options)).subscribe(
        (response: any) => {
          const responsTye = response as HttpEvent<any>
          switch (responsTye.type) {
            case HttpEventType.Sent:
              console.log('Request sent!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header received!');
              break;
            case HttpEventType.DownloadProgress:
              const kbLoaded = Math.round(responsTye.loaded / 1024);
              console.log(`Download in progress! ${kbLoaded}Kb loaded`);
              break;
            case HttpEventType.Response:
              observer.next(response.body);
              console.log('😺 Done!', responsTye.body);
          }
        },
        (error) => {
          switch (error.status) {
            case 403:
              observer.complete();
              break;
            default:
              observer.error(error);
              break;
          }
        }
      );
    });
  }
}
