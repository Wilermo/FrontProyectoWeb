import { Component } from '@angular/core';
import {HorarioService} from "../../../shared/horario.service";
import {ConductorService} from "../../../shared/conductor.service";
import {BusService} from "../../../shared/bus.service";
import {RutaService} from "../../../shared/ruta.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Conductor} from "../../../model/conductor";
import {Horario} from "../../../model/horario";
import {Bus} from "../../../model/bus";
import {DiasSemana} from "../../../model/diasSemana";
import {Ruta} from "../../../model/ruta";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {
  ModalConfirmacionCreacionComponent
} from "../../../utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-horario-view',
  templateUrl: './horario-view.component.html',
  styleUrls: ['./horario-view.component.css']
})
export class HorarioViewComponent {
  constructor(private horarioService: HorarioService,
              private conductorService: ConductorService,
              private busService: BusService,
              private rutaService: RutaService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  conductores: Conductor[] | undefined
  conductorSeleccionado: number | undefined;
  horario: Horario | undefined;
  busSeleccionado: string | undefined;
  buses: Bus[] | undefined;
  diaSeleccionado: DiasSemana | undefined;
  dias: string[] | undefined;
  horaInicio: string | undefined;
  horaFin: string | undefined;
  horas: number [] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  rutaSeleccionada:number | undefined;
  rutas: Ruta[] | undefined;


  ngOnInit() {
    this.conductorService.findAll().subscribe(result => this.conductores = result);
    this.busService.findAll().subscribe(result => this.buses = result);
    this.dias = Object.keys(DiasSemana).filter((v) => isNaN(Number(v)));
    this.rutaService.findAll().subscribe(result => this.rutas = result)

    this.route.paramMap.pipe(switchMap(params =>
      this.horarioService.findById(+params.get('id')!))).subscribe(horario => this.horario = horario);
    console.log(this.horario);
  }


  volver() {
    this.router.navigate(["/horario/list"])
  }


}
