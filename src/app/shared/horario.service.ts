import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Horario} from "../model/horario";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  findAll(): Observable<Horario[]>{
    return this.http.get<Horario[]>(`http://localhost:8080/horario/list`)
  }

  guardarHorario(horario: Horario) : Observable<Horario>{
    return this.http.post<Horario>(`http://localhost:8080/horario/add`,horario,this.httpOptions)
  }

  findById(id: number): Observable<Horario> {
    return this.http.get<Horario>(`http://localhost:8080/horario/view/${id}`,this.httpOptions)
  }
}
