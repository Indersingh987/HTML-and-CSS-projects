const btn = document.querySelector('.btn');
const conatiner = document.querySelector('.container');
const input = document.querySelector('.input');


btn.addEventListener('click',()=>{
   conatiner.classList.toggle('active');
   input.focus();
})