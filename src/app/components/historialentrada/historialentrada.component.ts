import { Component, OnInit } from '@angular/core';
import { Hitorialentrada } from '../../models/hitorialentrada';
import { HistorialentradaService } from '../../services/historialentrada.service';
import Swal from 'sweetalert2';
import { Salidahoy } from '../../models/salidahoy';
import { SalidahoyService } from '../../services/salidahoy.service';

@Component({
  selector: 'app-historialentrada',
  templateUrl: './historialentrada.component.html',
  styleUrls: ['./historialentrada.component.css']
})
export class HistorialentradaComponent implements OnInit {
  entradahoyList: Hitorialentrada[];
  salidahoyList: Salidahoy[];
  buscar: string;
  constructor(private EntradahoyService: HistorialentradaService, private SalidahoyService : SalidahoyService) { }

  ngOnInit(): void {
  }
  consultaAlumno() {
    this.EntradahoyService.getHitorialentrada().snapshotChanges().subscribe(item => {
      this.entradahoyList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.entradahoyList.push(x as Hitorialentrada);
      });


      this.entradahoyList = this.entradahoyList.filter(data => {
        return data.identrada.toString().trim() === this.buscar;
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
