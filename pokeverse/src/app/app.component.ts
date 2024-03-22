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
    if(this.mySquad.length < 6){ 

      if(this.mySquad.length){
        let pokemonToAdd;
         for(let i = 0; i < this.mySquad.length; i++){
            if(this.mySquad[i].name === p.name){
              pokemonToAdd.name = false
              
            } else {
              pokemonToAdd = p
            }
          }
          if(pokemonToAdd.name !== false){
            this.mySquad.push(pokemonToAdd)
          } else {
            alert("Pokemon already in squad")
          }
      } else {
        this.mySquad.push(p)
      } 
      
    }else{
      alert("Can't add more Pokemon")
    }
  }

  removePokemon(p: any){
    let newSquad = this.mySquad.filter((poke: any) => poke !== p)
    this.mySquad = newSquad
    this.pokemonService.mySquad = of(this.mySquad)
  }
}