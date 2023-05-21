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
import {BusEditComponent} from "./componentesModel/bus/bus-edit/bus-edit.component";
import {RutaEditComponent} from "./componentesModel/ruta/ruta-edit/ruta-edit.component";
import {HorarioViewComponent} from "./componentesModel/horario/horario-view/horario-view.component";
import {HorarioEditComponent} from "./componentesModel/horario/horario-edit/horario-edit.component";
import {ConductorEditComponent} from "./componentesModel/conductor/conductor-edit/conductor-edit.component";
import {ConductorAddComponent} from "./componentesModel/conductor/conductor-add/conductor-add.component";
import {AuthGuard} from "./guard/auth.guard";



const routes: Routes = [
  {path: 'bus/list', component: BusListComponent},
  {path: 'bus/add', component: BusAddComponent,data:{roles:["ROLE_COORDINADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard]} ,
  {path: 'bus/view/:id', component: BusViewComponent},
  {path: 'bus/edit/:id', component: BusEditComponent,data:{roles:["ROLE_COORDINADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard] },
  {path: 'horario/list', component: HorarioListComponent,data:{roles:["ROLE_COORDINADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard] },
  {path: 'horario/add', component: HorarioAddComponent,data:{roles:["ROLE_COORDINADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard]},
  {path: 'horario/view/:id', component: HorarioViewComponent,data:{roles:["ROLE_COORDINADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard]},
  {path: 'horario/edit/:id', component: HorarioEditComponent,data:{roles:["ROLE_COORDINADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard]},
  {path: 'estacion/list', component: EstacionListComponent},
  {path: 'estacion/edit/:id', component: EstacionEditComponent,data:{roles:["ROLE_ADMINISTRADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard]},
  {path: 'estacion/add', component: EstacionAddComponent,data:{roles:["ROLE_ADMINISTRADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard]},
  {path: 'ruta/list', component: RutaListComponent},
  {path: 'ruta/add', component: RutaAddComponent,data:{roles:["ROLE_ADMINISTRADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard]},
  {path: 'ruta/edit/:id', component: RutaEditComponent,data:{roles:["ROLE_ADMINISTRADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard]},
  {path: 'ruta/view/:id', component: RutaViewComponent},
  {path: 'conductor/list', component: ConductorListComponent,data:{roles:["ROLE_COORDINADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard] },
  {path: 'conductor/edit/:id', component: ConductorEditComponent,data:{roles:["ROLE_COORDINADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard] },
  {path: 'conductor/add', component: ConductorAddComponent,data:{roles:["ROLE_COORDINADOR","ROLE_UNIVERSAL"]} ,canActivate: [AuthGuard] },
  {path: '', pathMatch: 'full', redirectTo: '/bus/list'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
