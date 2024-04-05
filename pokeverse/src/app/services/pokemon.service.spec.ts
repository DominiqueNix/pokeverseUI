import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
    service.apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  });
  it('should get all pokemon', async () => {
    
    let results:any = await firstValueFrom(service.getPokemon());
    expect(results.results.length).toBe(151);
  });

  it('should get one pokemon', async () => {
    let results:any = await firstValueFrom(service.getOnePokemon("https://pokeapi.co/api/v2/pokemon/1/"));
    expect(results.name).toEqual('bulbasaur');
  });
});
