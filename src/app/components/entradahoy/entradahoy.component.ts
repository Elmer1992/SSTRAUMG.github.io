import { Component, OnInit } from '@angular/core';
import { Entradahoy } from '../../models/entradahoy';
import { EntradahoyService } from '../../services/entradahoy.service';
import Swal from 'sweetalert2'; 
import { Salidahoy } from '../../models/salidahoy';
import { SalidahoyService } from '../../services/salidahoy.service';

@Component({
  selector: 'app-entradahoy',
  templateUrl: './entradahoy.component.html',
  styleUrls: ['./entradahoy.component.css']
})

export class EntradahoyComponent implements OnInit {
  entradahoyList: Entradahoy[];
  salidahoyList: Salidahoy[];
  buscar: string;
  constructor(private EntradahoyService: EntradahoyService, private SalidahoyService : SalidahoyService ) { }

  ngOnInit(): void {
  }
  consultaAlumno() {
    this.EntradahoyService.getEntradahoy().snapshotChanges().subscribe(item => {
      this.entradahoyList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.entradahoyList.push(x as Entradahoy);
      });


      this.entradahoyList = this.entradahoyList.filter(data => {
        return data.identradahoy.toString().trim() === this.buscar;
      })

      if (this.entradahoyList.length === 0) {

       

        Swal.fire({
        icon: 'error',
        position: 'center',
        title: 'ID incorrecto',
        timer: 1500,
        showConfirmButton: false,
        })
      } else {
        Swal.fire({
          icon: 'success',
        position: 'center',
        title: 'ID correcto',
        text: 'Asistencia sincronizada',
        timer: 1500,
        showConfirmButton: false,
        })
      }

    });
  }


  consultaAlumnosalida() {
    this.SalidahoyService.getSalidahoy().snapshotChanges().subscribe(item => {
      this.salidahoyList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.salidahoyList.push(x as Salidahoy );
      });


      this.salidahoyList = this.salidahoyList.filter(data => {
        return data.idsalidahoy.toString().trim() === this.buscar;
      })

      
    });
  }

}
