import { Component, OnInit } from '@angular/core';
import { amiguitos, amiguitosList } from '../../amiguitos.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {
  amiguitosList: amiguitos[] = amiguitosList;
  
  displayedColumns: string[] = ['position', 'name', 'raza', 'edad', 'type', 'action'];
  dataSource = amiguitosList;

  constructor(private router: Router) { }

verDetalle(id: number) {
  this.router.navigate(['amiguitos', 'amiguito', id]);
}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.dataSource = amiguitosList.filter(amiguito => 
      amiguito.name.toLowerCase().includes(filterValue) ||
      amiguito.raza.toLowerCase().includes(filterValue) ||
      amiguito.edad.toLowerCase().includes(filterValue) ||
      amiguito.type.toLowerCase().includes(filterValue)       
    );
  }
  
}

