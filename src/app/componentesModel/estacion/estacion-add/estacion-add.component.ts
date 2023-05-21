import {Component, OnInit} from '@angular/core';
import {EstacionService} from "../../../shared/estacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Estacion} from "../../../model/estacion";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {
  ModalConfirmacionCreacionComponent
} from "../../../utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component";
import {map} from "rxjs";

@Component({
  selector: 'app-estacion-add',
  templateUrl: './estacion-add.component.html',
  styleUrls: ['./estacion-add.component.css'],

})
export class EstacionAddComponent implements OnInit {

  constructor(private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  estacionNueva: Estacion | undefined;
  entradaTexto: string | undefined;

  estaciones : Estacion[] | undefined;
  estacionPrevia: number | undefined;
  estacionSiguiente: number | undefined;

  ngOnInit() {
    this.estacionService.findAll().subscribe(result => this.estaciones = result);
  }

  volver() {
    this.router.navigate(['/estacion/list']);
  }

  guardar() {
    let inputValue = this.entradaTexto;
    let mapPrevio = 0;
    if (inputValue != undefined && inputValue != "") {
      if(this.estacionPrevia == undefined ){
        this.estacionPrevia=0;
      }
      this.estacionNueva = new Estacion(-1, inputValue, +this.estacionPrevia+1)
      this.estacionService.guardarEstacion(this.estacionNueva).subscribe(result=>{
        if(result.nombre == inputValue){
          let dialogRef = this.dialog.open(ModalConfirmacionCreacionComponent);
          dialogRef.afterClosed().subscribe(x => this.router.navigate(['/estacion/list']))
        }
      })
    } else {
      let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
      dialogRef.afterClosed().subscribe(x => this.router.navigate(['/estacion/list']))

    }
  }

}
