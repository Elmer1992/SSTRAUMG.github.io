import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { NotifPadre } from './../../models/notif-padre';
import{NotifPadreService} from '../../services/notif-padre.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-notif-padre',
  templateUrl: './notif-padre.component.html',
  styleUrls: ['./notif-padre.component.css']
})
export class NotifPadreComponent implements OnInit {

  constructor(public NotifPadreService: NotifPadreService,) { }

  ngOnInit(): void {
    this.NotifPadreService.getRegTer();
    this.resetForm();
    
    
  }
  onSubmit(regterForm: NgForm)
  {
    
    if(confirm('Estas segur@ de enviar el formulario')){
      this.NotifPadreService.insertRegTer(regterForm.value);
      this.resetForm(regterForm);
      Swal.fire({
        icon: 'success',
        position: 'center',
        title: 'Enviado',
        timer: 2000,
        showConfirmButton: false,
      })
      
    }
  
    
  }
  resetForm(regterForm?: NgForm){
    
    if(regterForm != null)
    regterForm.reset();
    this.NotifPadreService.selectNotifPadre = new NotifPadre();
    Swal.fire({
      icon: 'success',
      position: 'center',
      title: 'Campos limpios',
      text:'Llene todo los campos',
      
      timer: 1500,
      showConfirmButton: false,
    })
    
  }

}
