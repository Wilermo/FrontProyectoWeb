import {Component, OnInit} from '@angular/core';
import {BusService} from "../../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Conductor} from "../../../model/conductor";
import {ConductorService} from "../../../shared/conductor.service";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {
  ModalInformacionEliminadoComponent
} from "../../../utils/modal-informacion-eliminado/modal-informacion-eliminado.component";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit{

  conductores: Conductor[] | undefined;
  constructor(private conductorService: ConductorService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.conductorService.findAll().subscribe(conductores => this.conductores = conductores);
  }
  addConductor() {
    this.router.navigate(['/conductor/add']);
  }

  verConductor(conductor: Conductor) {
    this.router.navigate(['/conductor /view', conductor.id]);
  }

  editarConductor(conductor: Conductor) {
    this.router.navigate(["/conductor/edit", conductor.id])
  }

  eliminarConductor(conductorSeleccionado: Conductor) {
      let dialogRef = this.dialog.open(ModalConfirmacionComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.conductorService.deleteById(conductorSeleccionado.id).subscribe( result => {
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
