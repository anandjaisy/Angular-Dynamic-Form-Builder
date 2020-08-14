import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IRequestOptions } from '../view-models/interface';
@Injectable()
export abstract class IGenericHttpClient<T> {
    /**
    * @description
    * Generic Http post method to post the view model and bind the return view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpService.Post(post_url,post-view-model").subscribe(data => {
    *        console.log('data is not success');
    *      }, error => {
    *      console.log(error);
    *      });
    * ```
    */
    abstract Post(destinationUrl: string, options?: IRequestOptions| any): Observable<T>;
    /**
    * @description
    * Generic Http put method to post the view model and bind the return view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpService.Put(put_url,post-view-model).subscribe(data => {
    *        console.log('data is not success');
    *      }, error => {
    *      console.log(error);
    *      });
    * ```
    */
    abstract Put(destinationUrl: string, options?: IRequestOptions| any): Observable<T>;
    /**
    * @description
    * Generic Http GET method to Get the response and bind to the view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpService.HttpGet("get_url").subscribe(data => {
    *        console.log('success');
    *      }, error => {
    *      console.log(error);
    *      });
    * ```
    */
    abstract Get(destinationUrl: string, options?: IRequestOptions| any): Observable<T>;
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
    abstract Delete(destinationUrl: string, options?: IRequestOptions| any): Observable<T>;
}
