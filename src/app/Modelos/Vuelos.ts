export class Vuelos{
    fechaSalida: string;
    horaSalida: string;
    fechaLlegada: string;
    horaLlegada: string;
    lugarSalida: string;
    lugarDestino: string;
    horaAbordaje: string;
    idVuelo: number;

    constructor(
        fechaSalida: string,
        horaSalida: string,
        fechaLlegada: string,
        horaLlegada: string,
        lugarSalida: string,
        lugarDestino: string,
        horaAbordaje: string,
        idVuelo : number
      ) {
        this.fechaSalida = fechaSalida;
        this.horaSalida = horaSalida;
        this.fechaLlegada = fechaLlegada;
        this.horaLlegada = horaLlegada;
        this.lugarSalida = lugarSalida;
        this.lugarDestino = lugarDestino;
        this.horaAbordaje = horaAbordaje;
        this.idVuelo = idVuelo;
      }
    
}