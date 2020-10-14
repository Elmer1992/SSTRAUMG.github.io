import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { SugAlum } from './../models/sug-alum';

@Injectable()
export class SugAlumService {
  SugAlumlist : AngularFireList<any>;
  selecteAlunotif: SugAlum = new SugAlum();

  constructor(private firebase : AngularFireDatabase) { }
  getRegTer() {
    return this.SugAlumlist = this.firebase.list('sugerencias');
   }
   
   insertRegTer(sugalum: SugAlum) {
   this.SugAlumlist.push({
     nombre: sugalum.nombre,
     grado: sugalum.grado,
     fecha: sugalum.fecha,
     inportancia: sugalum.inportancia,
     sugerencia: sugalum.sugerencia,
     
   })
   
   }
   updateRegTer(sugalum: SugAlum){
     this.SugAlumlist.update(sugalum.$key, {
      nombre: sugalum.nombre,
      grado: sugalum.grado,
      fecha: sugalum.fecha,
      inportancia: sugalum.inportancia,
      sugerencia: sugalum.sugerencia,
     })
   
     
   
     }
     deleteRegTer($key: string){
       this.SugAlumlist.remove($key);
   }

}
