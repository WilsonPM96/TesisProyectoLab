import { Component, OnInit } from '@angular/core';
import {PresentacionService} from "../servicios/presentacion.service";
import {Presentacion} from "../interfaces/presentacion";

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  informacion: Presentacion;
  constructor(private presentService: PresentacionService) { }

  ngOnInit() {
    this.presentService.getInformacion().subscribe((res) => {
      this.informacion = res[0];
    });

  }

}
