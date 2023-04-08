import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusListComponent} from "./bus/bus-list/bus-list.component";
import {BusViewComponent} from "./bus/bus-view/bus-view.component";
import {HorarioListComponent} from "./horario/horario-list/horario-list.component";
import {HorarioAddComponent} from "./horario/horario-add/horario-add.component";
import {BusAddComponent} from "./bus/bus-add/bus-add.component";
import {Estacion} from "./model/estacion";
import {EstacionListComponent} from "./estacion/estacion-list/estacion-list.component";
import {RutaListComponent} from "./ruta/ruta-list/ruta-list.component";
import {ConductorListComponent} from "./conductor/conductor-list/conductor-list.component";

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
