import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  menuOption: string = '';

  onOption(menuOption: string) {
    this.menuOption = menuOption;
    this.sidenav.close(); // Cerrar el sidenav
  }
}
