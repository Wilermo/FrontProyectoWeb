import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {EstacionService} from "../../../shared/estacion.service";
import {Estacion} from "../../../model/estacion";
import {MatDialog} from "@angular/material/dialog";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {
  ModalInformacionEliminadoComponent
} from "../../../utils/modal-informacion-eliminado/modal-informacion-eliminado.component";
import {Bus} from "../../../model/bus";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";

@Component({
  selector: 'app-estacion-list',
  templateUrl: './estacion-list.component.html',
  styleUrls: ['./estacion-list.component.css']
})
export class EstacionListComponent implements OnInit {

  constructor(private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  estaciones: Estacion [] | undefined;


  ngOnInit(): void {
    this.estacionService.findAll().subscribe(estaciones => this.estaciones = estaciones);
  }


  addEstacion() {
    this.router.navigate(['/estacion/add']);
  }

  editEstacion(estacion: Estacion) {
    this.router.navigate(['/estacion/edit', estacion.id]);
  }


  eliminarEstacion(estacionSeleccionada: Estacion) {
    let dialogRef = this.dialog.open(ModalConfirmacionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.estacionService.deleteById(estacionSeleccionada.id).subscribe(result => {
          if (result) {
            let dialogRef = this.dialog.open(ModalInformacionEliminadoComponent);
            dialogRef.afterClosed().subscribe(x => window.location.reload())
          }else{
            let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
            dialogRef.afterClosed().subscribe(x => window.location.reload())
          }
        })

      } else {
        // El usuario canceló la acción
      }
    })
  }
}
