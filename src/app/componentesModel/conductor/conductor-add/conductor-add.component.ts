import { Component } from '@angular/core';
import {EstacionService} from "../../../shared/estacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConductorService} from "../../../shared/conductor.service";
import {Estacion} from "../../../model/estacion";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {Conductor} from "../../../model/conductor";

@Component({
  selector: 'app-conductor-add',
  templateUrl: './conductor-add.component.html',
  styleUrls: ['./conductor-add.component.css']
})
export class ConductorAddComponent {
  constructor(private conductorService: ConductorService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }
  conductorNuevo: Conductor | undefined;

  volver() {
    this.router.navigate(['/conductor/list']);
  }

  guardar() {
    let nombre = (<HTMLInputElement>document.getElementById("nombreConductor")).value;
    let cedula = (<HTMLInputElement>document.getElementById("cedulaConductor")).value;
    let telefono = (<HTMLInputElement>document.getElementById("telefonoConductor")).value;
    let direccion = (<HTMLInputElement>document.getElementById("direccionConductor")).value;
    if (nombre != undefined && nombre != "" && cedula != undefined && cedula != "" && telefono != undefined && telefono != "" && direccion != undefined && direccion != "") {
      this.conductorNuevo = new Conductor(-1, nombre,cedula,telefono,direccion)
      if (this.conductorService.guardarConductor(this.conductorNuevo)) {
        this.router.navigate(['/conductor/list']);
      }
    } else {
      let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
      console.log("ESTACION")
    }
  }

}
