import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmiguitosRoutingModule } from './amiguitos-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { AmiguitosPageComponent } from './pages/amiguitos-page/amiguitos-page.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    AmiguitosPageComponent,
  ],
  imports: [CommonModule, AmiguitosRoutingModule, MaterialModule],
})
export class AmiguitosModule {}
