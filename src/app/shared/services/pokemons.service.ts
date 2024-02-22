import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from 'src/app/core/models/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private API_URL: string = environment.URL
  private nextUrl: string | null = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=1302';
  private previousPages: any[] = []

  constructor(private http: HttpClient) { }

  carregarListaPokemons(): Observable<Pokedex> {
    const API =  this.nextUrl
    return this.http.get<Pokedex>(`${this.nextUrl}`)
  }



}
