import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable,from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppSettingService {
  static APP_SETTINGS_LOADED = "APP_SETTINGS_LOADED";
  private listeners: Object;
  initialized: boolean = false;;
  private eventsSubject: Subject<any>;
  private events: Observable<any>;
  private appSettings;

  constructor(private http: HttpClient) {
    this.listeners = {};
    this.eventsSubject = new Subject<any>();

    this.events = from(this.eventsSubject);
    this.events.subscribe(
      ({ name, args }) => {
        if (this.listeners[name]) {
          for (let listener of this.listeners[name]) {
            listener(...args);
          }
        }
      });

   }

  async load() {
    if (this.initialized) return;
    let data = await this.http.get('/assets/appsetting.json').toPromise();
    this.appSettings = data;
    this.initialized = true;
  }

  async isServiceReady(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (this.initialized)
        resolve(true)
      else
        resolve(false)
    });
  }

  on(name, listener) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    this.listeners[name].push(listener);
  }

  public getAppsettingValue<T>(): T {
    return this.appSettings ? <T>this.appSettings : null;
  }
}
export function appSettingsFactory(appSettings: AppSettingService) {
  return async () => await appSettings.load();
};