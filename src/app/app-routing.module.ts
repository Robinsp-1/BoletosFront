import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaListarComponentComponent } from './Persona/persona-listar-component.component';
import { VuelosListarComponentComponent } from './Vuelos/vuelos-listar-component.component';
import { } from './Vuelos/vuelos-listar-component.component';
import { VuelosEditatComponent } from './Vuelos/Vuelos/vuelos-editat.component';

const routes: Routes = [

  {path: 'fsd', component: PersonaListarComponentComponent},

  { path: '', component: VuelosListarComponentComponent },

  {path: 'listar', component: VuelosListarComponentComponent},

  {path: 'editar', component: VuelosEditatComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
