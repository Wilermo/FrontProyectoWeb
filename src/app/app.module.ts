import { NgModule } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalConfirmacionComponent} from "./utils/modal-confirmacion/modal-confirmacion.component";
import { MatDialogModule } from '@angular/material/dialog';



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
    ModalConfirmacionComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
