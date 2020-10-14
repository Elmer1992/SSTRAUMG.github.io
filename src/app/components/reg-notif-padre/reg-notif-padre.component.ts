import { Component, OnInit } from '@angular/core';
import { NotifPadre } from './../../models/notif-padre';
import{NotifPadreService} from '../../services/notif-padre.service';

@Component({
  selector: 'app-reg-notif-padre',
  templateUrl: './reg-notif-padre.component.html',
  styleUrls: ['./reg-notif-padre.component.css']
})
export class RegNotifPadreComponent implements OnInit {
  regTerList: NotifPadre[];
  constructor(private regTerService: NotifPadreService) { }

  ngOnInit(): void {
    this.regTerService.getRegTer().snapshotChanges().subscribe(item => 
      {this.regTerList = []; item.forEach( element => 
        { let x =element.payload.toJSON(); x["$key"] = element.key; this.regTerList.push(x as NotifPadre ); 
        });/*this.toastr.success('Se ha recibido un formulario','Notificaion de padre de familia')*/});
        
  }
  
  

}
