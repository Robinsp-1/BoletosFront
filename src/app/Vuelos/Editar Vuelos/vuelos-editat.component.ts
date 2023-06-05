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

  editarvuelo: Vuelos = {
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

  constructor(private router:Router, private vuelosService:VuelosService,
    private activatedRoute: ActivatedRoute){}

    onUpdate(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.vuelosService.update(id, this.editarvuelo).subscribe(
        () => {
          console.log("Excelente")
        },
        (        error: any) => {
          console.error("Ocurrió un error", error);
        }
      )
    }

    actualizarVuelo(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.vuelosService.update(id, this.editarvuelo).subscribe(
        () => {
          // Se ha actualizado el vuelo con éxito
          alert('El vuelo se ha actualizado correctamente');
          this.router.navigate(['/listar']); 
        },
        (error) => {
          // Ocurrió un error al actualizar el vuelo
          alert('Se produjo un error al actualizar los vuelos');
          console.error(error);
        }
      );
    }
    
   
    
  }
