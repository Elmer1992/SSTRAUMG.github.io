import { Component, OnInit } from '@angular/core';
import { Inscripcion} from '../../models/inscripcion';
import { InscripcionService } from '../../services/inscripcion.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listinscripcion',
  templateUrl: './listinscripcion.component.html',
  styleUrls: ['./listinscripcion.component.css']
})
export class ListinscripcionComponent implements OnInit {

  personaList: Inscripcion[];
  constructor(public personaService: InscripcionService) { }

  ngOnInit(): void {
  }
  onSubmit(personaForm: NgForm) {

    this.personaService.getPersona();

    if (personaForm.value.$keyRegistro == null) {
      this.personaService.insertPersona(personaForm.value);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Creado con exito!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      this.personaService.updatePersona(personaForm.value);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Modificado con exito!',
        showConfirmButton: false,
        timer: 1500
      })

    }

  }
  resetForm(regterForm?: NgForm){
    
    if(regterForm != null)
    regterForm.reset();
    this.personaService.selectedPersona = new Inscripcion();
    Swal.fire({
      icon: 'success',
    position: 'center',
    title: 'Formulario limpio',
    text: 'llene todos los campos',
    timer: 1500,
    showConfirmButton: false,
    })
  }

}
