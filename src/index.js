import './style.css';
import './css/pokeball.css';
import './css/popUp-menu.css';

document.body.addEventListener('click', (e) => {
  const {id} = e.target;
  const regex =  /(?<=button)\d+$/;
  const closeModalId = 'xmodal'

  if(regex.test(id)) { 
    console.log(id);
    document.getElementById('popUp-comments').classList.toggle('popUp-window');
  } 

  if(id === closeModalId) {
    document.getElementById('popUp-comments').classList.toggle('popUp-window');
  }

  
  return null;
});

// document.getElementById('xmodal').addEventListener('click', () =>{ 
//   document.getElementById('popUp-comments').classList.toggle('popUp-window');
// });


