import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Salidahoy } from './../models/salidahoy';

@Injectable({
  providedIn: 'root'
})
export class SalidahoyService {

  selectedPersona: Salidahoy = new Salidahoy();
  SalidahoyList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
  getSalidahoy() {
    return this.SalidahoyList = this.firebase.list('alumhorayfechahoysalida');
  }


  insertSalidahoy(salidahoy: Salidahoy) {

    this.SalidahoyList.push({
      idsalidahoy: salidahoy.idsalidahoy,
      nombresalidahoy: salidahoy.nombresalidahoy,
      fechasalidahoy: salidahoy.fechasalidahoy,
      horasalidahoy: salidahoy.horasalidahoy,
      
    });
  }

  updateSalidahoy(salidahoy: Salidahoy) {
    this.SalidahoyList.update(salidahoy.$key, {
      idsalidahoy: salidahoy.idsalidahoy,
      nombresalidahoy: salidahoy.nombresalidahoy,
      fechasalidahoy: salidahoy.fechasalidahoy,
      horasalidahoy: salidahoy.horasalidahoy,
      
    });
  }

  deleteSalidahoy($key: string) {
    this.SalidahoyList.remove($key);
  }

}
