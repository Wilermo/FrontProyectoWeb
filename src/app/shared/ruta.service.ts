import { Injectable } from '@angular/core';
import {Bus} from "../model/bus";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ruta} from "../model/ruta";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Ruta[]>(`http://localhost:8080/ruta/list`);
  }

  findById(id: number) : Observable<Ruta>{
    return this.http.get<Ruta>(`http://localhost:8080/ruta/view/${id}`);
  }

  delete(id: number | undefined): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:8080/ruta/delete/${id}`);
  }

  guardarRuta(ruta: Ruta) : Observable<Ruta>{
    return this.http.post<Ruta>(`http://localhost:8080/ruta/add`,ruta,this.httpOptions);
  }
}
