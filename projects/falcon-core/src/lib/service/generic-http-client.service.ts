import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IGenericHttpClient } from './igeneric-http-client';
import { Injectable } from '@angular/core';
import { AppSettingServiceService } from './app-setting-service.service';
import { IAppSettingViewModel } from '../view-models/IAppsettingViewModel';
@Injectable()
export class GenericHttpClientService<T> implements IGenericHttpClient<T>{
  private baseUrl: string;
  constructor(private httpClientModule: HttpClient, private appSettingServiceService: AppSettingServiceService) {
    this.baseUrl = this.appSettingServiceService.getAppsettingValue<IAppSettingViewModel>().baseUrl;
  }
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
  public GenericHttpPost(_postViewModel: T, destinationUrl: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClientModule.post<T>(this.baseUrl + destinationUrl, _postViewModel, { headers });
  }
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
  public GenericHttpPut(_postViewModel: T, destinationUrl: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClientModule.put<T>(this.baseUrl + destinationUrl, _postViewModel, { headers });
  }
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
  public GenericHttpPostAndResponse<TE>(postViewModel: TE, destinationUrl: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClientModule.post<T>(this.baseUrl + destinationUrl, postViewModel, { headers });
  }
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
  public GenericHttpPutAndResponse<TE>(postViewModel: TE, destinationUrl: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClientModule.put<T>(this.baseUrl + destinationUrl, postViewModel, { headers });
  }
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
  public GenericHttpGet(destinationUrl: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClientModule.get<T>(this.baseUrl + destinationUrl, { headers });
  }
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
  public GenericHttpDelete(destinationUrl: string): Observable<T> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClientModule.delete<T>(this.baseUrl + destinationUrl, { headers });
  }

}
