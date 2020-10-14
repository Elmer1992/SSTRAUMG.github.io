import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  selectedPersona: Inscripcion = new Inscripcion();
  personaList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
  getPersona() {
    return this.personaList = this.firebase.list('infoalumno');
  }


  insertPersona(persona: Inscripcion) {

    this.personaList.push({
      num_identificacion: persona.num_identificacion,
      nombre: persona.nombre,
      apellido: persona.apellido,
      telefono: persona.telefono,
      direccion: persona.direccion
    });
  }

  updatePersona(persona: Inscripcion) {
    this.personaList.update(persona.$keyRegistro, {
      num_identificacion: persona.num_identificacion,
      nombre: persona.nombre,
      apellido: persona.apellido,
      telefono: persona.telefono,
      direccion: persona.direccion
    });
  }

  deletePersona($keyRegistro: string) {
    this.personaList.remove($keyRegistro);
  }

}
