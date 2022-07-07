import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';
import { KeycloakProfile } from 'keycloak-js';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = true;
  public loggedIn: boolean = false;
  public userProfile: KeycloakProfile = {};



  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  
  logout() {
    this.auth.logout();
  }

  constructor(private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.loggedIn = await this.auth.isLoggedIn();
    if (this.loggedIn) {
      this.userProfile = await this.auth.loadUserProfile();
      console.log(this.userProfile);
    } else {
      this.auth.login();
    }
  }
}
