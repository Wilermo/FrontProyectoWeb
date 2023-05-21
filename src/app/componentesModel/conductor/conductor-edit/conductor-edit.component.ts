import {Component, OnInit} from '@angular/core';
import {ConductorService} from "../../../shared/conductor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Conductor} from "../../../model/conductor";
import {switchMap} from "rxjs/operators";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {
  ModalConfirmacionCreacionComponent
} from "../../../utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component";

@Component({
  selector: 'app-conductor-edit',
  templateUrl: './conductor-edit.component.html',
  styleUrls: ['./conductor-edit.component.css']
})
export class ConductorEditComponent implements OnInit{
  constructor(private conductorService: ConductorService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }
  conductor: Conductor | undefined;
  nombreConductor: string | undefined;
  cedulaConductor: string | undefined;
  telefonoConductor: string | undefined;
  direccionConductor: string | undefined;

  ngOnInit() {
    this.route.paramMap.pipe(switchMap(params =>
      this.conductorService.findById(+params.get('id')!))).subscribe(conductor => this.conductor = conductor);
  }

  volver(){
    this.router.navigate(['/conductor/list']);
  }

  editar() {
    let nombre = this.nombreConductor;
    let cedula = this.cedulaConductor;
    let telefono = this.telefonoConductor;
    let direccion = this.direccionConductor;
    if (nombre != undefined && nombre != "" && cedula != undefined && cedula != "" && telefono != undefined && telefono != "" && direccion != undefined && direccion != ""){
      if(this.conductor!= undefined){
        this.conductor.nombre=nombre;
        this.conductor.cedula=cedula;
        this.conductor.direccion=direccion;
        this.conductor.telefono=telefono;
        this.conductorService.modificarConductor(this.conductor).subscribe(result=>{
          if(result){
            let dialogRef = this.dialog.open(ModalConfirmacionCreacionComponent);
            dialogRef.afterClosed().subscribe(x => this.router.navigate(['/conductor/list']))
          }else{
            let dialogRef =this.dialog.open(ModalInformacionErrorComponent);
            dialogRef.afterClosed().subscribe(x => this.router.navigate(['/conductor/list']))
          }
        })

      }
    }else{
      let dialogRef =this.dialog.open(ModalInformacionErrorComponent);
      dialogRef.afterClosed().subscribe(x => this.router.navigate(['/conductor/list']))

    }
  }
}
