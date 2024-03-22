import { Component, EventEmitter, INJECTOR, Input, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrl: './pokemoncard.component.css'
})
export class PokemoncardComponent {
  @Input() pokemon: any;
  @Input() btnStyle!: string;
  @Input() btnTitle !: string;
  @Output() btnClick = new EventEmitter();
  pokemonInfo:any;
  mySquad: any;
  btnDisabled: boolean= false;
  

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getOnePokemon(this.pokemon.url).subscribe((data:any) => {
      this.pokemonInfo = data;
    })
    this.pokemonService.mySquad.subscribe(val => {
      this.mySquad = val
    })
  }

  onClick(pokemon:any){
    this.btnClick.emit(pokemon);
  }

}
