import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { SituaAlum} from './../models/situa-alum';

@Injectable()
  
export class SituaAlumService {
  SituaAlumlist : AngularFireList<any>;
  selecteAlusitua: SituaAlum = new SituaAlum();
  constructor(private firebase : AngularFireDatabase) { }
  getRegTer() {
    return this.SituaAlumlist = this.firebase.list('situacion');
   }
   
   insertRegTer(situaalum: SituaAlum) {
   this.SituaAlumlist.push({
     nombre: situaalum.nombre,
     grado: situaalum.grado,
     fecha: situaalum.fecha,
     inportancia: situaalum.inportancia,
     situacion: situaalum.situacion,
     
   })
   
   }
   updateRegTer(situaalum: SituaAlum){
     this.SituaAlumlist.update(situaalum.$key, {
      nombre: situaalum.nombre,
      grado: situaalum.grado,
      fecha: situaalum.fecha,
      inportancia: situaalum.inportancia,
      situacion: situaalum.situacion,
     })
   
     
   
     }
     deleteRegTer($key: string){
       this.SituaAlumlist.remove($key);
   }
}
