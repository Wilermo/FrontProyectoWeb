import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-informacion-error',
  templateUrl: './modal-informacion-error.component.html',
  styleUrls: ['./modal-informacion-error.component.css']
})
export class ModalInformacionErrorComponent {
  constructor(public dialogRef: MatDialogRef<ModalInformacionErrorComponent>) { }

  cerrar():void {
    this.dialogRef.close(true);
  }
}
