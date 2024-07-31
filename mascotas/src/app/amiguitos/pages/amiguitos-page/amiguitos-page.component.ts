import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amiguitos-page',
  templateUrl: './amiguitos-page.component.html',
  styleUrls: ['./amiguitos-page.component.css']
})
export class AmiguitosPageComponent implements OnInit {
  amiguitoId?: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.amiguitoId = +id;  // Solo asigna si no es null
        console.log('ID:', this.amiguitoId);
      } else {
        // Maneja el caso donde el ID es null
        console.error('El ID es null');
      }
    });
  }
}