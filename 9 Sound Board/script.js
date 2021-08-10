const sounds = ['tom1','tom2','tom3','tom4','crash','kick-bass','snare']

sounds.forEach(sound =>{
    const btn = document.createElement("button")
    btn.classList.add('btn');
    btn.innerHTML = sound;
    
    btn.addEventListener('click',()=>{
       document.getElementById(sound).play();
    })

    document.querySelector('.buttons').appendChild(btn);
})