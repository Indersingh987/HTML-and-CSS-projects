const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let load = 0;
let int = setInterval(bluring,30)

function bluring(){
    load++;
    if(load>99){
        clearInterval(int);
    }
    loadingText.innerHTML = load +'%';
    loadingText.style.opacity = scale(load,1);
    bg.style.filter = 'blur('+scale(load,30)+"px)";
}

const scale = (load,max)=>{
    return max-((max/100)*load).toFixed(3);
}