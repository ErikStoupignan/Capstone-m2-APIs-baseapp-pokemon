const ulElement = document.getElementById('comments-list');
const newSubBtn = document.getElementById('form-popUP-Menu');
const titleComment = document.getElementById('counter-comments');

// Generate the inputs and the

// Comments on the element ul
const printDOM = ((input) => {
  ulElement.innerHTML = '';
  ulElement.innerHTML = input.map((item) => `<li class="commit">${item.creation_date} ${item.username}: ${item.comment}</li>`).join(' ');
});

// Print if the list is empty
const printListEmpty = (() => {
  ulElement.innerHTML = '';
  ulElement.innerHTML = '<li> Be the first to comment! </li>';
  titleComment.innerHTML = 'Comments';
});

// Create a new form for every card
const createSubmitBtn = ((id) => {
  newSubBtn.innerHTML = '';
  newSubBtn.innerHTML = `
  <h3 class="form-title">Add a comment</h3>
  <input id="input-text" class="input-text" placeholder="Your name" type="text" required>
  <input id="input-comment" class="input-comment" placeholder="Your insights" type="text" required>
  <button id="btnSubmit${id}" class="btn-submit" type="button">Comment</button>
  `;
});

// Counter of comments for each pokemon card
const printCounterComments = ((total) => {
  document.getElementById('counter-comments').innerHTML = `Comments ( ${total} )`;
});

export {
  printDOM, printListEmpty, createSubmitBtn, printCounterComments,
};