'use strict';
{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const spMenu = document.querySelector('.overlay');
  const back = document.querySelector('.overlay-back');


  open.addEventListener('click', () => {
    spMenu.classList.add('show');
    open.classList.add('hidden');
    back.classList.add('show');
  });

  close.addEventListener('click', () => {
    spMenu.classList.remove('show');
    open.classList.remove('hidden');
    back.classList.remove('show');
  });

  back.addEventListener('click', () => {
    spMenu.classList.remove('show');
    open.classList.remove('hidden');
    back.classList.remove('show');
  });

}