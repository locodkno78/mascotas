import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmiguitosComponent } from './amiguitos/amiguitos.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';



const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'amiguitos', component: AmiguitosComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
