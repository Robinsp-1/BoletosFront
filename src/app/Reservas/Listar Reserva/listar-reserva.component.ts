import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../Servicios/Reservas.service';
import { Reservas } from '../../Modelos/Reservas';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit{
  reservas: Reservas[] = [];

  constructor(private service: ReservasService, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.listarReservas();
  }

  listarReservas(): void {
    this.service.listaReservas().subscribe(
      data => {
        this.reservas = data;
      }
    );
  }

  eliminarReserva(idReserva: number): void {
    this.service.eliminarReserva(idReserva).subscribe(
      data => {
        this.listarReservas();
      }
    );
  }

}
