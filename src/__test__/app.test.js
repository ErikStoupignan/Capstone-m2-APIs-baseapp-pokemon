/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
import counterComments  from "../modules/counter.js";
import pokemonCounter from "../modules/PokemonCounter.js";

describe ('Test ounters', () => {
  it('Comments counters', () => {

    const numberToTest = 5;

    for( let i = 1 ; i <= numberToTest ; i+=1 ) {
      document.body.innerHTML += `<li class="commit">Comments ${i}</li>`;
    }
    
    expect(counterComments()).toBe(numberToTest);
  });

  it('Pokemon counter', () => {

    document.body.innerHTML = `<div class="pokemon-img">Pokemon Cards</div>`;
    const result = pokemonCounter();
    expect(result).toBe(1);

  });


  it ('suma', () => {
    expect(5).toBe(5);
  });
})

