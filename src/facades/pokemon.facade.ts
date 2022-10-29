import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap, take, withLatestFrom} from "rxjs";
import {PokemonApiService} from "../services/pokemon-api.service";
import {Pokemon} from "../models/pokemon";
import {PokePage} from "../models/pokeapi.model";

interface CurrentPokePage {
  next: string;
  previous: string;
  page: number;
}

@Injectable()
export class PokemonFacade {
  private readonly DEFAULT_PAGE = {
    next: '',
    previous: '',
    page: -1,
  };
  private readonly currentPokePage$ = new BehaviorSubject<CurrentPokePage>(this.DEFAULT_PAGE);
  private readonly pokemons$ = new BehaviorSubject<Pokemon[]>([]);

  readonly isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(private pokemonService: PokemonApiService) {
    this.getPage('first');
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.pokemons$;
  }

  search(searchTerm: string) {
    this.isLoading$.next(true);
    this.pokemonService.fetchAllPokemons()
      .pipe(
        take(1),
        map((pokePage: PokePage) => pokePage.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
        }))),
        map((pokemons: Array<Pokemon>) => pokemons.filter(pokemon => pokemon.name.includes(searchTerm) || pokemon.id.toString() === searchTerm)),
      )
      .subscribe((pokemons: Array<Pokemon>) => {
        this.pokemons$.next(pokemons);
        this.currentPokePage$.next(this.DEFAULT_PAGE);
        this.isLoading$.next(false);
      });
  }

  resetSearch() {
    this.getPage('first');
  }

  previousPage() {
    this.getPage('previous');
  }

  nextPage() {
    this.getPage('next');
  }

  private getPage(prop: 'next' | 'previous' | 'first') {
    this.isLoading$.next(true);
    this.currentPokePage$
      .pipe(
        take(1),
        switchMap(currentPage => this.pokemonService.fetchPokemonPage(prop === 'first' ? '' : currentPage[prop])),
        withLatestFrom(this.currentPokePage$)
      )
      .subscribe(([newPokePage, currentPokePage]: [PokePage, CurrentPokePage]) => {
        let pageNumber: number;
        if (prop === 'next' && newPokePage.next && newPokePage.next !== '') {
          pageNumber = currentPokePage.page + 1;
        } else if (newPokePage.previous && newPokePage.previous !== '') {
          pageNumber = currentPokePage.page - 1;
        } else {
          pageNumber = 0;
        }

        console.log(newPokePage);

        const pokemons: Pokemon[] = newPokePage.results.map((pokemon, index) =>
          ({
            id: (pageNumber * 20) + index + 1,
            name: pokemon.name,
          }));
        this.pokemons$.next(pokemons);
        this.currentPokePage$.next({
          next: newPokePage.next,
          previous: newPokePage.previous,
          page: pageNumber,
        });
        this.isLoading$.next(false);
      });
  }
}
