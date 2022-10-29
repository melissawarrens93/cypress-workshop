import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokemonFacade} from "../facades/pokemon.facade";
import {PokemonApiService} from "../services/pokemon-api.service";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    FormsModule,
    SharedModule,
  ],
  providers: [PokemonFacade, PokemonApiService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
