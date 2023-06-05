import { Component } from '@angular/core';
import { Reservas } from 'src/app/Modelos/Reservas';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservasService } from 'src/app/Servicios/Reservas.service';

@Component({
  selector: 'app-agregar-reserva',
  templateUrl: './agregar-reserva.component.html',
  styleUrls: ['./agregar-reserva.component.css']
})
export class AgregarReservaComponent {
  
  editarreserva: Reservas = {
    asiento: "",
    claseVuelo: "",
    pasajero: {
      idPasajero:0
  },
  vuelo: {
      idVuelo:0
  },
  equipaje: {
      idEquipaje:0
  },
    idReserva: 0
  }

reservas: Reservas[] = [];

  constructor(
    private router: Router,
    private reservasService: ReservasService,
    private activatedRoute: ActivatedRoute
  ) {}

  agregarReserva(): void {
    this.reservasService.nuevaReserva(this.editarreserva).subscribe(
      () => {
        // La reserva se ha agregado correctamente
        alert('La reserva se ha agregado correctamente');
        this.router.navigate(['/listares']);
      },
      (error: any) => {
        // Ocurrió un error al agregar la reserva
        alert('Se produjo un error al agregar la reserva');
        console.error(error);
      }
    );
  }
}
