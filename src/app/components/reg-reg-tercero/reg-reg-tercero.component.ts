import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { Tercero } from './../../models/tercero';
import{TerceroService} from '../../services/tercero.service';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-reg-reg-tercero',
  templateUrl: './reg-reg-tercero.component.html',
  styleUrls: ['./reg-reg-tercero.component.css']
})
export class RegRegTerceroComponent implements OnInit {

  constructor(
    public TerceroService: TerceroService,
    
  ) { }

  ngOnInit(): void {
    this.TerceroService.getRegTer();
    this.resetForm();
    
    
  }
  onSubmit(regterForm: NgForm)
  {
    if(confirm('Estas segur@ de enviar el formulario')){
      this.TerceroService.insertRegTer(regterForm.value);
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
    this.TerceroService.terceroServiceselected = new Tercero();
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
