import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'amiguitos',
    loadChildren: () =>
      import('./amiguitos/amiguitos.module').then((m) => m.AmiguitosModule),
  },
  { path: '404', component: Error404PageComponent },
  { path: '', redirectTo: 'mascotas', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
