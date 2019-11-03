import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { HorariosComponent } from './horarios/horarios.component';
import { EstadoredComponent } from './estadored/estadored.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmDialogModule, DropdownModule, InputTextModule, MessagesModule, TabViewModule} from "primeng/primeng";
import {HorariosService} from "./servicios/horarios.service";
import {PresentacionService} from "./servicios/presentacion.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import {ConfirmationService, MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";

export const confDataBase = {
  apiKey: 'AIzaSyC5KVjqdVV467kcUO9-_DxxTQrPz8enVOk',
  authDomain: 'aplicacion-laboratorios.firebaseapp.com',
  databaseURL: 'https://aplicacion-laboratorios.firebaseio.com',
  projectId: 'aplicacion-laboratorios',
  storageBucket: 'aplicacion-laboratorios.appspot.com',
  messagingSenderId: '841140581921',
  appId: '1:841140581921:web:36538a30bd1469c7b81560',
  measurementId: 'G-VZ33TNT015'
};

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    HorariosComponent,
    EstadoredComponent,
    ConfiguracionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(confDataBase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    TabViewModule,
    TableModule,
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DropdownModule
  ],
  providers: [
    HorariosService,
    EstadoredComponent,
    PresentacionService,
    AngularFirestore,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
