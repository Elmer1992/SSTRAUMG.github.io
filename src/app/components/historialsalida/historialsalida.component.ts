import { Component, OnInit } from '@angular/core';
import { Hitorialsalida } from '../../models/hitorialsalida';
import { HistorialsalidaService } from '../../services/historialsalida.service';
import Swal from 'sweetalert2';
import { Salidahoy } from '../../models/salidahoy';
import { SalidahoyService } from '../../services/salidahoy.service';


@Component({
  selector: 'app-historialsalida',
  templateUrl: './historialsalida.component.html',
  styleUrls: ['./historialsalida.component.css']
})
export class HistorialsalidaComponent implements OnInit {
  entradahoyList: Hitorialsalida[];
  salidahoyList: Salidahoy[];
  buscar: string;

  constructor(private EntradahoyService: HistorialsalidaService , private SalidahoyService : SalidahoyService) { }

  ngOnInit(): void {
  }
  consultaAlumno() {
    this.EntradahoyService.getSalidahoy().snapshotChanges().subscribe(item => {
      this.entradahoyList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.entradahoyList.push(x as Hitorialsalida);
      });


      this.entradahoyList = this.entradahoyList.filter(data => {
        return data.idsalida.toString().trim() === this.buscar;
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
