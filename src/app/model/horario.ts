import {Ruta} from "./ruta";
import {Conductor} from "./conductor";
import {Bus} from "./bus";
import {DiasSemana} from "./diasSemana";


export class Horario {
  constructor(
    public id: number,
    public conductorHorario: string,
    public idConductorHorario:number | undefined,
    public busHorario: string,
    public diasSemana: DiasSemana,
    public horaInicioStr: string,
    public horaFinStr:string,
    public rutaHorario:string | undefined,
    public idRutaHorario:number | undefined
  ) {
  }
}
