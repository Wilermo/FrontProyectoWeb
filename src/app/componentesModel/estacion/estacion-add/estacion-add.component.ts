import {Component} from '@angular/core';
import {EstacionService} from "../../../shared/estacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Estacion} from "../../../model/estacion";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";

@Component({
  selector: 'app-estacion-add',
  templateUrl: './estacion-add.component.html',
  styleUrls: ['./estacion-add.component.css']
})
export class EstacionAddComponent {

  constructor(private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  estacionNueva: Estacion | undefined;


  volver() {
    this.router.navigate(['/estacion/list']);
  }

  guardar() {
    let inputValue = (<HTMLInputElement>document.getElementById("entradaTexto")).value;
    if (inputValue != undefined && inputValue != "") {
      this.estacionNueva = new Estacion(-1, inputValue)
      if (this.estacionService.guardarEstacion(this.estacionNueva)) {
        this.router.navigate(['/estacion/list']);
      }
    } else {
      let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
      console.log("ESTACION")
    }
  }

}
