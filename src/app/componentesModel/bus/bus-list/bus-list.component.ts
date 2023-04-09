import {Component, OnInit} from '@angular/core';
import {Bus} from "../../../model/bus";
import {BusService} from "../../../shared/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {
  ModalInformacionEliminadoComponent
} from "../../../utils/modal-informacion-eliminado/modal-informacion-eliminado.component";


@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css'],

})
export class BusListComponent implements OnInit{

  buses : Bus[] | undefined

  constructor(private busService: BusService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.busService.findAll().subscribe(buses => this.buses = buses);
  }


  verBus(bus:Bus){
    this.router.navigate(['/bus/view', bus.id]);
  }
  addBus(){
    this.router.navigate(['/bus/add']);
  }
  deleteBus(busSeleccionado : Bus){
    let dialogRef = this.dialog.open(ModalConfirmacionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if(this.busService.deleteById(busSeleccionado.id)){
          let dialogRef =this.dialog.open(ModalInformacionEliminadoComponent);
          dialogRef.afterClosed().subscribe(x => window.location.reload())
        }

      } else {
        // El usuario canceló la acción
      }
    })
  }
}
