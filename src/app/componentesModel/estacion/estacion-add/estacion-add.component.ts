import {Component} from '@angular/core';
import {EstacionService} from "../../../shared/estacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Estacion} from "../../../model/estacion";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";

@Component({
  selector: 'app-estacion-add',
  templateUrl: './estacion-add.component.html',
  styleUrls: ['./estacion-add.component.css'],

})
export class EstacionAddComponent {

  constructor(private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  estacionNueva: Estacion | undefined;
  entradaTexto: string | undefined;


  volver() {
    this.router.navigate(['/estacion/list']);
  }

  guardar() {
    let inputValue = this.entradaTexto;
    if (inputValue != undefined && inputValue != "") {
      this.estacionNueva = new Estacion(-1, inputValue)
      this.estacionService.guardarEstacion(this.estacionNueva).subscribe(result=>{
        if(result.nombre == inputValue){
          let dialogRef = this.dialog.open(ModalConfirmacionComponent);
          dialogRef.afterClosed().subscribe(x => this.router.navigate(['/estacion/list']))
        }
      })
    } else {
      let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
      dialogRef.afterClosed().subscribe(x => this.router.navigate(['/estacion/list']))

    }
  }

}
