import { EnvironmentViewModel } from 'projects/falcon-core/src/lib/view-models/environment-view-model';

class EnvironmentImpl implements EnvironmentViewModel {
  production = true;
  openID = {
    authority: "https://falconidentityserver.azurewebsites.net",
    client_id: "Local",
    redirect_uri: "https://falconidentityserver.azurewebsites.net/auth-callback",
    silent_redirect_uri: "https://falconidentityserver.azurewebsites.net/assets/silent-renew.html",
    response_type: "code",
    scope: "openid profile email",
    automaticSilentRenew: true
  };
  baseUrl= "https://falconidentityserver.azurewebsites.net";
  snackBarEnable = true;
}

export const environment = new EnvironmentImpl();
