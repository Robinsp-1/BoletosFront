export class Reservas {
    asiento: string;
    claseVuelo: string;
    pasajero: {
        idPasajero: number;
    };
    vuelo: {
        idVuelo: number;
    };
    equipaje: {
        idEquipaje: number;
    };
    idReserva: number;

  
    constructor(
      asiento: string,
      claseVuelo: string,
      idPasajero: number,
      idVuelo: number,
      idEquipaje: number,
      idReserva: number,
    ) {
      this.asiento = asiento;
      this.claseVuelo = claseVuelo;
      this.pasajero = { idPasajero:idPasajero};
      this.vuelo = { idVuelo:idVuelo};
      this.equipaje = { idEquipaje:idEquipaje};
      this.idReserva = idReserva;
    }
  }
 