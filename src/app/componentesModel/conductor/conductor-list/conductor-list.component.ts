import {Component, OnInit} from '@angular/core';
import {BusService} from "../../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Conductor} from "../../../model/conductor";
import {ConductorService} from "../../../shared/conductor.service";

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit{

  conductores: Conductor[] | undefined;
  constructor(private conductorService: ConductorService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.conductorService.findAll().subscribe(conductores => this.conductores = conductores);
  }
  addConductor() {

  }

  verConductor(conductor: Conductor) {
    this.router.navigate(['/conductor/view', conductor.id]);
  }

  editarConductor(conductor: Conductor) {

  }

  eliminarConductor(conductor: Conductor) {

  }
}
