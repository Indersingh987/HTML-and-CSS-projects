const openBtns = document.querySelectorAll('.open');
const closeBtns = document.querySelectorAll('.close');

openBtns.forEach((open,i)=>{
    open.addEventListener('click',()=>{
       document.querySelectorAll('.card')[i].classList.add('active');
    })
})

closeBtns.forEach((close,i)=>{
    close.addEventListener('click',()=>{
       document.querySelectorAll('.card')[i].classList.remove('active');
    })
})