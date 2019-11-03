import {Component, DoCheck, OnInit} from '@angular/core';
import {Presentacion} from "../interfaces/presentacion";
import {PresentacionService} from "../servicios/presentacion.service";
import {HorariosService} from "../servicios/horarios.service";
import {Horario} from "../interfaces/horario";
import {Horarios} from "../interfaces/horarios";

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  informacion: Presentacion;
  horarios: Horarios[];
  constructor(private presentService: PresentacionService, private horarioService: HorariosService) {
    this.horarios = [];
  }

  ngOnInit() {
    this.presentService.getInformacion().subscribe((res) => {
      this.informacion = res[0];
      if (this.informacion.id_laboratorio !== null) {
        this.horarioService.getHorarios().subscribe((res) => {
          res.map((horario) => {
            if(this.informacion.id_horario === horario.id_horario) {
              this.horarios = this.getDataRecordsArrayFromCSVFile(horario.materias, horario.cabeceras.length);
            }
          });
        });
      }

    });
  }
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let horario: Horario = new Horario();
        horario.hora = curruntRecord[0].trim();
        horario.lunes = curruntRecord[1].trim();
        horario.martes = curruntRecord[2].trim();
        horario.miercoles = curruntRecord[3].trim();
        horario.jueves = curruntRecord[4].trim();
        horario.viernes = curruntRecord[5].trim();
        horario.sabado = curruntRecord[6].trim();
        csvArr.push(horario);
      }
    }
    return csvArr;
  }

}
