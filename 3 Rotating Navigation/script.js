const op = document.getElementById('open');
const cl = document.getElementById('close');
const container = document.querySelector('.container')
const nav = document.querySelector('.nav')

console.log(nav);

op.addEventListener('click',()=>{
    container.classList.add('show-nav');
    nav.style.opacity = '1';
})

cl.addEventListener('click',()=>{
    container.classList.remove('show-nav');
    nav.style.opacity = '0';
})