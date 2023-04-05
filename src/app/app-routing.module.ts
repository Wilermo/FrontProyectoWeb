import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusListComponent} from "./bus/bus-list/bus-list.component";
import {BusViewComponent} from "./bus/bus-view/bus-view.component";
import {HorarioListComponent} from "./horario/horario-list/horario-list.component";

const routes: Routes = [
  {path: 'bus/list', component: BusListComponent},
  {path: 'bus/view/:id', component: BusViewComponent},
  {path: 'horario/list', component: HorarioListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/bus/list'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
