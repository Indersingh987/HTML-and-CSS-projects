const toggle = document.getElementById('toggle');

toggle.addEventListener('click',()=>{
    document.querySelector('nav').classList.toggle('active');
})