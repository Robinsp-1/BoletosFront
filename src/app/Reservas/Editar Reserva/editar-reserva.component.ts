import { Component } from '@angular/core';
import { Reservas } from 'src/app/Modelos/Reservas';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservasService } from 'src/app/Servicios/Reservas.service';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent {

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

  actualizarReserva(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.reservasService.actualizarReserva(id, this.editarreserva).subscribe(
      () => {
        // Se ha actualizado la reserva con éxito
        alert('La reserva se ha actualizado correctamente');
        this.router.navigate(['/listares']);
      },
      (error) => {
        // Ocurrió un error al actualizar la reserva
        alert('Se produjo un error al actualizar la reserva');
        console.error(error);
      }
    );
  }
}
