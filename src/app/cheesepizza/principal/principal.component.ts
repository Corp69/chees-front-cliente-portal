import { Component, inject, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import ImportsModule from '@shared/primeng/ImportsModule';
import { Router } from '@angular/router';
import MsjCarga from '@shared/cheesepizza/mensajes/msj-carga/msj-carga';

@Component({
  standalone: true,
  imports: [
    //prime NG
    ImportsModule,
    //shared msj - carga
    MsjCarga
  ],
  providers: [
    MessageService
  ],
  templateUrl: './principal.component.html',
  styles: ``,
})
export default class PrincipalComponent {
  private readonly url = inject(Router);

  //--=============================================================================================================
  //?-- cheespizza - Variables de control
  public Blocked = signal<boolean>(true);



  //navegar
  public irCapturardatos() {
    this.url.navigate([`ControlCliente/datos`]);
  }

  public irPDF() {
    this.url.navigate([`ControlComprobante/factura/pdf`]);
  }
}
