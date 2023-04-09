import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Bus} from "../model/bus";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Estacion} from "../model/estacion";

@Injectable({
  providedIn: 'root'
})
export class EstacionService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  findAll(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(`http://localhost:8080/estacion/list`);
  }

  deleteById(id:number){
    return this.http.delete (`http://localhost:8080/estacion/delete/${id}`)
  }

  findById(id: number): Observable<Estacion> {
    return this.http.get<Estacion>(`http://localhost:8080/estacion/view/${id}`);
  }

  modificarEstacion(estacion: Estacion) :Observable<Estacion>  {
    return this.http.put<Estacion>(`http://localhost:8080/estacion/edit`,estacion,this.httpOptions)
  }
}
