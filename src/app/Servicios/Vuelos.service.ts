import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vuelos } from '../Modelos/Vuelos';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class VuelosService {
    
    Vuelos: Vuelos | undefined;
    constructor(private http:HttpClient,
        private httpClient: HttpClient){}

    urlListarVUelos = "http://localhost:8080/vuelos/listarvuelos"
    urlGoat = "http://localhost:8080/vuelos/"

    getListaVuelos(){
        return this.http.get<Vuelos>
    }

    public listaVuelos(): Observable<Vuelos[]>{

        return this.httpClient.get<Vuelos[]>(this.urlGoat + "listarvuelos");
        
        
    }

    public eliminarVuelos(id: number): Observable<string> {
        return this.httpClient.delete(this.urlGoat  + 'eliminarvuelo/' + id, { responseType: 'text' });
    }
    

    getVuelos() {
        return this.http.get<Vuelos[]>(this.urlGoat+ 'eliminarvuelo/');
    }

    // createVuelo(vuelo: Vuelos) {

    //     return this.http.post<Vuelos>(this.urlGoat+ 'ingresarvuelo', vuelo);

    // }

    public nuevoVuelo(vuelo: Vuelos): Observable<Vuelos>{
        return this.httpClient.post<Vuelos>(this.urlGoat  + 'ingresarvuelo', vuelo);
    }

    public update(id: number, vuelos: Vuelos): Observable<any> {
        return this.httpClient.put<any>(this.urlGoat + 'actualizarvuelo/', id);
      }
    


}