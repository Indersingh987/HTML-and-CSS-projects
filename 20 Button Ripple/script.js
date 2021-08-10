const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = `${y-buttonTop}px`;
        circle.style.left = `${x-buttonLeft}px`;

        button.appendChild(circle);
        setInterval(()=>circle.remove(),500);
        
        })
})