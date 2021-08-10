const smallCups = document.querySelectorAll('.small-cup');
const filled = document.getElementById('filled')
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');

smallCups.forEach((smallCup,index)=>{
    smallCup.addEventListener('click',()=>{

        for(j=0;j<smallCups.length;j++){
            smallCups[j].classList.remove('fill');
        }
       for(j=0;j<=index;j++){
        smallCups[j].classList.add('fill');
        
       }
       bigCupFilled(index);
        
    })
})

function bigCupFilled(index){
    document.querySelector('small').innerHTML = 'remained'
    const heightFilled = (100/8)*(index+1);
    const heightRemained = 100-heightFilled;
    remained.style.height = ''+heightRemained+'%' 
    filled.style.height = ''+heightFilled+'%';
    filled.innerHTML = ''+Math.round(heightFilled)+'%';
    const li = 2/(index+1);
    liters.innerHTML = ''+li.toFixed(2)+'L'; 
    if(heightRemained===0){
        document.querySelector('small').innerHTML = ''
        liters.innerHTML = '';
    }
}