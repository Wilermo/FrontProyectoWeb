import { Component } from '@angular/core';
import {EstacionService} from "../../../shared/estacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConductorService} from "../../../shared/conductor.service";
import {Estacion} from "../../../model/estacion";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {Conductor} from "../../../model/conductor";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {
  ModalConfirmacionCreacionComponent
} from "../../../utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component";

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

  nombreConductor: string | undefined;
  cedulaConductor: string | undefined;
  telefonoConductor: string | undefined;
  direccionConductor: string | undefined;

  volver() {
    this.router.navigate(['/conductor/list']);
  }

  guardar() {
    let nombre = this.nombreConductor;
    let cedula = this.cedulaConductor;
    let telefono = this.telefonoConductor;
    let direccion = this.direccionConductor;
    if (nombre != undefined && nombre != "" && cedula != undefined && cedula != "" && telefono != undefined && telefono != "" && direccion != undefined && direccion != "") {
      let conductorNuevo = new Conductor(-1,nombre,cedula,telefono,direccion)
      let dialogRef = this.dialog.open(ModalConfirmacionCreacionComponent);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.conductorService.guardarConductor(conductorNuevo).subscribe(result=>{
              if(result){
                // let dialogRef = this.dialog.open();
                //dialogRef.afterClosed().subscribe(x => this.router.navigate(['/conductor/list']))
                //TODO
                this.router.navigate(["/conductor/list"]);
              }
            }
          )
        }
      })
    } else {
      let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
      dialogRef.afterClosed().subscribe(x => this.router.navigate(['/conductor/list']))
    }
  }

}
