import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VuelosListarComponentComponent } from './Vuelos/Listar Vuelos/vuelos-listar-component.component';
import { } from './Vuelos/Listar Vuelos/vuelos-listar-component.component';
import { VuelosEditatComponent } from './Vuelos/Editar Vuelos/vuelos-editat.component';
import { AddVueloComponent } from './Vuelos/Agregar Vuelo/add-vuelo.component';
import { PaginaPrincipalComponent } from '../pagina-principal/pagina-principal.component';
import { AgregarReservaComponent } from './Reservas/Agregar Reserva/agregar-reserva.component';
import { ListarReservaComponent } from './Reservas/Listar Reserva/listar-reserva.component';
import { EditarReservaComponent } from './Reservas/Editar Reserva/editar-reserva.component';


const routes: Routes = [

  { path: '', component: VuelosListarComponentComponent },

  {path: 'listar', component: VuelosListarComponentComponent},

  {path: 'editar/:id', component: VuelosEditatComponent},

  {path: 'Ingresar', component: AddVueloComponent},

   {path: 'editares/:id', component: EditarReservaComponent},

  {path: 'listares', component: ListarReservaComponent},

  {path: 'Ingresares', component: AgregarReservaComponent},

  {path: 'principal', component: PaginaPrincipalComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
