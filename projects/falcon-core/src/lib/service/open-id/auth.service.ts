import { Injectable } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { AppSettingService } from '../appsetting.service';
import { EnvironmentViewModel } from '../../view-models/environment-view-model';
import { Observable, Subject, from, timer } from 'rxjs';
import { LoggerService } from '../logger.service';
import { BehaviorSubject } from 'rxjs';
import { TokenHelperService } from './TokenHelperService';
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

  private accessToken: Object;
  private signingOut: boolean = false;

  constructor(private logger: LoggerService, private tokenHelperService: TokenHelperService) {

  }

  async initialize(environment: EnvironmentViewModel): Promise<void> {
    if (this.initialized) return;
    this.settings = this.getClientSettings(environment);
    this.userManager = new UserManager(this.settings);
    this.userManager.events.addUserLoaded(user => { this.user = user; });


    this.userManager.events.addAccessTokenExpiring(() => {
      this.logger.info("IdSvr token expiring " + new Date().toLocaleString());
    });

    this.userManager.events.addAccessTokenExpired(() => {
      this.logger.info("IdSvr token expired " + new Date().toLocaleString());
      this.logout(false);
    });

    this.userManager.events.addSilentRenewError(e => {
      this.logger.error("IdSvr silent renew error " + e.message + new Date().toLocaleString());
      this.logout(false);
    });

    this.userManager.events.addUserLoaded(user => {
      this.logger.info("IdSvr user session is ready " + new Date().toLocaleString());
      this.accessToken = this.tokenHelperService.getPayloadFromToken(user.access_token, false);
      this.user = user;
    });

    this.userManager.events.addUserUnloaded(() => {
      this.logger.info("IdSvr user session has ended " + new Date().toLocaleString());

      if (!this.signingOut) {
        this.startAuthentication(window.location.pathname + window.location.search);
      }
    });

    this.userManager.events.addUserSignedOut(() => {
      this.logger.info("IdSvr user signed out " + new Date().toLocaleString());
      this.logout(false);
    });

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
    if (this.user != null)
      return `${this.user.token_type} ${this.user.access_token}`;
  }

  getAccessToken(): any {
    return this.accessToken || this.tokenHelperService.getPayloadFromToken(this.user.access_token, false);;
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

  public logout(signoutRedirect?: boolean): Promise<void> {

    if (signoutRedirect === undefined || signoutRedirect !== false) {
      this.signingOut = true;
      signoutRedirect = true;
    }

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
      automaticSilentRenew: environment.openID.automaticSilentRenew,
      accessTokenExpiringNotificationTime: 20, //default 60
      checkSessionInterval: 2000, //default 2000
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