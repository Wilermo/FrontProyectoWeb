import { Component } from '@angular/core';
import {Bus} from "../../../model/bus";
import {BusService} from "../../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {
  ModalConfirmacionCreacionComponent
} from "../../../utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component";


@Component({
  selector: 'app-bus-add',
  templateUrl: './bus-add.component.html',
  styleUrls: ['./bus-add.component.css']
})
export class BusAddComponent {
  constructor( private busService: BusService,
               private route: ActivatedRoute,
               private router: Router,
               public dialog: MatDialog) {}

  nuevoBus : Bus | undefined;

  volver(){
    this.router.navigate(['/bus/list']);
  }

  guardar(){
    let inputPlaca = (<HTMLInputElement>document.getElementById("entradaPlaca")).value;
    let inputModelo = (<HTMLInputElement>document.getElementById("entradaModelo")).value;

    if (inputPlaca != undefined && inputPlaca != "" && inputModelo != undefined && inputModelo != ""){
      this.nuevoBus = new Bus(inputPlaca,inputModelo,-1)
      this.busService.guardarBus(this.nuevoBus).subscribe(result=>{
        if(result.placa == inputPlaca && result.modelo == inputModelo){
          let dialogRef = this.dialog.open(ModalConfirmacionCreacionComponent);
          dialogRef.afterClosed().subscribe(x => this.router.navigate(['/bus/list']))
        }
      })
    } else {
      let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
      dialogRef.afterClosed().subscribe( x => this.router.navigate(['/bus/list']))
    }
  }


}
