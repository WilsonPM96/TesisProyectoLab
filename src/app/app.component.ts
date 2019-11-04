import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeIndex: number;
  configuraciones: boolean;
  displayClave: boolean;
  clave: string;
  title = 'AplicacionLabos';
  constructor(private messageService: MessageService) {}
  ngOnInit() {
    this.activeIndex = 0;
    this.displayClave = false;
    this.clave = '';
    document.getElementById('general').tabIndex = -1;
    document.getElementById('general').focus();
    this.configuraciones = false;
  }
  presionoTecla(tecla) {
    if (tecla.key === 'F9') {
      if (this.configuraciones === false) {
        this.displayClave = true;
        document.getElementById('inputDialog').focus();
      } else if (this.configuraciones === true) {
        this.configuraciones =! this.configuraciones;
      }
    }
  }
  verificarClave() {
    if (this.clave === 'admin') {
      this.configuraciones =! this.configuraciones;
      this.displayClave = false;
      setTimeout(() => {
        this.activeIndex = 3;
      }, 1);
    } else if (this.clave !== 'admin') {
      this.messageService.add({key: 'info', severity:'error', summary: 'Clave Incorrecta', detail: 'La clave Ingresada es Incorrecta'});
    }
  }
}
