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
import {Ruta} from "../../../model/ruta";
import {
  ModalConfirmacionCreacionComponent
} from "../../../utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";

@Component({
  selector: 'app-horario-add',
  templateUrl: './horario-add.component.html',
  styleUrls: ['./horario-add.component.css']
})
export class HorarioAddComponent implements OnInit {

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
  }


  volver() {
    this.router.navigate(["/horario/list"])
  }

  guardar() {

    if (this.conductorSeleccionado == undefined
      || this.busSeleccionado == undefined || this.busSeleccionado == ""
      || this.rutaSeleccionada == undefined
      || this.horaFin == undefined || this.horaFin == ""
      || this.horaInicio == undefined || this.horaInicio == ""
      || this.diaSeleccionado == undefined || this.diaSeleccionado.toString() == "") {

      let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
      dialogRef.afterClosed().subscribe(x => this.router.navigate(['/horario/list']))


    } else {
      let nombreConductor = "";
      this.conductorService.findById(this.conductorSeleccionado).subscribe(result =>{ nombreConductor= result.nombre})
      let rutaEscogida: string | undefined;
      this.rutaService.findById(this.rutaSeleccionada).subscribe(result=>{rutaEscogida=result.nombreRuta});

      let horario = new Horario(-1,nombreConductor,this.conductorSeleccionado,this.busSeleccionado,this.diaSeleccionado,this.horaInicio,this.horaFin,rutaEscogida,this.rutaSeleccionada)
      console.log(horario);
      let dialogRef = this.dialog.open(ModalConfirmacionCreacionComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.horarioService.guardarHorario(horario).subscribe(result => {
            if (result.idConductorHorario == this.conductorSeleccionado) {
              this.router.navigate(["horario/list"])
            }else{
              let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
              dialogRef.afterClosed().subscribe(x => this.router.navigate(['/horario/list']))

            }
          })
        } else {
          let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
          dialogRef.afterClosed().subscribe(x => this.router.navigate(['/horario/list']))
        }
      })

    }

  }
}
