import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { SituaAlum } from './../../models/situa-alum';
import{SituaAlumService} from '../../services/situa-alum.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-reg-situa-alum',
  templateUrl: './reg-situa-alum.component.html',
  styleUrls: ['./reg-situa-alum.component.css']
})
export class RegSituaAlumComponent implements OnInit {

  constructor(public SituaAlumService: SituaAlumService,) { }

  ngOnInit(): void {
    this.SituaAlumService.getRegTer();
    this.resetForm();
    
    
  }
  onSubmit(regterForm: NgForm)
  {
    if(confirm('Estas segur@ de enviar el formulario')){
      this.SituaAlumService.insertRegTer(regterForm.value);
      this.resetForm(regterForm);
      Swal.fire({
        icon: 'success',
      position: 'center',
      title: 'Formulario enviado',
      text: 'Formulario enviado correctamente',
      timer: 1500,
      showConfirmButton: false,
      })
    }
    
    
  }
  resetForm(regterForm?: NgForm){
    
    if(regterForm != null)
    regterForm.reset();
    this.SituaAlumService.selecteAlusitua = new SituaAlum();
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
