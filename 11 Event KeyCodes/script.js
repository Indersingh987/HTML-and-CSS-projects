const insert = document.getElementById('insert');

window.addEventListener('keydown',(event)=>{
    if(event.key === " "){
        insert.innerHTML = '<div class="key">space<small>event.key</small></div><div class="key">'+event.keyCode+'<small>event.keyCode</small></div><div class="key">'+event.code+'<small>event.code</small></div> '
    }else{
        insert.innerHTML = '<div class="key">'+event.key+'<small>event.key</small></div><div class="key">'+event.keyCode+'<small>event.keyCode</small></div><div class="key">'+event.code+'<small>event.code</small></div> '
                            
    }
  
})


 

