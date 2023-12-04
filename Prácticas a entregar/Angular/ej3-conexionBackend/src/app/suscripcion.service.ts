import { Injectable } from '@angular/core';
import { Suscripcion } from './suscripcion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuscripcionService {
  constructor(private http: HttpClient) {}

  private urlBackend = 'apiUrl';

  crearSuscripcion(s: Suscripcion): Observable<Suscripcion> {
    return this.http.post<Suscripcion>(this.urlBackend, s);
  }

  buscarSuscripcionPorId(id: number): Observable<Suscripcion> {
    return this.http.get<Suscripcion>(`${this.urlBackend}/${id}`);
  }

  buscarSuscripciones(): Observable<Suscripcion[]> {
    return this.http.get<Suscripcion[]>(`${this.urlBackend}`);
  }

  borrarUnaSuscripcion(id: number): Observable<Suscripcion> {
    return this.http.delete<Suscripcion>(`${this.urlBackend}/${id}`);
  }
}
