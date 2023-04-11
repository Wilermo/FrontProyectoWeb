import { Injectable } from '@angular/core';
import {Estacion} from "../model/estacion";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Conductor} from "../model/conductor";
import {Bus} from "../model/bus";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Conductor[]>(`http://localhost:8080/conductor/list`);
  }

  findById(id: number) {
    return this.http.get<Conductor>(`http://localhost:8080/bus/view/${id}`);
  }

  deleteById(id: number) {
    return this.http.get<Conductor>(`http://localhost:8080/bus/delete/${id}`);
    return false;
  }
  guardarConductor(conductorNuevo: Conductor):Observable<Conductor> {
    console.log(conductorNuevo);
    return this.http.post<Conductor>(`http://localhost:8080/estacion/add`,conductorNuevo,this.httpOptions)
  }
}
