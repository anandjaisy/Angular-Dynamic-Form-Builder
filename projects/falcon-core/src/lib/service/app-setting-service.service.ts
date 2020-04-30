import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppSettingServiceService {
  static APP_SETTINGS_LOADED = "APP_SETTINGS_LOADED";
  @Output() initialized: boolean = false;;

  private appSettings;

  constructor(private http: HttpClient) { }

  async load() {

    if(this.initialized) return;

    let data = await this.http.get('/Angular-Dynamic-Form-Builder/assets/appsetting.json').toPromise();
    this.appSettings = data;
    this.initialized = true;
  }

  public getAppsettingValue<T>() : T {
    return this.appSettings ? <T>this.appSettings : null;
  }
}
export function appSettingsFactory(appSettings: AppSettingServiceService) {
  return async () => await appSettings.load();
};