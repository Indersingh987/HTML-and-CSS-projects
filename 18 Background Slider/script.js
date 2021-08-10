const right = document.getElementById('right')
const left = document.getElementById('left')
const body = document.body;
const slides = document.querySelectorAll('.slide');

let counter = 0;

console.log(slides[0].style.background)

right.addEventListener('click',()=>{
    counter++;
    if(counter > 4){
        counter = 0;
    }
   body.style.backgroundImage = slides[counter].style.backgroundImage;
    removeActiveClass();
    slides[counter].classList.add('active');
})

left.addEventListener('click',()=>{
    counter--;
    if(counter < 0){
        counter = 4;
    }
   body.style.backgroundImage = slides[counter].style.backgroundImage;
    removeActiveClass();
    slides[counter].classList.add('active');
})

function removeActiveClass(){
    slides.forEach(slide=>{
        slide.classList.remove('active');
    })
}