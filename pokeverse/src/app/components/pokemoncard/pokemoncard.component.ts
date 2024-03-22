import { Component, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrl: './pokemoncard.component.css'
})
export class PokemoncardComponent {
  @Input() pokemon: any;
  pokemonInfo:any;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getOnePokemon(this.pokemon.url).subscribe((data:any) => {
      this.pokemonInfo = data;
    })
  }
}
