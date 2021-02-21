
'use strict';

let button = document.querySelector('.change');
let title = document.querySelector('.color');
let div = document.querySelector('.wrapper');


let num;
button.addEventListener('click',()=> {
  num = Math.floor(Math.random()*16777215).toString(16);
  div.style.backgroundColor = "#" + num;
  title.textContent = "#" + num;
});
