import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vuelos } from '../Modelos/Vuelos';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class VuelosService {
    create(nuevoVuelo: Vuelos) {
      throw new Error('Method not implemented.');
    }
  
    constructor(private http: HttpClient, private httpClient: HttpClient) {}
  
    urlListarVUelos = "http://localhost:8080/vuelos/listarvuelos"
    urlGoat = "http://localhost:8080/vuelos/"
  
    //getListaVuelos() {
     // return this.http.get<Vuelos>(this.urlListarVUelos);
   // }
  
    public listaVuelos(): Observable<Vuelos[]> {
      return this.httpClient.get<Vuelos[]>(this.urlGoat + "listarvuelos");
    }
  
    public eliminarVuelos(id: number): Observable<string> {
      return this.httpClient.delete(this.urlGoat + 'eliminarvuelo/' + id, { responseType: 'text' });
    }
  
    getVuelos() {
      return this.http.get<Vuelos[]>(this.urlGoat + 'eliminarvuelo/');
    }
   
    public nuevoVuelo(vuelo: Vuelos): Observable<Vuelos> {
      return this.httpClient.post<Vuelos>(this.urlGoat + 'ingresarvuelo', vuelo);
    }
  
    public update(id: number, vuelos: Vuelos): Observable<any> {
      return this.httpClient.put<any>(this.urlGoat + 'actualizarvuelo/' + id, vuelos);
    }
  }
  