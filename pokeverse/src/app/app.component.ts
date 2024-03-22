import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'pokeverseUI';

  allPokemon!: any;

  mySquad: any;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getPokemon().subscribe((data:any) => {
      this.allPokemon = data.results;
    })
    this.pokemonService.mySquad.subscribe((val) => {
      this.mySquad = val
    })
  }

  addPokemon(p: any){
    this.mySquad.push(p)
    this.pokemonService.mySquad = of(this.mySquad)
  }

  removePokemon(p: any){
    let newSquad = this.mySquad.filter((poke: any) => poke !== p)
    this.mySquad = newSquad
    this.pokemonService.mySquad = of(this.mySquad)
  }
}