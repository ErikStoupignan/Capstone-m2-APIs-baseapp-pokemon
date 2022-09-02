import { counter } from './DOMelements.js';

const pokemonCounter = () => {
  const result = document.querySelectorAll('.pokemon-img');
  return result.length;
};

const print = () => {
  counter.innerHTML = pokemonCounter();
};

setTimeout(() => {
  print();
}, 800);

export default pokemonCounter;