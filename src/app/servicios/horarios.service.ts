import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  horario: any[];
  constructor() { }
  getHorario() {
    return this.horario;
  }
  recibirHorario(horario) {
    this.horario = horario;
  }
}
