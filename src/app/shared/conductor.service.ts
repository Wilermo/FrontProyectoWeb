import { Injectable } from '@angular/core';
import {Estacion} from "../model/estacion";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Conductor} from "../model/conductor";

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
}
