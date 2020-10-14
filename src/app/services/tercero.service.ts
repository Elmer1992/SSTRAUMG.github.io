import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Tercero} from './../models/tercero';

@Injectable()

export class TerceroService {
  TerceroList : AngularFireList<any>;
  terceroServiceselected: Tercero = new Tercero();
  constructor(private firebase : AngularFireDatabase) { }
  
  getRegTer() {
    return this.TerceroList = this.firebase.list('terceros');
   }
   
   insertRegTer(tercero: Tercero) {
   this.TerceroList.push({
     nombre: tercero.nombre,
     dpi: tercero.dpi,
     parentesco: tercero.parentesco,
     alumno: tercero.alumno,
     grado: tercero.grado,
     fecha: tercero.fecha,
   })
   
   }
   updateRegTer(tercero: Tercero){
     this.TerceroList.update(tercero.$key, {
       nombre: tercero.nombre,
     dpi: tercero.dpi,
     parentesco: tercero.parentesco,
     alumno: tercero.alumno,
     grado: tercero.grado,
     fecha: tercero.fecha,
     })
   
     
   
     }
     deleteRegTer($key: string){
       this.TerceroList.remove($key);
   }
}
