import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IRequestOptions } from '../../model/interface';
@Injectable()
export abstract class IGenericHttpClient<T> {

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
     abstract get(destinationUrl: string, options?: IRequestOptions| any): Observable<T>;

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
    abstract post(destinationUrl: string, options?: IRequestOptions| any): Observable<T>;

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
    abstract put(destinationUrl: string, options?: IRequestOptions| any): Observable<T>;

    /**
    * @description
    * Generic Http patch method to patch the view model and bind the return view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpService.Patch(put_url,post-view-model).subscribe(data => {
    *        console.log('data is not success');
    *      }, error => {
    *      console.log(error);
    *      });
    * ```
    */
     abstract patch(destinationUrl: string, options?: IRequestOptions | any): Observable<T>;
    
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
    abstract delete(destinationUrl: string, options?: IRequestOptions| any): Observable<T>;
}
