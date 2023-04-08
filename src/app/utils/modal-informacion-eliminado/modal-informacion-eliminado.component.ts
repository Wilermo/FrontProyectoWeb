import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-informacion-eliminado',
  templateUrl: './modal-informacion-eliminado.component.html',
  styleUrls: ['./modal-informacion-eliminado.component.css']
})
export class ModalInformacionEliminadoComponent {
  constructor(public dialogRef: MatDialogRef<ModalInformacionEliminadoComponent>) { }

  cerrar():void {
    this.dialogRef.close(true);
  }
}
