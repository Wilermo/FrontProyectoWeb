import {Component, OnInit} from '@angular/core';
import {BusService} from "../../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RutaService} from "../../../shared/ruta.service";
import {Ruta} from "../../../model/ruta";

@Component({
  selector: 'app-ruta-list',
  templateUrl: './ruta-list.component.html',
  styleUrls: ['./ruta-list.component.css']
})
export class RutaListComponent implements  OnInit{

  constructor(private rutaService: RutaService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  rutas : Ruta[] |undefined
  ngOnInit() {
    this.rutaService.findAll().subscribe(rutas => this.rutas = rutas);
  }

  addRuta() {

  }

  verEstaciones(ruta: Ruta) {
    this.router.navigate(['/ruta/view', ruta.id]);
  }

  editRuta(ruta: Ruta) {

  }

  deleteRuta(ruta: Ruta) {

  }
}
