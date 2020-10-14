import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { NotifPadre } from './../models/notif-padre';

@Injectable()
export class NotifPadreService {
  //SugAlumlist
  NotifPadrelist : AngularFireList<any>;
  selectNotifPadre: NotifPadre = new NotifPadre();
  constructor(private firebase : AngularFireDatabase) { }
  getRegTer() {
    return this.NotifPadrelist = this.firebase.list('notaspadres');
   }
   
   insertRegTer(notifpadre: NotifPadre) {
   this.NotifPadrelist.push({
     nombre: notifpadre.nombre,
     nombrealumno: notifpadre.nombrealumno,
     grado: notifpadre.grado,
     fecha: notifpadre.fecha,
     inportancia: notifpadre.inportancia,
     nota: notifpadre.nota,
     tipo: notifpadre.tipo,
     
   })
   
   }
   updateRegTer(notifpadre: NotifPadre){
     this.NotifPadrelist.update(notifpadre.$key, {
      nombre: notifpadre.nombre,
      nombrealumno: notifpadre.nombrealumno,
     grado: notifpadre.grado,
     fecha: notifpadre.fecha,
     inportancia: notifpadre.inportancia,
     nota: notifpadre.nota,
     tipo: notifpadre.tipo,
     })
   
     
   
     }
     deleteRegTer($key: string){
       this.NotifPadrelist.remove($key);
   }
}
