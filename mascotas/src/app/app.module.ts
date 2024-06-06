import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { PrincipalComponent } from './principal/principal.component';
import { AmiguitosComponent } from './amiguitos/amiguitos.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    AmiguitosComponent,
    ToolbarComponent,
    ContactoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule, MatDividerModule, MatButtonModule,
    PrincipalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
