import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaListarComponentComponent } from './Persona/persona-listar-component.component';
import { VuelosListarComponentComponent } from './Vuelos/vuelos-listar-component.component';
import { VuelosService } from './Servicios/Vuelos.service';
import { VuelosEditatComponent } from './Vuelos/Vuelos/vuelos-editat.component';

@NgModule({
  declarations: [
    AppComponent,
    VuelosListarComponentComponent,
    VuelosEditatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [VuelosService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

