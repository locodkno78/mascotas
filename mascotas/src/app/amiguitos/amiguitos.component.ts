import { Component } from '@angular/core';
import { amiguitosList } from './amiguitos.mock';

@Component({
  selector: 'app-amiguitos',
  templateUrl: './amiguitos.component.html',
  styleUrls: ['./amiguitos.component.css'],  
})
export class AmiguitosComponent {
  amiguitosList = amiguitosList
}
