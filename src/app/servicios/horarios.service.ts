import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  horario: any[];
  constructor(private baseDatos: AngularFirestore) { }
  getHorarios(): Observable<any> {
    return this.baseDatos.collection('horarios').valueChanges();
  }
  getHorario() {
    return this.horario;
  }
  recibirHorario(horario) {
    this.horario = horario;
  }
  guardarHorario(datos) {
    return this.baseDatos.collection('horarios').add(datos);
  }
}
