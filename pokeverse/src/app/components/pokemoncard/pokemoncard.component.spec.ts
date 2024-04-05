import { HttpClientModule } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';

import { PokemoncardComponent } from './pokemoncard.component';

describe('PokemoncardComponent', () => {
  let component: PokemoncardComponent;
  let fixture: ComponentFixture<PokemoncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule, 
        MatButtonModule, 
        MatIconModule, 
        MatToolbarModule, 
        HttpClientModule, 
        MatCardModule
      ],
      declarations: [PokemoncardComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PokemoncardComponent);
    component = fixture.componentInstance;
    component.pokemon = {
      name:"bulbasaur",
      url:"https://pokeapi.co/api/v2/pokemon/1/"
    } 
    component.btnStyle = "green"
    component.btnTitle = "add"
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render balbaser card', async () =>{
      await fixture.whenRenderingDone();
      fixture.detectChanges()
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.card-title')?.textContent).toEqual('bulbasaur')
  })

  it('should fire a click event when the button is pressed',async () => {
    
    await fixture.whenRenderingDone();
    fixture.detectChanges()

    spyOn(component.btnClick, 'emit')

    const button = fixture.nativeElement.querySelectorAll('.card-button')[0];
    button.dispatchEvent(new Event('click'))
    fixture.detectChanges()
     expect(component.btnClick.emit).toHaveBeenCalled()
  })
});
