import {Component, OnInit} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {KeycloakService} from "keycloak-angular";
import {SecurityService} from "./shared/security.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  {
  title = 'proyectoPeroEnAngular';

  isLogged : boolean;
  constructor(private contexts: ChildrenOutletContexts
    , protected readonly keyCloakService: KeycloakService
    , protected readonly securityService: SecurityService
  ) {
    this.isLogged = false;
    this.keyCloakService.isLoggedIn().then(v=> this.isLogged = v);

  }


  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  logIn() {

    this.keyCloakService.login();
    this.isLogged = true;
  }

  logOut() {

    this.securityService.logout();
    this.isLogged =false;
  }
}
