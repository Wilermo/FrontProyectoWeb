import { Component } from '@angular/core';
import {BusService} from "../../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Bus} from "../../../model/bus";
import {switchMap} from "rxjs";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {
  ModalConfirmacionCreacionComponent
} from "../../../utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component";

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.css']
})
export class BusEditComponent {
  constructor(private busService : BusService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {}

  bus : Bus | undefined;
  entradaPlaca : string | undefined;
  entradaModelo : string | undefined;

  ngOnInit(){
    this.route.paramMap.pipe(switchMap(params =>
      this.busService.findById(+params.get('id')!))).subscribe(bus => this.bus = bus);

  }

  volver(){
    this.router.navigate(['/bus/list']);
  }

  editar(){
    let inputPlaca = this.entradaPlaca;
    let inputModelo = this.entradaModelo;

    if(inputPlaca != undefined && inputPlaca != "" && inputModelo != undefined && inputModelo != ""){
      if(this.bus != undefined){
        this.bus.placa = inputPlaca;
        this.bus.modelo = inputModelo;

        this.busService.modificarBus(this.bus).subscribe( result => {
          if(result){
            let dialogRef = this.dialog.open(ModalConfirmacionCreacionComponent);
            dialogRef.afterClosed().subscribe(x => this.router.navigate(['/bus/list']))
          }else{
            let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
            dialogRef.afterClosed().subscribe(x => this.router.navigate(['/bus/list']))
          }
        })

      }
    }else{
      let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
      dialogRef.afterClosed().subscribe(x => this.router.navigate(['/bus/list']))
    }
  }
}
