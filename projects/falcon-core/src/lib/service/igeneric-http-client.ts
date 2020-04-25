import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export abstract class IGenericHttpClient<T> {
    /**
    * @description
    * Generic Http post method to post the view model and bind the return view model
    * @returns Obserable view Model.
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpService.GenericHttpPost<GenericResponseObject<UserViewModel[]>>(post-view-model,post_url").subscribe(data => {
    *        console.log('data is not success');
    *      }, error => {
    *      console.log(error);
    *      });
    * ```
    */
    abstract GenericHttpPost(_postViewModel: T, destinationUrl: string): Observable<T>;
    /**
    * @description
    * Generic Http put method to post the view model and bind the return view model
    * @returns Obserable view Model.
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpService.GenericHttpPut<GenericResponseObject<UserViewModel[]>>(post-view-model,put_url).subscribe(data => {
    *        console.log('data is not success');
    *      }, error => {
    *      console.log(error);
    *      });
    * ```
    */
    abstract GenericHttpPut(_postViewModel: T, destinationUrl: string): Observable<T>;
    /**
    * @description
    * Generic Http post method to post the view model and bind the return view model
    * @returns Obserable view Model.
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpClientService.GenericHttpPostAndResponse<GenericResponseObject<VehicleMakeViewModel>, VehicleMakeViewModel>(post-view-model, post-url).subscribe(item => {
    *        console.log(item);
    *      },
    *      err => {
    *        console.log(err);
    *      });
    * ```
    */
    abstract GenericHttpPostAndResponse<TE>(postViewModel: TE, destinationUrl: string): Observable<T>;
    /**
    * @description
    * Generic Http Put method to post the view model and bind the return view model
    * @returns Obserable view Model.
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpClientService.GenericHttpPutAndResponse<GenericResponseObject<VehicleMakeViewModel>, VehicleMakeViewModel>(post-view-model, post-url).subscribe(item => {
    *        console.log(item);
    *      },
    *      err => {
    *        console.log(err);
    *      });
    * ```
    */
    abstract GenericHttpPutAndResponse<TE>(postViewModel: TE, destinationUrl: string): Observable<T>;
    /**
    * @description
    * Generic Http GET method to Get the response and bind to the view model
    * @returns Obserable view Model.
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpService.GenericHttpGet<GenericResponseObject<UserViewModel[]>>("get_url").subscribe(data => {
    *        console.log('success');
    *      }, error => {
    *      console.log(error);
    *      });
    * ```
    */
    abstract GenericHttpGet(destinationUrl: string): Observable<T>;
    /**
    * @description
    * Generic Http Delete method to Delete the item and bind the return view model
    * @returns Obserable view Model.
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpClientService.GenericHttpDelete<GenericResponseObject<UserViewModel[]>>(this.deleteUserUrl).subscribe(item => {
    *         console.log('success');
    *      }, error => {
    *        console.log(error);
    *      });
    * ```
    */
    abstract GenericHttpDelete(destinationUrl: string): Observable<T>;
}
