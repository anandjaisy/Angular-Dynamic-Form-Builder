import { Injectable } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { AppSettingService } from '../appsetting.service';
import { EnvironmentViewModel } from '../../view-models/environment-view-model';
import { Observable, Subject, from, timer } from 'rxjs';
import { LoggerService } from '../logger.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static USER_LOADED_EVENT = "USER_LOADED";
  static USER_UNLOADED_EVENT = "USER_UNLOADED";

  private initialized: boolean = false;
  private userManager: UserManager;
  private user: User = null;
  public settings: UserManagerSettings;

  private authState$ = new BehaviorSubject(false);
  private authenticated: boolean = false;
  private accessToken: string;

  constructor(private logger: LoggerService) {
    this._isAuthenticated().then(state => {

      this.authState$.next(state);

      this.authState$.subscribe((authenticated: boolean) => {

        this.authenticated = authenticated;
        this.accessToken = '';

        if (this.authenticated) {
          this.setAccessToken();
        }

      });

    });
  }

  async initialize(environment: EnvironmentViewModel): Promise<void> {
    if (this.initialized) return;
    this.settings = this.getClientSettings(environment);
    this.userManager = new UserManager(this.settings);
    this.userManager.events.addUserLoaded(user => { this.user = user; });
    this.user = await this.userManager.getUser();
    this.initialized = true;
  }

  public isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  public getUser(): Promise<User> {
    return this.userManager.getUser();
  }

  public getProfile(): any {
    return this.user.profile;
  }

  public getClaims(): any {
    return this.user.profile;
  }

  public getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  public getAccessToken(): string {
    return this.accessToken;
  }
  
  private setAccessToken() {
    this.accessToken = this.user.access_token;
  }

  private async _isAuthenticated(): Promise<boolean> {
    return this.user !== null && !this.user.expired;
  }

  async startAuthentication(returnUrl: string): Promise<void> {
    this.logger.info("[AuthService] startAuthentication", returnUrl);
    await this.userManager.clearStaleState();
    await this.userManager.signinRedirect({ data: { returnUrl: returnUrl } }).catch(err => {
      //this.$log.debug("IdSvr sign in failed", err);
      return err;
    });
  }

  async completeAuthentication(): Promise<Oidc.User> {
    this.logger.info("[AuthService] completeAuthentication");
    let user = await new Promise<Oidc.User>((resolve, reject) => {
      this.userManager.signinRedirectCallback().then(user => { resolve(user) }).catch(error => { reject(error); });
    });
    this.user = user;
    return this.user;
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }

  private getClientSettings(environment: EnvironmentViewModel): UserManagerSettings {
    return {
      authority: environment.openID.authority,
      client_id: environment.openID.client_id,
      redirect_uri: environment.openID.redirect_uri,
      post_logout_redirect_uri: environment.openID.post_logout_redirect_uri,
      response_type: environment.openID.response_type,
      scope: environment.openID.scope,
      filterProtocolClaims: environment.openID.filterProtocolClaims,
      loadUserInfo: true,
      monitorSession: true,
      silent_redirect_uri: environment.openID.silent_redirect_uri,
      accessTokenExpiringNotificationTime: 20, //default 60
      checkSessionInterval: 5000, //default 2000
      silentRequestTimeout: 20000,
    };
  }

  async isServiceReady(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (this.initialized) {
        this.logger.info("[AuthService] isServiceReady", true);
        resolve(true);
      }
      else {
        this.logger.info("[AuthService] isServiceReady", false);
        reject(false);
      }
    });
  }
}
export function authServiceFactory(authService: AuthService, appSettings: AppSettingService, environment: EnvironmentViewModel) {
  return async () => {
    appSettings.isServiceReady.subscribe(item => {
      if (item)
        authService.initialize(environment);
    });
  }
};