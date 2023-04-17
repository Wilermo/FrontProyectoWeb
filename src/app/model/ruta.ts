import {Estacion} from "./estacion";
import {Horario} from "./horario";

export class Ruta {

  constructor(
    public id: number|undefined,
    public nombreRuta: string|undefined,
    public estaciones: string[]|undefined,

  ) {
  }

  ruta : Ruta|undefined;
}
