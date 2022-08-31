import { printListEmpy } from './printOnDOM';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'F248wFx3VK8hVkdxLiZz';
const headers = { 'Content-type': 'application/json; charset=UTF-8' };

// -----------------------------------------------------------------------------------  LIKES
// POST likes
const addLike = async (id) => {
  const body = JSON.stringify({ item_id: id });
  const result = await fetch(`${url}${appID}/likes`, { method: 'POST', body, headers });
  console.log('Elemento con like: Status ->', result.status);
};

// GET a list of the items with the respective likes
const getList = async () => {
  const result = await fetch(`${url}${appID}/likes`, { method: 'GET' });
  const list = await result.json();
  console.log('Lista de elementos:', list);
};
// -----------------------------------------------------------------------------------  COMMENTS
// Comments ADD
const newComment = async (name, comment, id) => {
  console.log('función add ->', name, comment, id);
  const body = JSON.stringify({
    item_id: `item${id}`,
    username: `${name}`,
    comment: `${comment}`,
  });
  console.log('Comentario Agregado: Status ->', body);
  await fetch(`${url}${appID}/comments`, { method: 'POST', body, headers });
};

// Comments GET
const getComments = async (printf, id) => {
  const element = id;
  const result = await fetch(`${url}${appID}/comments?item_id=item${element}`, { method: 'GET' });
  const comments = await result.json();

  if (result.status === 400) {
    printListEmpy();
    return;
  }

  printf(comments);
};

export {
  addLike, getList, getComments, newComment,
};

// addLike(7);
// newComment();
// getList();
// getComments(printf,1);
