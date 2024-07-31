import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AmiguitosPageComponent } from './pages/amiguitos-page/amiguitos-page.component';
import { ContactoComponent } from '../contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'nuevo-animal',
        component: NewPageComponent,
      },
      {
        path: 'buscar',
        component: SearchPageComponent,
      },
      {
        path: 'editar/:id',
        component: NewPageComponent,
      },
      {
        path: 'lista',
        component: ListPageComponent,
      },
      {
        path: 'amiguito/:id',
        component: AmiguitosPageComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: '**',
        redirectTo: 'lista',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmiguitosRoutingModule {}
