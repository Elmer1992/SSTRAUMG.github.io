import { Component, OnInit } from '@angular/core';
import { SituaAlum } from './../../models/situa-alum';
import{SituaAlumService} from '../../services/situa-alum.service';


@Component({
  selector: 'app-situa-alum',
  templateUrl: './situa-alum.component.html',
  styleUrls: ['./situa-alum.component.css']
})
export class SituaAlumComponent implements OnInit {
  alusituaList: SituaAlum[];
  constructor(private alusituaService: SituaAlumService,) { }
// SituaAlumlist
  ngOnInit(): void {
    this.alusituaService.getRegTer().snapshotChanges().subscribe(item => 
      {this.alusituaList = []; item.forEach( element => 
        { let x =element.payload.toJSON(); x["$key"] = element.key; this.alusituaList.push(x as SituaAlum)});
        /*this.toastr.success('Se ha recibido una situacion de un alumno','Notificaion recibida')*/});
    
  }
  
  onDelete($key : string){
    if(confirm('Estas segur@ de querer eliminarlo')){
    this.alusituaService.deleteRegTer($key);
    //this.toastr.error('El formulario se borro correctamente','Operación realizada');
    }
  }

}
