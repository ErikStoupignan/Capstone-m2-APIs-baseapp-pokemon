import { counter } from './DOMelements.js';
import myArray from './Array.js';

export default () => { counter.innerHTML = myArray.at(-1); };