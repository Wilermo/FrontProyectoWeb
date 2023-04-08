import {Component, OnInit} from '@angular/core';
import {BusService} from "../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EstacionService} from "../../shared/estacion.service";
import {Estacion} from "../../model/estacion";

@Component({
  selector: 'app-estacion-list',
  templateUrl: './estacion-list.component.html',
  styleUrls: ['./estacion-list.component.css']
})
export class EstacionListComponent implements OnInit{

  constructor(private estacionService: EstacionService,
              private route: ActivatedRoute,
              private router: Router) { }

  estaciones:  Estacion [] | undefined;

  ngOnInit(): void {
    this.estacionService.findAll().subscribe(estaciones => this.estaciones = estaciones);
  }


  addEstacion() {
    this.router.navigate(['/estacion/add']);
  }
}
