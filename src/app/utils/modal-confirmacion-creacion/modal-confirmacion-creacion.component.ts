import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-confirmacion-creacion',
  templateUrl: './modal-confirmacion-creacion.component.html',
  styleUrls: ['./modal-confirmacion-creacion.component.css']
})
export class ModalConfirmacionCreacionComponent {
  constructor(public dialogRef: MatDialogRef<ModalConfirmacionCreacionComponent>) { }

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}
