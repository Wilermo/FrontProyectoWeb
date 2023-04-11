import {Component, OnInit} from '@angular/core';
import {EstacionService} from "../../../shared/estacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RutaService} from "../../../shared/ruta.service";

@Component({
  selector: 'app-ruta-add',
  templateUrl: './ruta-add.component.html',
  styleUrls: ['./ruta-add.component.css']
})
export class RutaAddComponent{
  entradaTexto: any;

  constructor(private rutaService: RutaService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
  ) {
  }


  volver() {
    this.router.navigate(['/estacion/list']);
  }

  guardar() {

  }
}
