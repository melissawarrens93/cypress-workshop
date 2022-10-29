import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokePage} from "../models/pokeapi.model";

@Injectable()
export class PokemonApiService {
    API_URL = 'https://pokeapi.co/api/v2/';

    constructor(private http: HttpClient) {
    }

    fetchAllPokemons(limit = 151): Observable<PokePage> {
        return this.http.get<PokePage>(`${this.API_URL}pokemon?limit=${limit}`);
    }

    fetchPokemonPage(url?: string): Observable<PokePage> {
        return this.http.get<PokePage>(url ? url : `${this.API_URL}pokemon`);
    }
}
