import {Component, OnInit} from '@angular/core';
import {Estacion} from "../../../model/estacion";
import {RutaService} from "../../../shared/ruta.service";
import {EstacionService} from "../../../shared/estacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Ruta} from "../../../model/ruta";

import {
  ModalConfirmacionCreacionComponent
} from "../../../utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-ruta-edit',
  templateUrl: './ruta-edit.component.html',
  styleUrls: ['./ruta-edit.component.css']
})
export class RutaEditComponent implements OnInit {
  entradaTexto: string | undefined;
  estaciones: Estacion[] | undefined
  form: HTMLFormElement | undefined;
  estacionesSeleccionadas: string[] = [];
  ruta: Ruta | undefined;

  constructor(private rutaService: RutaService,
              private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }


  ngOnInit() {
    this.route.paramMap.pipe(switchMap(params =>
      this.rutaService.findById(+params.get('id')!))).subscribe(ruta => this.ruta = ruta);

    this.estacionService.findAll().subscribe(result => this.estaciones = result)
  }

  onCheckboxChange(nombre: string, event: any) {
    if (event.target.checked) {
      this.estacionesSeleccionadas.push(nombre);
    } else {
      const index = this.estacionesSeleccionadas.indexOf(nombre);
      if (index !== -1) {
        this.estacionesSeleccionadas.splice(index, 1);
      }
    }
  }

  volver() {
    this.router.navigate(['/ruta/list']);

  }

  guardar() {
    let inputValue = this.entradaTexto;
    if (inputValue == undefined || inputValue == "") {
      inputValue=this.ruta?.nombreRuta;
    }

    let formData = new FormData(this.form);
    for (var pair of formData.entries()) {
      //estacionesAniadir.push(pair[1]);
      console.log(pair[0] + ' : ' +pair[1]);
    }

    let ruta = new Ruta(this.ruta?.id, inputValue, this.estacionesSeleccionadas);

    let dialogRef = this.dialog.open(ModalConfirmacionCreacionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rutaService.modificarRuta(ruta).subscribe(result => {
          if (result.nombreRuta == inputValue) {
            this.router.navigate(["ruta/list"])
          } else {
            let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
            dialogRef.afterClosed().subscribe(x => this.router.navigate(['/ruta/list']))
          }
        })
      } else {
        let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
        dialogRef.afterClosed().subscribe(x => this.router.navigate(['/ruta/list']))
      }
    })


  }
}
