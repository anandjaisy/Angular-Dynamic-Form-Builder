import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, from } from 'rxjs';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class AppSettingService {
  static APP_SETTINGS_LOADED = "APP_SETTINGS_LOADED";
  private listeners: Object;
  initialized: boolean = false;;
  private eventsSubject: Subject<any>;
  public isServiceReady: Subject<boolean> = new Subject<boolean>();
  private events: Observable<any>;
  private appSettings;

  constructor(private http: HttpClient,private logger: LoggerService) {
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
    let data = await this.http.get('Angular-Dynamic-Form-Builder/assets/appsetting.json').toPromise();
    this.appSettings = data;
    this.initialized = true;
    this.isServiceReady.next(this.initialized);
    this.logger.info("[AppSettingService] load --> isServiceReady", this.initialized);
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