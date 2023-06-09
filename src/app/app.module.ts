import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './componentesModel/bus/bus-list/bus-list.component';
import { BusAddComponent } from './componentesModel/bus/bus-add/bus-add.component';
import { BusEditComponent } from './componentesModel/bus/bus-edit/bus-edit.component';
import {HttpClientModule} from "@angular/common/http";
import { BusViewComponent } from './componentesModel/bus/bus-view/bus-view.component';
import { HorarioListComponent } from './componentesModel/horario/horario-list/horario-list.component';
import { ConductorListComponent } from './componentesModel/conductor/conductor-list/conductor-list.component';
import { HorarioAddComponent } from './componentesModel/horario/horario-add/horario-add.component';
import { RutaListComponent } from './componentesModel/ruta/ruta-list/ruta-list.component';
import { EstacionListComponent } from './componentesModel/estacion/estacion-list/estacion-list.component';
import {ModalConfirmacionComponent} from "./utils/modal-confirmacion/modal-confirmacion.component";
import { MatDialogModule } from '@angular/material/dialog';
import { ModalInformacionEliminadoComponent } from './utils/modal-informacion-eliminado/modal-informacion-eliminado.component';
import { EstacionEditComponent } from './componentesModel/estacion/estacion-edit/estacion-edit.component';
import { EstacionAddComponent } from './componentesModel/estacion/estacion-add/estacion-add.component';
import { ModalInformacionErrorComponent } from './utils/modal-informacion-error/modal-informacion-error.component';
import { RutaAddComponent } from './componentesModel/ruta/ruta-add/ruta-add.component';
import { RutaViewComponent } from './componentesModel/ruta/ruta-view/ruta-view.component';
import { RutaEditComponent } from './componentesModel/ruta/ruta-edit/ruta-edit.component';
import { ConductorEditComponent } from './componentesModel/conductor/conductor-edit/conductor-edit.component';
import { ConductorAddComponent } from './componentesModel/conductor/conductor-add/conductor-add.component';
import { HorarioViewComponent } from './componentesModel/horario/horario-view/horario-view.component';
import { HorarioEditComponent } from './componentesModel/horario/horario-edit/horario-edit.component';
import {FormsModule} from "@angular/forms";
import { ModalConfirmacionCreacionComponent } from './utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180',
        realm: 'DWRealm',
        clientId: 'dw-app'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}


@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    BusAddComponent,
    BusEditComponent,
    BusViewComponent,
    HorarioListComponent,
    ConductorListComponent,
    HorarioAddComponent,
    RutaListComponent,
    EstacionListComponent,
    ModalConfirmacionComponent,
    ModalInformacionEliminadoComponent,
    EstacionEditComponent,
    EstacionAddComponent,
    ModalInformacionErrorComponent,
    RutaAddComponent,
    RutaViewComponent,
    RutaEditComponent,
    ConductorEditComponent,
    ConductorAddComponent,
    HorarioViewComponent,
    HorarioEditComponent,
    ModalConfirmacionCreacionComponent,



  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatDialogModule,
        FormsModule,
        KeycloakAngularModule
    ],
  providers :[
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
 bootstrap: [AppComponent]
})
export class AppModule { }
