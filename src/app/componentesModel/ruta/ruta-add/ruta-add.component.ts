import {Component, OnInit} from '@angular/core';
import {EstacionService} from "../../../shared/estacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RutaService} from "../../../shared/ruta.service";
import {Estacion} from "../../../model/estacion";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {Ruta} from "../../../model/ruta";
import {
  ModalInformacionEliminadoComponent
} from "../../../utils/modal-informacion-eliminado/modal-informacion-eliminado.component";
import {
  ModalConfirmacionCreacionComponent
} from "../../../utils/modal-confirmacion-creacion/modal-confirmacion-creacion.component";

@Component({
  selector: 'app-ruta-add',
  templateUrl: './ruta-add.component.html',
  styleUrls: ['./ruta-add.component.css']
})
export class RutaAddComponent implements OnInit{
  entradaTexto: string | undefined;



  constructor(private rutaService: RutaService,
              private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }

  estaciones : Estacion[]|undefined
  form: HTMLFormElement|undefined;
  estacionesSeleccionadas: string[] = [];



  ngOnInit() {
    this.estacionService.findAll().subscribe(result=>this.estaciones=result)
  }

  volver() {
    this.router.navigate(['/ruta/list']);
  }


  onCheckboxChange(nombre: string, event: any) {
    if(event.target.checked){
      this.estacionesSeleccionadas.push(nombre);
    }else{
      const index = this.estacionesSeleccionadas.indexOf(nombre);
      if (index !== -1) {
        this.estacionesSeleccionadas.splice(index, 1);
      }
    }
  }

  guardar() {
    let inputValue = this.entradaTexto;
    if (inputValue != undefined && inputValue != "") {

      let formData = new FormData(this.form);
      console.log("HOLA")
      for(var pair of formData.entries())
      {
        //estacionesAniadir.push(pair[1]);
        console.log(pair[0]+ ' : '+ pair[1]);
      }

      let ruta = new Ruta(-1, inputValue,this.estacionesSeleccionadas);

      let dialogRef = this.dialog.open(ModalConfirmacionCreacionComponent);
      dialogRef.afterClosed().subscribe(result =>{
        if(result){
          this.rutaService.guardarRuta(ruta).subscribe(result=>{
            if(result.nombreRuta == inputValue){
                this.router.navigate(["ruta/list"])
            }else{
              let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
              dialogRef.afterClosed().subscribe(x => this.router.navigate(['/ruta/list']))
            }
          })
        }else{
          let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
          dialogRef.afterClosed().subscribe(x => this.router.navigate(['/ruta/list']))
        }
      })

    } else {
      let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
      dialogRef.afterClosed().subscribe(x => this.router.navigate(['/ruta/list']))

    }
  }

  agregarEstacion() {

  }
}
