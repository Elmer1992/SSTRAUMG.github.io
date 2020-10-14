import { Component, OnInit } from '@angular/core';
import { SugAlum } from './../../models/sug-alum';
import{SugAlumService} from '../../services/sug-alum.service';

@Component({
  selector: 'app-sug-alum',
  templateUrl: './sug-alum.component.html',
  styleUrls: ['./sug-alum.component.css']
})
export class SugAlumComponent implements OnInit {
  alunotifList: SugAlum[];
  constructor(private alunotifService: SugAlumService,) { }

  ngOnInit(): void {
    this.alunotifService.getRegTer().snapshotChanges().subscribe(item => 
      {this.alunotifList = []; item.forEach( element => 
        { let x =element.payload.toJSON(); x["$key"] = element.key; this.alunotifList.push(x as SugAlum)});
        /*this.toastr.success('Se ha recibido una sugerencia de un alumno','Notificaion recibida')*/});
    
  }
  
  onDelete($key : string){
    if(confirm('Estas segur@ de querer eliminarlo')){
    this.alunotifService.deleteRegTer($key);
   // this.toastr.error('El formulario se borro correctamente','Operación realizada');
    }
  }

}
