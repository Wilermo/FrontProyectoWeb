import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusListComponent} from "./bus/bus-list/bus-list.component";
import {BusViewComponent} from "./bus/bus-view/bus-view.component";
import {HorarioListComponent} from "./horario/horario-list/horario-list.component";
import {HorarioAddComponent} from "./horario/horario-add/horario-add.component";
import {BusAddComponent} from "./bus/bus-add/bus-add.component";

const routes: Routes = [
  {path: 'bus/list', component: BusListComponent},
  {path: 'bus/add', component: BusAddComponent},
  {path: 'bus/view/:id', component: BusViewComponent},
  {path: 'horario/list', component: HorarioListComponent},
  {path: 'horario/add', component: HorarioAddComponent},
  {path: '', pathMatch: 'full', redirectTo: '/bus/list'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
