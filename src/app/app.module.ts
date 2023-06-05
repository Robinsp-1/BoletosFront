import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VuelosListarComponentComponent } from './Vuelos/Listar Vuelos/vuelos-listar-component.component';
import { VuelosService } from './Servicios/Vuelos.service';
import { VuelosEditatComponent } from './Vuelos/Editar Vuelos/vuelos-editat.component';
import { AddVueloComponent } from './Vuelos/Agregar Vuelo/add-vuelo.component';
import { AgregarReservaComponent } from './Reservas/Agregar Reserva/agregar-reserva.component';
import { ListarReservaComponent } from './Reservas/Listar Reserva/listar-reserva.component';
import { EditarReservaComponent } from './Reservas/Editar Reserva/editar-reserva.component';
import { ReservasService } from './Servicios/Reservas.service';
@NgModule({
  declarations: [
    AppComponent,
    VuelosListarComponentComponent,
    VuelosEditatComponent,
    AddVueloComponent,
    AgregarReservaComponent,
    ListarReservaComponent,
    EditarReservaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VuelosService,ReservasService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AddVueloModule { }
export class agregarvuelomodule { }