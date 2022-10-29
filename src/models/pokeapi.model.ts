export interface PokePage {
    next: string;
    previous: string;
    results: PokemonResource[];
}

export interface PokemonResource {
    name: string,
    url: string
}
