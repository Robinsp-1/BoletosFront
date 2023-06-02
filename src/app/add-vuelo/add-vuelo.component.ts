import { Component } from '@angular/core';
import { VuelosService } from '../Servicios/Vuelos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vuelos } from '../Modelos/Vuelos';

@Component({
  selector: 'app-add-vuelo',
  templateUrl: './add-vuelo.component.html',
  styleUrls: ['./add-vuelo.component.css']
})
export class AddVueloComponent {

  nuevoVuelo: Vuelos = {
    fechaSalida: "",
    horaSalida: "",
    fechaLlegada: "",
    horaLlegada: "",
    lugarSalida: "",
    lugarDestino: "",
    horaAbordaje: "",
    idVuelo: 0
}




  constructor(private router:Router, private service:VuelosService,
    private activatedRoute: ActivatedRoute){}
  
  
    onUpdate(): void{
  const id = this.activatedRoute.snapshot.params['id'];
  this.service.update(id, this.nuevoVuelo).subscribe(data =>{
    console.log("Actualizado")
  })

}



guardarVuelos(): void {

  const vuelos = new Vuelos (
    this.nuevoVuelo.fechaSalida,
    this.nuevoVuelo.horaSalida,
    this.nuevoVuelo.fechaLlegada,
    this.nuevoVuelo.horaLlegada,
    this.nuevoVuelo.lugarSalida,
    this.nuevoVuelo.lugarDestino,
    this.nuevoVuelo.horaAbordaje,
    this.nuevoVuelo.idVuelo
);

this.service.nuevoVuelo(vuelos).subscribe(
  data =>{
    console.log("Guardado");
  }
)



}

}

