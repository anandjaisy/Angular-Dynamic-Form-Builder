import { Injectable } from '@angular/core';
import { LoggingLevel } from '../model/LoggingLevel';
import { AppSettingService } from './appsetting.service';
import { IAppSettingViewModel } from '../model/iappsetting-view-model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private initialized: boolean = false;
  private _level: LoggingLevel = LoggingLevel.Warnings;
  constructor() { }

  async initialize(appSettings: IAppSettingViewModel): Promise<void> {
    if (this.initialized) return;
    this._level = appSettings.loggingLevel;
    this.initialized = true;
  }

  private log(message: any, level = LoggingLevel.Warnings, ...optionalParams: any[]) {
    if (this.shouldLog(level)) {
      switch (level) {
        case LoggingLevel.Errors:
          console.error(message, optionalParams);
          break;
        case LoggingLevel.Warnings:
          console.warn(message, optionalParams);
          break;
        case LoggingLevel.Info:
          console.info(message, optionalParams);
          break;
        default:
          console.debug(message, optionalParams);
      }
    }
  }

  private shouldLog(level: LoggingLevel) {
    if (this._level === LoggingLevel.None) {
      return false;
    } else if (this._level === LoggingLevel.Errors) {
      return level === LoggingLevel.Errors;
    } else if (this._level === LoggingLevel.Warnings) {
      return level === LoggingLevel.Errors || level === LoggingLevel.Warnings;
    } else if (this._level === LoggingLevel.Info) {
      return level === LoggingLevel.Errors || level === LoggingLevel.Warnings || level === LoggingLevel.Info;
    } else {
      return true;
    }
  }

  error(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.Errors, optionalParams);
  }

  warning(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.Warnings, optionalParams);
  }

  info(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.Info, optionalParams);
  }

  verbose(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.Verbose, optionalParams);
  }
}
export function loggerServiceFactory(loggerService: LoggerService, appSettings: AppSettingService) {
  return async () => {
    appSettings.isServiceReady.subscribe(item => {
      if (item)
        loggerService.initialize(appSettings.getAppsettingValue());
    });
  }
};