import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/open-id/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AppSettingService} from '../../service/appsetting.service'
import { from } from 'rxjs';
@Component({
  selector: 'lib-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  private completed: boolean;
  constructor(private appSettings: AppSettingService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

    async ngOnInit(): Promise<void> {
    this.appSettings.on(AppSettingService.APP_SETTINGS_LOADED, () => {
      this.completeAuthentication();
    });
    if (this.appSettings.initialized) {
      await this.completeAuthentication();
    }
  }

  async completeAuthentication() {
    if (this.completed) {
      console.log(`auth-callback: completed.`);
      return;
    }
    try {
      const user = await this.authService.completeAuthentication();
      const returnUrl = user.state ? user.state.returnUrl : this.route.snapshot.params['url'] || null;
      this.completed = true;
      if (!returnUrl || returnUrl === '/auth-callback') {
        this.router.navigateByUrl(location.origin);
      } else if (returnUrl === '/') {
        this.router.navigate(['']);
      } else {
        this.router.navigateByUrl((returnUrl));
      }
    } catch (e) {
      this.authService.startAuthentication('/');
    }
  }

}