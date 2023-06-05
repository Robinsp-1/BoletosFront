import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservas } from '../Modelos/Reservas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  constructor(private httpClient: HttpClient) {}

  urlListarReservas = "http://localhost:8080/reservas/listarreservas";
  urlBase = "http://localhost:8080/reservas/";

  public listaReservas(): Observable<Reservas[]> {
    return this.httpClient.get<Reservas[]>(this.urlBase + "listarreservas");
  }

  public eliminarReserva(id: number): Observable<string> {
    return this.httpClient.delete(this.urlBase + 'eliminarreserva/' + id, { responseType: 'text' });
  }

  public nuevaReserva(reserva: Reservas): Observable<Reservas> {
    return this.httpClient.post<Reservas>(this.urlBase + 'ingresarreserva', reserva);
  }

  public actualizarReserva(id: number, reserva: Reservas): Observable<any> {
    return this.httpClient.put<any>(this.urlBase + 'actualizarreserva/' + id, reserva);
  }
}
