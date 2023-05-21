import {Ruta} from "./ruta";

export class Estacion {
  constructor(
    public id: number,
    public nombre: string,
    public mapKey: number | undefined
  ) {
  }
}
