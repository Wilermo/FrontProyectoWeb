import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Bus} from "../model/bus";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) { }

  findAll(): Observable<Bus[]> {
    return this.http.get<Bus[]>(`http://localhost:8080/bus/list`);
    //return of(Object.values(this.personDB));
  }

  findById(id: number) {
    return this.http.get<Bus>(`http://localhost:8080/bus/view/${id}`);
  }

  deleteById(id: number) {
    return this.http.get<Bus>(`http://localhost:8080/bus/delete/${id}`);
  }

  modificarBus(bus : Bus) : Observable<Bus> {
    return this.http.put<Bus>(`http://localhost:8080/bus/edit`,bus,this.httpOptions)
  }

  guardarBus(nuevoBus : Bus) : Observable<Bus>{
    console.log(nuevoBus);
    return this.http.post<Bus>('http://localhost:8080/bus/add',nuevoBus,this.httpOptions)
  }
}
