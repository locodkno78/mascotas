import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Error404PageComponent } from './shared/error404-page/error404-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactoComponent } from './contacto/contacto.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    Error404PageComponent,
    ContactoComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
