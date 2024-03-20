import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadisticaUsuario } from '../interface/EstadisticaUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaUsuarioService {

  constructor(private http : HttpClient) { }

  apiEstadistica : string = "https://65f2ccf0105614e6549ee50d.mockapi.io/EstadisticasUsuarios/1";

  recogerEstadistica() : Observable<EstadisticaUsuario> {
    return this.http.get<EstadisticaUsuario>(this.apiEstadistica);
  }


}
