import './style.css';
import './css/pokeball.css';
import './css/popUp-menu.css';
import updateCounter from './modules/PokemonCounter.js';
import cardBuilder from './modules/cardBuilder.js';
import { getComments, newComment } from './modules/involvementApi.js';
import { printDOM } from './modules/printOnDOM.js';
import popupBuilder from './modules/popupBuilder.js';

document.body.addEventListener('click', async (e) => {
  const { id } = e.target;
  console.log('Id del elemento seleccionado:', id);
  const regexBtnCom = /(?<=button)\d+$/;
  const regexLike = /(?<=likeIcon)\d+$/;
  const regexSubmit = /(?<=btnSubmit)\d+$/;
  const closeModalId = 'xmodal';

  // Say the id of the button
  // posicion en la array:
  if (regexBtnCom.test(id)) {
    const index = id.match(regexBtnCom)[0];
    await getComments(printDOM, index);
    // AQUI ENTRA ERICK
    document.getElementById('popUp-menu').classList.toggle('display-none');
    console.log(index);
    popupBuilder(index);
  }

  // Point to the x on the popUp menu
  if (id === closeModalId) {
    document.getElementById('popUp-menu').classList.toggle('display-none');
  }

  // Recovery the data from the inputs on the popUp menu READY
  if (regexSubmit.test(id)) {
    console.log('Id de la tarjeta que abrio el popUp', id);

    const inputName = document.getElementById('input-text').value;
    const inputText = document.getElementById('input-comment').value;
    if (inputName === '' && inputText === '') return;

    document.getElementById('input-text').value = '';
    document.getElementById('input-comment').value = '';

    const index = id.match(regexSubmit)[0];
    console.log('Id del button submit:', index, inputName, inputText);
    console.log('name:', inputName, 'comment:', inputText, 'id que se lleva la función ->', index);

    await newComment(inputName, inputText, index);
    await getComments(printDOM, index);
  }

  // Read the like Icon
  if (regexLike.test(id)) {
    const like = document.getElementById(`${id}`);
    like.style.color = 'red';
    console.log('Like en la tarjeta número:', id, like);
  }
});

updateCounter();
cardBuilder();
