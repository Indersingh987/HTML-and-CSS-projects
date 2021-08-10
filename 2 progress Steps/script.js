const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let current = 1;
let width = "0%";

console.log(prev);

next.addEventListener('click',()=>{
    current++;
    if(current > circles.length){
        current = circles.length;
    }
    update(current);
    circles[current - 1].classList.add('active');
})

prev.addEventListener('click',()=>{
    current--;
    if(current < 1){
        current = 1;
    }
    update(current);
    circles[current].classList.remove('active');
})

function update(cur){

    // button update
    if(current === circles.length){
        document.querySelector('#next').disabled = true;
    }else{
        document.querySelector('#next').disabled = false;
    }
    if(current === 1){
        document.querySelector('#prev').disabled = true;
    }else{
        document.querySelector('#prev').disabled = false;
    }

    //progress update
    switch(cur) {
        case 1:
          progress.style.width = "0%";
          break;
        case 2:
         progress.style.width = "33%";
          break;
        case 3:
            progress.style.width = "66%";
          break;
        case 4:
         progress.style.width = "100%";
          break;
        default:
         progress.style.width = '0%';
      }
      
     
}