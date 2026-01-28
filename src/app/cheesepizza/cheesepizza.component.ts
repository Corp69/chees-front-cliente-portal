import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//componente de menu
import ImportsModule from '@shared/primeng/ImportsModule';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    //modulos para vista principal
    ImportsModule,
],
  templateUrl: './cheesepizza.component.html',
  styles: ``
})
export default class cheesepizzaComponent {

}
