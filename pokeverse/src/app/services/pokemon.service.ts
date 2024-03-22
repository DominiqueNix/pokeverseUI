import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {BehaviorSubject, Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  mySquad: Observable<any> = of([]);
  battleReady: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<{}> {
    return this.http.get<{}>(this.apiUrl);
  }

  getOnePokemon(url:string): Observable<{}> {
    return this.http.get<{}>(url);
  }
}
