import {Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {Estacion} from "../../../model/estacion";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {EstacionService} from "../../../shared/estacion.service";
import {MatDialog} from "@angular/material/dialog";
import {
  ModalInformacionEliminadoComponent
} from "../../../utils/modal-informacion-eliminado/modal-informacion-eliminado.component";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";

@Component({
  selector: 'app-estacion-edit',
  templateUrl: './estacion-edit.component.html',
  styleUrls: ['./estacion-edit.component.css']
})
export class EstacionEditComponent implements OnInit {

  constructor(private estacionService: EstacionService,private route: ActivatedRoute,private router: Router, public dialog: MatDialog) {

  }
  estacion : Estacion | undefined;
  entradaTexto : string | undefined;

  entradaMap : number | undefined;

  ngOnInit() {
    this.route.paramMap.pipe(switchMap(params =>
      this.estacionService.findById(+params.get('id')!))).subscribe(estacion => this.estacion = estacion);
  }

  volver(){
    this.router.navigate(['/estacion/list']);
  }

  editar() {
    let inputValue = this.entradaTexto;
    if(inputValue!= undefined && inputValue!=""){

      if(this.estacion!= undefined){
        this.estacion.nombre=inputValue;

        this.estacionService.modificarEstacion(this.estacion).subscribe(result=>{
          if(result){
            let dialogRef = this.dialog.open(ModalConfirmacionComponent);
            dialogRef.afterClosed().subscribe(x => this.router.navigate(['/estacion/list']))
          }else{
            let dialogRef =this.dialog.open(ModalInformacionErrorComponent);
            dialogRef.afterClosed().subscribe(x => this.router.navigate(['/estacion/list']))
          }
        })

        }
    }else{

      let dialogRef =this.dialog.open(ModalInformacionErrorComponent);
      dialogRef.afterClosed().subscribe(x => this.router.navigate(['/estacion/list']))

    }
  }
}
