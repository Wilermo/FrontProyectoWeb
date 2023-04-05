import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './bus/bus-list/bus-list.component';
import { BusAddComponent } from './bus/bus-add/bus-add.component';
import { BusEditComponent } from './bus/bus-edit/bus-edit.component';
import {HttpClientModule} from "@angular/common/http";
import { BusViewComponent } from './bus/bus-view/bus-view.component';
import { HorarioListComponent } from './horario/horario-list/horario-list.component';
import { ConductorListComponent } from './conductor/conductor-list/conductor-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    BusAddComponent,
    BusEditComponent,
    BusViewComponent,
    HorarioListComponent,
    ConductorListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
