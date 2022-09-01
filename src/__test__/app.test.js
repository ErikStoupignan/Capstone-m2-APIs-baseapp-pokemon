/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
import { counterComments } from "../modules/printOnDOM.js";

describe ('Counters', () => {
  it('Comments counters', () => {
    document.body.innerHTML =
    '<span id="counter-comments" class="title-comments">Comments (2)</span>';
    const titleComment = document.getElementById('counter-comments');
    const array = [{name:'object1'}, {name:'object2'}, {name:'object3'}, {name:'object4'}];
    expect(counterComments(array)).toBe(4);
  });
  it ('suma', () => {
    expect(5).toBe(5);
  });
})

