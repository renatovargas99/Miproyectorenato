import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icliente } from '../interfaces/icliente';
import { Iclientes } from '../interfaces/iclientes';

@Injectable({
  providedIn: 'root'
})
export class SclientesService {

  constructor(private http:HttpClient) { }

  listarClientes():Observable <Iclientes>{
    return this.http.get<Iclientes>(`${environment.apiURL}/clientes`)
  }

  crearCliente(newCliente:Icliente):Observable<Icliente>{
    return this.http.post<Icliente>(`${environment.apiURL}/clientes`, newCliente)
  }
}
