const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
    counter.innerHTML = 0;
const UpdateCounter = ()=>{
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerHTML;

    const increment = target/200;

    if(c<target){
        counter.innerHTML = ''+Math.ceil(c + increment)+'';
        setTimeout(UpdateCounter,1);
    }else{
        counter.innerHTML = target;
    }
}

UpdateCounter();
    
})