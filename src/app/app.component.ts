import {Component} from '@angular/core';
import {PokemonFacade} from "../facades/pokemon.facade";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cypress-starter';

  displayedColumns: string[] = ['id', 'name'];
  pokemons$ = this.pokemonFacade.getPokemons();
  isLoading$ = this.pokemonFacade.isLoading$;

  searchTerm: string = '';

  constructor(private pokemonFacade: PokemonFacade) {
  }

  previousPage() {
    this.searchTerm = '';
    this.pokemonFacade.previousPage();
  }

  nextPage() {
    this.searchTerm = '';
    this.pokemonFacade.nextPage();
  }

  search() {
    if (this.searchTerm === '') {
      this.pokemonFacade.resetSearch();
      return;
    }
    this.pokemonFacade.search(this.searchTerm);
  }

  resetSearch() {
    this.searchTerm = '';
    this.pokemonFacade.resetSearch();
  }
}
