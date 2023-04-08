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

const routes: Routes = [
  {path: 'bus/list', component: BusListComponent},
  {path: 'bus/add', component: BusAddComponent},
  {path: 'bus/view/:id', component: BusViewComponent},
  {path: 'horario/list', component: HorarioListComponent},
  {path: 'horario/add', component: HorarioAddComponent},
  {path: 'estacion/list', component: EstacionListComponent},
  {path: 'ruta/list', component: RutaListComponent},
  {path: 'conductor/list', component: ConductorListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/horario/list'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
