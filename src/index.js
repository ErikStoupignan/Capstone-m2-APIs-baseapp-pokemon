import './style.css';
import './css/pokeball.css';
import './css/popUp-menu.css';

document.body.addEventListener('click', (e) => {
  const { id } = e.target;
  console.log('Id del elemento seleccionado:', id);
  const regexBtnCom = /(?<=button)\d+$/;
  const regexLike = /(?<=likeIcon)\d+$/;
  const closeModalId = 'xmodal';
  const submitbtn = 'btnSubmit';

  // Say the id of the button
  if (regexBtnCom.test(id)) {
    console.log(id);
    document.getElementById('popUp-menu').classList.toggle('display-none');
  }

  // Point to the x on the popUp menu
  if (id === closeModalId) {
    document.getElementById('popUp-menu').classList.toggle('display-none');
  }

  // Recovery the data from the inputs on the popUp menu
  if (id === submitbtn) {
    const inputName = document.getElementById('input-text').value;
    const inputText = document.getElementById('input-comment').value;
    if (inputName === '' && inputText === '') return;

    document.getElementById('input-text').value = '';
    document.getElementById('input-comment').value = '';

    console.log('name:', inputName, 'comment:', inputText);
  }

  // Read the like Icon
  if (regexLike.test(id)) {
    const like = document.getElementById(`${id}`);
    like.style.color = 'red';
    console.log('Like en la tarjeta número:', id, like);
  }
});