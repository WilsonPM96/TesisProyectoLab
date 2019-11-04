import {Component, OnInit, ViewChild} from '@angular/core';
import {Horario} from "../interfaces/horario";
import {HorariosService} from "../servicios/horarios.service";
import {Presentacion} from "../interfaces/presentacion";
import {PresentacionService} from "../servicios/presentacion.service";

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {
  laboratorios: Presentacion[];
  laboratorioSeleccionado: Presentacion;
  nuevo: boolean;
  public records: any[] = [];
  constructor(private horarioService: HorariosService, private presentService: PresentacionService) {
    this.laboratorios = [];
    this.laboratorioSeleccionado = {};
  }

  ngOnInit() {
    this.nuevo = false;
    this.presentService.getInformacion().subscribe((res) => {
      this.laboratorios = res;
      this.laboratorioSeleccionado = this.laboratorios[0];
    });
  }
  ingresarNuevo() {
    this.nuevo = true;
    this.laboratorioSeleccionado = {
      id_laboratorio: '2', nombre_lab: '', imagen_lab: '', //id dinamico
      num_lab: '', id_horario: '2'
    };
  }
  uploadListener($event: any): void {

    let files = $event.srcElement.files;
    console.log(files);
    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      console.log(reader);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        let datos = {id_horario: 1, materias: csvRecordsArray, cabeceras: headersRow}; //hacer id dinamico
        this.horarioService.guardarHorario(datos);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        this.horarioService.recibirHorario(this.records);
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
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

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }
  fileReset() {
    this.records = [];
  }
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
  guardarRegistro() {
    this.presentService.guardarLabo(this.laboratorioSeleccionado);
  }
}
