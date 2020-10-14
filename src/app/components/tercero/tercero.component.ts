import { Component, OnInit } from '@angular/core';
import { Tercero } from './../../models/tercero';
import{TerceroService} from '../../services/tercero.service';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent implements OnInit {
  regTerList: Tercero[];
  constructor(private regTerService: TerceroService,) { }

  ngOnInit(): void {
    this.regTerService.getRegTer().snapshotChanges().subscribe(item => 
      {this.regTerList = []; item.forEach( element => 
        { let x =element.payload.toJSON(); x["$key"] = element.key; this.regTerList.push(x as Tercero); 
        });/*this.toastr.success('Se ha recibido un formulario','Notificaion de padre de familia')*/});
        
  }
  
  onDelete($key : string){
    if(confirm('Estas segur@ de querer eliminarlo')){
      this.regTerService.deleteRegTer($key);
    //this.toastr.error('El formulario se borro correctamente','Operación realizada');
    }
  }

}
