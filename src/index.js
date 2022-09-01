import './style.css';
import './css/pokeball.css';
import './css/popUp-menu.css';
import updateCounter from './modules/PokemonCounter.js';
import cardBuilder from './modules/cardBuilder.js';
import { printDOM, createSubmitBtn, printCounterComments } from './modules/printOnDOM.js';
import popupBuilder from './modules/popupBuilder.js';
import counterComments from './modules/counter.js';
import {
  addLike, getList, getComments, newComment,
} from './modules/involvementApi.js';

document.body.addEventListener('click', async (e) => {
  const { id } = e.target;
  const regexBtnCom = /(?<=button)\d+$/;
  const regexLike = /(?<=likeIcon)\d+$/;
  const regexSubmit = /(?<=btnSubmit)\d+$/;
  const closeModalId = 'xmodal';

  // Say the id of the button
  // posicion en la array:
  if (regexBtnCom.test(id)) {
    const index = id.match(regexBtnCom)[0];
    await getComments(printDOM, index);
    popupBuilder(index);
    createSubmitBtn(index);
    document.getElementById('popUp-menu').classList.toggle('display-none');
    setTimeout(() => {
      printCounterComments(counterComments());
    }, 50);
  }

  // Point to the x on the popUp menu
  if (id === closeModalId) {
    document.getElementById('popUp-menu').classList.toggle('display-none');
  }

  // Recovery the data from the inputs on the popUp menu READY
  if (regexSubmit.test(id)) {
    const inputName = document.getElementById('input-text').value;
    const inputText = document.getElementById('input-comment').value;
    if (inputName === '' && inputText === '') return;
    document.getElementById('input-text').value = '';
    document.getElementById('input-comment').value = '';
    const index = id.match(regexSubmit)[0];
    await newComment(inputName, inputText, index);
    await getComments(printDOM, index);
    printCounterComments(counterComments());
  }

  // Read the like Icon
  if (regexLike.test(id)) {
    const like = document.getElementById(`${id}`);
    like.style.display = 'none';
    const index = id.match(regexLike)[0];
    const pokeball = document.getElementById(`icon-pokeball${index}`);
    pokeball.classList.remove('display-none');
    await addLike(id);
    await getList();
  }
});

updateCounter();
cardBuilder();
getList();
