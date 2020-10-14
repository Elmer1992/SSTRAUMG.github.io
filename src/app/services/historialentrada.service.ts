import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Hitorialentrada } from './../models/hitorialentrada';

@Injectable({
  providedIn: 'root'
})
export class HistorialentradaService {

  selectedHitorialentrada: Hitorialentrada = new Hitorialentrada();
  HitorialentradaList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
  getHitorialentrada() {
    return this.HitorialentradaList = this.firebase.list('historialalumhorayfechahoyentrada');
  }
}
