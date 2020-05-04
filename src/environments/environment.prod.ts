import { EnvironmentViewModel } from 'projects/falcon-core/src/lib/view-models/environment-view-model';

class EnvironmentImpl implements EnvironmentViewModel {
  production = true;
  openID = {
    authority: "https://monashunidev.oktapreview.com/oauth2/auspadhq6vhMx4wbe0h7",
    clientId: "0oap8o3sb89sI1GrX0h7",
    redirectUri: "https://localhost:44307/auth-callback",
    silentRedirectUri: "https://localhost:44307/assets/silent-renew.html",
    responseType: "code",
    scope: "openid profile email"
  }
}

export const environment = new EnvironmentImpl();
