import { Component, OnInit } from '@angular/core';
import { amiguitos, amiguitosList } from './amiguitos.mock';

@Component({
  selector: 'app-amiguitos',
  templateUrl: './amiguitos.component.html',
  styleUrls: ['./amiguitos.component.css'],  
})
export class AmiguitosComponent implements OnInit {
  amiguitosList: amiguitos[] = amiguitosList

  constructor() {}

  ngOnInit(): void{

  }
}
