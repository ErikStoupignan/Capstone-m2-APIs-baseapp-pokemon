import { mainContainer } from './DOMelements.js';
import myArray from './Array.js';
import pokemon from './PokemonClassCall.js';
import cardConstructor from './cardTemplate.js';

const cardsBuild = () => {
  document.addEventListener('DOMContentLoaded',
    myArray.forEach((element, index) => {
      const name = pokemon.getData(element);
      name.then((data) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('card');
        console.log(data.types[0].type.name);
        newDiv.innerHTML = cardConstructor(data.name,
          data.sprites.other.dream_world.front_default, index);

        switch (data.types[0].type.name) {
          case 'fire':
            newDiv.children[0].classList.add('fire');
            break;
          case 'water':
            newDiv.children[0].classList.add('water');
            newDiv.children[0].classList.remove('fire');
            break;
          case 'grass':
            newDiv.children[0].classList.add('grass');
            newDiv.children[0].classList.remove('fire');
            newDiv.children[0].classList.remove('water');
            break;
          case 'electric':
            newDiv.children[0].classList.add('electric');
            newDiv.children[0].classList.remove('fire');
            newDiv.children[0].classList.remove('water');
            break;
          case 'psychic':
            newDiv.children[0].classList.add('psychic');
            newDiv.children[0].classList.remove('fire');
            break;
          case 'fighting':
            newDiv.children[0].classList.add('fighting');
            newDiv.children[0].classList.remove('fire');
            break;
          case 'poison':
            newDiv.children[0].classList.add('poison');
            newDiv.children[0].classList.remove('fire');
            break;
          case 'ground':
            newDiv.children[0].classList.add('ground');
            newDiv.children[0].classList.remove('fire');
            break;
          case 'flying':
            newDiv.children[0].classList.add('flying');
            newDiv.children[0].classList.remove('fire');
            break;
          case 'bug':
            newDiv.children[0].classList.add('bug');
            newDiv.children[0].classList.remove('fire');
            break;
          case 'rock':
            newDiv.children[0].classList.add('rock');
            newDiv.children[0].classList.remove('fire');
            break;
          default:
            newDiv.children[0].classList.add('normal');
            newDiv.children[0].classList.remove('fire');
        }
        mainContainer.appendChild(newDiv);
      });
    }));
};

export default cardsBuild;