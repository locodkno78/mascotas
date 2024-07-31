import { Component, OnInit } from '@angular/core';
import { amiguitos, amiguitosList } from '../../amiguitos.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  amiguitosList: amiguitos[] = amiguitosList;

  constructor(private router: Router) {}

  buttonAdopt(id: number) {
    this.router.navigate(['amiguitos', 'amiguito', id]);
  }

  ngOnInit(): void {}
}
