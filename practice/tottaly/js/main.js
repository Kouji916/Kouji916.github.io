'use strict';
{
const openBtn = document.getElementById('open-btn');
const spMenu = document.getElementById('sp-menu');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
  spMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  spMenu.classList.remove('open');
});

}