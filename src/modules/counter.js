import pokemonCounter from "./PokemonCounter.js";
import { counter } from './DOMelements.js';
import myArray from './Array.js';

// Counter comments
const counterComments = () => {
  const result = document.querySelectorAll('.commit');
  return result.length;
};

export default counterComments;