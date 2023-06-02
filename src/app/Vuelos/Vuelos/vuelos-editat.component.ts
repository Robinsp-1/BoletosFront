import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vuelos } from 'src/app/Modelos/Vuelos';
import { VuelosService } from 'src/app/Servicios/Vuelos.service';

@Component({
  selector: 'app-vuelos-editat',
  templateUrl: './vuelos-editat.component.html',
  styleUrls: ['./vuelos-editat.component.css']
})
export class VuelosEditatComponent {

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
  VuelosService: any;
  Vuelos: Vuelos[] = [];

  constructor(private router:Router, private service:VuelosService,
    private activatedRoute: ActivatedRoute){}
  
  
    onUpdate(): void{
  const id = this.activatedRoute.snapshot.params['idVuelo'];
  this.service.update(id, this.nuevoVuelo).subscribe(data =>{
    console.log(this.nuevoVuelo)
    })

  //public editarvuelo(vueloId:number){
  //this.VuelosService.listaVuelos(vueloId).subscribe((vuelo:any)=>{
 //this.router.navigate(['/editar'],{state:{vuelo}})

//})

ngOnInit();{
console.log(history.state);
const Vuelo=history.state.vuelo;
this.Vuelos =Vuelo;
}


}
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
  
