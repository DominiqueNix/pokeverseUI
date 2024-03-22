import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'pokeverseUI';

  allPokemon!: any;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getPokemon().subscribe((data:any) => {
      this.allPokemon = data.results;
    })
  }
}