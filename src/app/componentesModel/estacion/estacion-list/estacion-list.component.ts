import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {EstacionService} from "../../../shared/estacion.service";
import {Estacion} from "../../../model/estacion";
import {MatDialog} from "@angular/material/dialog";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";

@Component({
  selector: 'app-estacion-list',
  templateUrl: './estacion-list.component.html',
  styleUrls: ['./estacion-list.component.css']
})
export class EstacionListComponent implements OnInit{

  constructor(private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
              ) { }

  estaciones:  Estacion [] | undefined;


  ngOnInit(): void {
    this.estacionService.findAll().subscribe(estaciones => this.estaciones = estaciones);
  }


  addEstacion() {
    this.router.navigate(['/estacion/add']);
  }


  eliminarEstacion() {
    const dialogRef = this.dialog.open(ModalConfirmacionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/bus/list']);
      } else {
        // El usuario canceló la acción
      }
    })
  }
}
