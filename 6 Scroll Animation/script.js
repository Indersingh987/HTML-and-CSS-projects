const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',()=>{
    var triggerPoint = window.innerHeight;
    triggerPoint = (triggerPoint/5)*4;
    boxes.forEach(box =>{
        var boxTop = box.getBoundingClientRect().top;
        if(boxTop<triggerPoint){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
})