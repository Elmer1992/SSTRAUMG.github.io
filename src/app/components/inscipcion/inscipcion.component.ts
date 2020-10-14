import { Component, OnInit } from '@angular/core';
import { Inscripcion} from '../../models/inscripcion';
import { InscripcionService } from '../../services/inscripcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscipcion',
  templateUrl: './inscipcion.component.html',
  styleUrls: ['./inscipcion.component.css']
})
export class InscipcionComponent implements OnInit {
  personaList: Inscripcion[];

  buscar: string;
  constructor(private personaService: InscripcionService) { }

  ngOnInit() {
    this.MostrarPersonas();
  }



  MostrarPersonas() {
    this.personaService.getPersona().snapshotChanges().subscribe(item => {
      this.personaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.personaList.push(x as Inscripcion);
      });
    });
  }

  consulPersona() {

    this.personaService.getPersona().snapshotChanges().subscribe(item => {
      this.personaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.personaList.push(x as Inscripcion);
      });


      this.personaList = this.personaList.filter(data => {
        return data.num_identificacion.toString().trim() === this.buscar;
      })

      if (this.personaList.length === 0) {

        this.MostrarPersonas();

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Dato no encontrado',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire({
          position: 'top-end',
        icon: 'success',
          title: 'Dato encontrado!',
          showConfirmButton: false,
          timer: 1500
        })
      }

    });

  }



  onEdit(persona: Inscripcion) {
    this.personaService.selectedPersona = persona;
  }


  onDelete($key: string) {
    this.personaService.deletePersona($key);
  }

}
