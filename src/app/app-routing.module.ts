import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusListComponent} from "./componentesModel/bus/bus-list/bus-list.component";
import {BusViewComponent} from "./componentesModel/bus/bus-view/bus-view.component";
import {HorarioListComponent} from "./componentesModel/horario/horario-list/horario-list.component";
import {HorarioAddComponent} from "./componentesModel/horario/horario-add/horario-add.component";
import {BusAddComponent} from "./componentesModel/bus/bus-add/bus-add.component";
import {Estacion} from "./model/estacion";
import {EstacionListComponent} from "./componentesModel/estacion/estacion-list/estacion-list.component";
import {RutaListComponent} from "./componentesModel/ruta/ruta-list/ruta-list.component";
import {ConductorListComponent} from "./componentesModel/conductor/conductor-list/conductor-list.component";
import {EstacionEditComponent} from "./componentesModel/estacion/estacion-edit/estacion-edit.component";
import {EstacionAddComponent} from "./componentesModel/estacion/estacion-add/estacion-add.component";
import {RutaAddComponent} from "./componentesModel/ruta/ruta-add/ruta-add.component";
import {RutaViewComponent} from "./componentesModel/ruta/ruta-view/ruta-view.component";
import {ConductorViewComponent} from "./componentesModel/conductor/conductor-view/conductor-view.component";
import {RutaEditComponent} from "./componentesModel/ruta/ruta-edit/ruta-edit.component";
import {BusEditComponent} from "./componentesModel/bus/bus-edit/bus-edit.component";

const routes: Routes = [
  {path: 'bus/list', component: BusListComponent},
  {path: 'bus/add', component: BusAddComponent},
  {path: 'bus/view/:id', component: BusViewComponent},
  {path: 'bus/edit/:id', component: BusEditComponent},
  {path: 'horario/list', component: HorarioListComponent},
  {path: 'horario/add', component: HorarioAddComponent},
  {path: 'estacion/list', component: EstacionListComponent},
  {path: 'estacion/edit/:id', component: EstacionEditComponent},
  {path: 'estacion/add', component: EstacionAddComponent},
  {path: 'ruta/list', component: RutaListComponent},
  {path: 'ruta/add', component: RutaAddComponent},
  {path: 'ruta/edit/:id', component: RutaEditComponent},
  {path: 'ruta/view/:id', component: RutaViewComponent},
  {path: 'conductor/list', component: ConductorListComponent},
  {path: 'conductor/view', component: ConductorViewComponent},
  {path: '', pathMatch: 'full', redirectTo: '/horario/list'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
