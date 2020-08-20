import { EnvironmentViewModel } from 'projects/falcon-core/src/lib/view-models/environment-view-model';

class EnvironmentImpl implements EnvironmentViewModel {
  production = false;
  openID = {
    authority: "https://dev-816623.okta.com/oauth2/ausawbhoeWkYeqy644x6",
    client_id: "0oaawazvrzPmMAQx74x6",
    redirect_uri: "https://localhost:4200/auth-callback",
    post_logout_redirect_uri: "https://localhost:4200",
    response_type: "code",
    scope : "openid profile email",
    silent_redirect_uri: `https://localhost:4200/assets/silent-callback.html`
  };
  baseUrl= "https://raw.githubusercontent.com/anandjaisy/Angular-Dynamic-Form-Builder/master/src/app/component";
  snackBarEnable = true;
}

export const environment = new EnvironmentImpl();
