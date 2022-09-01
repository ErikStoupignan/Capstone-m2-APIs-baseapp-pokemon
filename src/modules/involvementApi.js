import { printListEmpty } from './printOnDOM.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'F248wFx3VK8hVkdxLiZz';
const headers = { 'Content-type': 'application/json; charset=UTF-8' };

// POST likes
const addLike = async (position) => {
  const body = JSON.stringify({ item_id: `${position}` });
  await fetch(`${url}${appID}/likes`, { method: 'POST', body, headers });
};

// GET a list of the items with the respective likes
const getList = async () => {
  const result = await fetch(`${url}${appID}/likes`, { method: 'GET' });
  const list = await result.json();
  list.map((_, index) => {
    const pointer = document.getElementById(`counterLikes${index}`);
    if (pointer) {
      const found = list.find((element) => element.item_id === `likeIcon${index}`);
      pointer.innerHTML = found.likes;
    }
    return 'working';
  });
};

// Comments ADD
const newComment = async (name, comment, id) => {
  const body = JSON.stringify({
    item_id: `item${id}`,
    username: `${name}`,
    comment: `${comment}`,
  });
  await fetch(`${url}${appID}/comments`, { method: 'POST', body, headers });
};

// Comments GET
const getComments = async (printf, id) => {
  const element = id;
  const result = await fetch(`${url}${appID}/comments?item_id=item${element}`, { method: 'GET' });
  const comments = await result.json();
  if (result.status === 400) {
    printListEmpty();
    return;
  }
  printf(comments);
};

export {
  addLike, getList, getComments, newComment,
};
