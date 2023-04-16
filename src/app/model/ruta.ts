import {Estacion} from "./estacion";
import {Horario} from "./horario";

export class Ruta {

  constructor(
    public id: number,
    public nombreRuta: string,
    public estaciones: string[]|undefined,

  ) {
  }
}
