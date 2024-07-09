import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZevraForPigsService {

  private cantante: string = "";

  constructor() { }

  setStringValue(value: string) {
    this.cantante = value;
    console.log("Valor cambiado a: ", this.cantante);
  }

  getStringValue() {
    return this.cantante;
    console.log("Valor devuelto: ", this.cantante);
  }
}
