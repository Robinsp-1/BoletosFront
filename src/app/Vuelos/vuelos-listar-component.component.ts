import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../Servicios/Vuelos.service';
import { Router } from '@angular/router';
import { Vuelos } from '../Modelos/Vuelos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vuelos-listar-component',
  templateUrl: './vuelos-listar-component.component.html',
  styleUrls: ['./vuelos-listar-component.component.css']
})
export class VuelosListarComponentComponent implements OnInit {

  fechaSalida: string = "";
  horaSalida: string = "";
  fechaLlegada: string = "";
  horaLlegada: string = "";
  lugarSalida: string = "";
  lugarDestino: string = "";
  horaAbordaje: string = "";

  vuelos: Vuelos[] = [];

  constructor(private service: VuelosService, private router: Router,private http:HttpClient) {}

  ngOnInit() {

    this.listarVuelos();
   
  }

  
  listarVuelos(): void {
    this.service.listaVuelos().subscribe(
      data =>{
        this.vuelos = data;
      }
    )
  }


  eliminarVuelo(idVuelo: number): void{
    this.service.eliminarVuelos(idVuelo).subscribe(
        data => {
          this.listarVuelos();
        }
    )
}

// editarVuelo(vuelo:any){
//return this.http.put(`${Vuelos}/`,vuelo)

//}


}
