export abstract class EnvironmentViewModel {
    abstract readonly production: boolean;
    abstract readonly openID?: IOpenIdViewModel;
    abstract readonly baseUrl?: string;
    abstract readonly snackBarEnable?: boolean
}


/**
 * @description
 * Interface use for an app setting configuration for Open Id Client setting.
 */
export declare interface IOpenIdViewModel {
    authority?: string;
    client_id?: string;
    redirect_uri?: string;
    response_type?: string;
    scope?: string;
    silent_redirect_uri?: string;
    post_logout_redirect_uri?: string;
    filterProtocolClaims?: boolean
    loadUserInfo?: boolean
    automaticSilentRenew?: boolean;
    monitorSession?: boolean;
    accessTokenExpiringNotificationTime?: number;
    checkSessionInterval?: number;
    silentRequestTimeout?: number;
}