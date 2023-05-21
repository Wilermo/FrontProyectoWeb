import {Component, OnInit} from '@angular/core';
import {BusService} from "../../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RutaService} from "../../../shared/ruta.service";
import {Ruta} from "../../../model/ruta";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {
  ModalInformacionEliminadoComponent
} from "../../../utils/modal-informacion-eliminado/modal-informacion-eliminado.component";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-ruta-list',
  templateUrl: './ruta-list.component.html',
  styleUrls: ['./ruta-list.component.css']
})
export class RutaListComponent implements  OnInit{

  constructor(private rutaService: RutaService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              public keyCloakService: KeycloakService
              ) { }

  rutas : Ruta[] |undefined

  ngOnInit() {
    this.rutaService.findAll().subscribe(rutas => this.rutas = rutas);
  }

  addRuta() {
    this.router.navigate(["/ruta/add"])
  }

  verEstaciones(ruta: Ruta) {
    this.router.navigate(['/ruta/view', ruta.id]);
  }

  editRuta(ruta: Ruta) {
    this.router.navigate(['/ruta/edit', ruta.id]);
  }

  deleteRuta(ruta: Ruta) {
    let dialogRef = this.dialog.open(ModalConfirmacionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rutaService.delete(ruta?.id).subscribe(result => {
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
