import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../interface/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.apiUrl}/heroes`);
  }

  getHeroesId(id: string): Observable<Heroes> {
    return this.http.get<Heroes>(`${this.apiUrl}/heroes/${id}`);
  }

  getSugerencia(termino: string): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(
      `${this.apiUrl}/heroes?q=${termino}&_limit=9`
    );
  }

  agregarHeroe(heroe: Heroes): Observable<Heroes> {
    return this.http.post<Heroes>(`${this.apiUrl}/heroes`, heroe);
  }

  actualizarHeroe(heroe: Heroes): Observable<Heroes> {
    return this.http.put<Heroes>(`${this.apiUrl}/heroes/${heroe.id}`, heroe);
  }

  borrarHeroe(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/heroes/${id}`);
  }
}
