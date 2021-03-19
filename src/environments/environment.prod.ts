import { EnvironmentViewModel } from 'projects/falcon-core/src/lib/model/environment-view-model';

class EnvironmentImpl implements EnvironmentViewModel {
  production = false;
  openID = {
    authority: 'https://falconidentityserver.azurewebsites.net',
    client_id: 'Fete_Bird_UI',
    redirect_uri: 'http://localhost:4200/auth-callback',
    silent_redirect_uri: 'http://localhost:4200/assets/silent-renew.html',
    post_logout_redirect_uri: 'http://localhost:4200',
    response_type: 'code',
    scope: 'openid profile email',
    automaticSilentRenew: true
  };
  baseUrl = 'http://localhost:8080/api/v1';
  snackBarEnable = true;
}

export const environment = new EnvironmentImpl();
