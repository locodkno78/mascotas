import { Component, OnInit } from '@angular/core';
import { amiguitos, amiguitosList } from '../../amiguitos.mock';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: []
})
export class ListPageComponent implements OnInit {
  amiguitosList: amiguitos[] = amiguitosList

  constructor() {}
  ngOnInit(): void {
    
  }
}
