const tags = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup',(e)=>{
     Choices(e.target.value,e.key);
})

function Choices(input,key){
    var chs = input.split(',');
    tags.innerHTML = "";
    for(i=0;i<chs.length;i++){
        if(chs[i] !== ''){
            const tag = document.createElement('div');
            tag.classList.add('tag');
            tag.innerHTML = chs[i];
            tags.appendChild(tag);
        }
}
}