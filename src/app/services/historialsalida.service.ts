import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Hitorialsalida } from './../models/hitorialsalida';

@Injectable({
  providedIn: 'root'
})
export class HistorialsalidaService {
  selectedHitorialsalida: Hitorialsalida = new Hitorialsalida();
  HitorialsalidaList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }
 
  getSalidahoy() {
    return this. HitorialsalidaList = this.firebase.list('historialalumhorayfechahoysalida');
  }
}
