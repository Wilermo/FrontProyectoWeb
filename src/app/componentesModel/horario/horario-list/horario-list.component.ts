import {Component, OnInit} from '@angular/core';
import {Horario} from "../../../model/horario";
import {ActivatedRoute, Router} from "@angular/router";
import {HorarioService} from "../../../shared/horario.service";
import {ModalConfirmacionComponent} from "../../../utils/modal-confirmacion/modal-confirmacion.component";
import {
  ModalInformacionEliminadoComponent
} from "../../../utils/modal-informacion-eliminado/modal-informacion-eliminado.component";
import {ModalInformacionErrorComponent} from "../../../utils/modal-informacion-error/modal-informacion-error.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-horario-list',
  templateUrl: './horario-list.component.html',
  styleUrls: ['./horario-list.component.css']
})
export class HorarioListComponent implements OnInit{
  horarios : Horario[] | undefined

  constructor(private horarioService: HorarioService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.horarioService.findAll().subscribe(horarios => this.horarios = horarios);
  }

  addHorario() {
    this.router.navigate(['/horario/add']);
  }

  viewHorario(horario: Horario) {
    this.router.navigate(['/horario/view',horario.id]);
  }

  editHorario(horario: Horario) {
    this.router.navigate(['/horario/edit',horario.id]);
  }

  deleteHorario(horario: Horario) {
    let dialogRef = this.dialog.open(ModalConfirmacionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.horarioService.delete(horario?.id).subscribe(result => {
          if (result) {
            let dialogRef = this.dialog.open(ModalInformacionEliminadoComponent);
            dialogRef.afterClosed().subscribe(x => window.location.reload())
          }else{
            let dialogRef = this.dialog.open(ModalInformacionErrorComponent);
            dialogRef.afterClosed().subscribe(x => window.location.reload())
          }
        })

      } else {
        // El usuario canceló la acción
      }
    })
  }
}
