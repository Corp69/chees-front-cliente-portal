import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import ImportsModule from '@shared/primeng/ImportsModule';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    //prime NG
    ImportsModule,
  ],
  providers: [MessageService],
  templateUrl: './principal.component.html',
  styles: ``,
})
export default class PrincipalComponent {
  private readonly url = inject(Router);

  //navegar
  public irCapturardatos() {
    this.url.navigate([`ControlCliente/datos`]);
  }

  public irPDF() {
    this.url.navigate([`ControlComprobante/factura/pdf`]);
  }
}
