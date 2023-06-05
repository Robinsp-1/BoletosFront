import { Component } from '@angular/core';
import { VuelosService } from '../../Servicios/Vuelos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vuelos } from '../../Modelos/Vuelos';


@Component({
  selector: 'app-add-vuelo',
  templateUrl: './add-vuelo.component.html',
  styleUrls: ['./add-vuelo.component.css']
})
export class AddVueloComponent {

  nuevoVueloAg: Vuelos = {
    fechaSalida: "",
         horaSalida: "",
         fechaLlegada: "",
         horaLlegada: "",
         lugarSalida: "",
         lugarDestino: "",
         horaAbordaje: "",
         aerolinea: {
          idAerolinea:0
        },
         idVuelo:0
  }

  Vuelos: Vuelos[] = [];

   constructor(private router:Router, private service:VuelosService,
    private activatedRoute: ActivatedRoute){}
  
  




agregarVuelo(): void {
  this.service.nuevoVuelo(this.nuevoVueloAg).subscribe(
    () => {
      // El vuelo se ha agregado correctamente
      alert('El vuelo se ha agregado correctamente');
      this.router.navigate(['/listar']);
    },
    (    error: any) => {
      // Ocurrió un error al agregar el vuelo
      alert('Se produjo un error al agregar el vuelo');
      console.error(error);
    });}
  }
