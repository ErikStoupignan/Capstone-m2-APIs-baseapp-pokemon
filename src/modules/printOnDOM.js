const ulElement = document.getElementById('comments-list');

// Generate the inputs and the

// Comments
const printDOM = ((input) => {
  ulElement.innerHTML = '';
  ulElement.innerHTML = input.map((item) => `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`).join(' ');
});

// Print if the list is empy
const printListEmpy = (() => {
  ulElement.innerHTML = '';
  ulElement.innerHTML = '<li> Be the first to comment! </li>';
});

// Likes
// const counterLikes = ((id) => {
//   const like = document.getElementById(`${id}`);
// });

export { printDOM, printListEmpy };