import {Component, OnInit} from '@angular/core';
import {RutaService} from "../../../shared/ruta.service";
import {EstacionService} from "../../../shared/estacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Horario} from "../../../model/horario";
import {HorarioService} from "../../../shared/horario.service";
import {ConductorService} from "../../../shared/conductor.service";
import {Conductor} from "../../../model/conductor";
import {Bus} from "../../../model/bus";
import {BusService} from "../../../shared/bus.service";
import {DiasSemana} from "../../../model/diasSemana";

@Component({
  selector: 'app-horario-add',
  templateUrl: './horario-add.component.html',
  styleUrls: ['./horario-add.component.css']
})
export class HorarioAddComponent implements OnInit{

  constructor(private horarioService: HorarioService,
              private conductorService : ConductorService,
              private busService:BusService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  conductores : Conductor[]|undefined
  conductorSeleccionado: string|undefined;
  horario:Horario|undefined;
  busSeleccionado: string|undefined;
  buses: Bus[] | undefined;
  diaSeleccionado: DiasSemana|undefined;
  dias: string[]|undefined;


  ngOnInit() {
    this.conductorService.findAll().subscribe(result => this.conductores=result);
    this.busService.findAll().subscribe(result => this.buses=result);
    this.dias=Object.keys(DiasSemana).filter((v) => isNaN(Number(v)));
  }



  volver() {
    this.router.navigate(["/horario/list"])
  }

  guardar() {

  }
}
