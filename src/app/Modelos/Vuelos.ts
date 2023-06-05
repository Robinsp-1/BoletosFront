export class Vuelos{
  fechaSalida: string;
  horaSalida: string;
  fechaLlegada: string;
  horaLlegada: string;
  lugarSalida: string;
  lugarDestino: string;
  horaAbordaje: string;
  aerolinea: {
    idAerolinea: number;
  };
  idVuelo: number;

  constructor(
      fechaSalida: string,
      horaSalida: string,
      fechaLlegada: string,
      horaLlegada: string,
      lugarSalida: string,
      lugarDestino: string,
      horaAbordaje: string,
      idAerolinea: number,
      idVuelo : number
    ) {
      this.fechaSalida = fechaSalida;
      this.horaSalida = horaSalida;
      this.fechaLlegada = fechaLlegada;
      this.horaLlegada = horaLlegada;
      this.lugarSalida = lugarSalida;
      this.lugarDestino = lugarDestino;
      this.horaAbordaje = horaAbordaje;
      this.aerolinea = { idAerolinea: idAerolinea };
      this.idVuelo = idVuelo;
    }
}
