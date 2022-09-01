import myArray from './Array.js';
import pokemon from './PokemonClassCall.js';
import { type, weight, height, power, name, image } from './DOMelements.js';

const popListeners = (position = 0) => {
  const pokeid = myArray[position];
  const pokeData = pokemon.getData(pokeid);
  pokeData.then((data) => {
    name.innerText = data.name.toUpperCase();
    image.src = `${data.sprites.other.dream_world.front_default}`;
    type.innerText = `Type: ${data.types[0].type.name.toUpperCase()}`;
    weight.innerText = `Weight: ${data.weight} lbs.`;
    height.innerText = `Height: ${data.height} ft.`;
    power.innerText = `Hability: ${data.abilities[0].ability.name.toUpperCase()}`;
    console.log(data.types[0].type.name);
    document.getElementsByClassName('card-top')[0].classList.add(data.types[0].type.name);
  });
};

export default popListeners;