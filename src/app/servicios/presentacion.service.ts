import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {

  constructor(private baseDatos: AngularFirestore) { }
  getInformacion(): Observable<any[]> {
    return this.baseDatos.collection('informacion').valueChanges();
  }
}
