import { Component } from '@angular/core';
import { Appearance, ComponentType } from 'projects/falcon-core/src/public-api';
import { AuthService } from 'projects/falcon-core/src/lib/service/open-id/auth.service';
import { RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  htmlButtonConfig = { componentProperty: { label: "Sign in", appearance: Appearance.Raised }, componentType: ComponentType.Button, formControlName: "Basic" }
  currentYear = (new Date()).getFullYear();
  title = 'project-falcon';
  constructor(private authService: AuthService) { }
  Signclick() {
    this.authService.isServiceReady().then(() => {
      this.authService.startAuthentication("/");
    });
  }
}
