import { Component, OnInit } from '@angular/core';
import {
  Appearance,
  ComponentType,
} from 'projects/falcon-core/src/public-api';
import { AuthService } from 'projects/falcon-core/src/lib/service/open-id/auth.service';
import { RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  signInButtonConfig = {
    componentProperty: {
      label: 'Sign in',
      appearance: Appearance.Raised,
    },
    componentType: ComponentType.Button,
    formControlName: 'Basic',
  };
  signOutButtonConfig = {
    componentProperty: {
      label: 'Sign out',
      appearance: Appearance.Raised,
    },
    componentType: ComponentType.Button,
    formControlName: 'Basic',
  };
  currentYear = new Date().getFullYear();
  title = 'project-falcon';
  isLoggedIn: boolean = false;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  SignInclick() {
    this.authService.isServiceReady().then(() => {
      this.authService.startAuthentication('/');
    });
  }
  SignOutclick() {
    this.authService.isServiceReady().then(() => {
      this.authService.logout();
    });
  }
}
