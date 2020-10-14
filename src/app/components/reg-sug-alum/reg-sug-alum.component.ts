import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { SugAlum } from './../../models/sug-alum';
import{SugAlumService} from '../../services/sug-alum.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-reg-sug-alum',
  templateUrl: './reg-sug-alum.component.html',
  styleUrls: ['./reg-sug-alum.component.css']
})
export class RegSugAlumComponent implements OnInit {

  constructor(public SugAlumService: SugAlumService,) { }

  ngOnInit(): void {
    this.SugAlumService.getRegTer();
    this.resetForm();
    
    
  }
  onSubmit(regterForm: NgForm)
  {
    if(confirm('Estas segur@ de enviar el formulario')){
      this.SugAlumService.insertRegTer(regterForm.value);
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
    this.SugAlumService.selecteAlunotif = new  SugAlum();
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
