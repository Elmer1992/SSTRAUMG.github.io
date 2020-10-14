import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Entradahoy } from './../models/entradahoy';

@Injectable({
  providedIn: 'root'
})

export class EntradahoyService {
  selectedPersona: Entradahoy = new Entradahoy();
  entradahoyList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
  getEntradahoy() {
    return this.entradahoyList = this.firebase.list('alumhorayfechahoyentrada');
  }


  insertEntradahoy(entradahoy: Entradahoy) {

    this.entradahoyList.push({
      identradahoy: entradahoy.identradahoy,
      nombreentrahoy: entradahoy.nombreentrahoy,
      fechaentrahoy: entradahoy.fechaentrahoy,
      horaentradahoy: entradahoy.horaentradahoy,
      
    });
  }

  updateEntradahoy(entradahoy: Entradahoy) {
    this.entradahoyList.update(entradahoy.$key, {
      identradahoy: entradahoy.identradahoy,
      nombreentrahoy: entradahoy.nombreentrahoy,
      fechaentrahoy: entradahoy.fechaentrahoy,
      horaentradahoy: entradahoy.horaentradahoy,
      
    });
  }

  deleteEntradahoy($key: string) {
    this.entradahoyList.remove($key);
  }
}
