import {Component, DoCheck, OnInit} from '@angular/core';
import {Presentacion} from "../interfaces/presentacion";
import {PresentacionService} from "../servicios/presentacion.service";
import {HorariosService} from "../servicios/horarios.service";

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit, DoCheck {
  informacion: Presentacion;
  horarios: any[];
  constructor(private presentService: PresentacionService, private horarioService: HorariosService) {
    this.horarios = [];
  }

  ngOnInit() {
    this.presentService.getInformacion().subscribe((res) => {
      this.informacion = res[0];

    });
  }
  ngDoCheck() {
    this.horarios = this.horarioService.getHorario();
  }

}
