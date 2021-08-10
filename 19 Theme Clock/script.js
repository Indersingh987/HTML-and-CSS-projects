const hourNeedle = document.getElementById('hour')
const minuteNeedle = document.getElementById('minute')
const secondNeedle = document.getElementById('second')
const toggle = document.getElementById('toggle')

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

toggle.addEventListener('click',(e)=>{
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    }else{
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
})

function clock(){
    var date = new Date();
    let secNeedleAngle = date.getSeconds()*6;
    let minNeedleAngle = date.getMinutes()*6;


    secondNeedle.style.transform = `tanslate(-50%,-50%)`;
    secondNeedle.style.transform = `rotateZ(${secNeedleAngle}deg)`;

    minuteNeedle.style.transform = `tanslate(-50%,-50%)`;
    minuteNeedle.style.transform = `rotateZ(${minNeedleAngle}deg)`;

    if(date.getHours()>12){
        hourNeedle.style.transform = `tanslate(-50%,-50%)`;
        hourNeedle.style.transform = `rotateZ(${(date.getHours()-12)*30}deg)`;
    }else{
        hourNeedle.style.transform = `tanslate(-50%,-50%)`;
        hourNeedle.style.transform = `rotateZ(${date.getHours()*30}deg)`;
    }  
    setTime(date);
    setDate(date);
}

function setTime(date){
    var currentHour = date.getHours();
    var currentMinutes = date.getMinutes();

    if(currentHour < 10){
        currentHour = '0'+currentHour;
    }
    if(currentMinutes < 10){
        currentMinutes = '0'+currentMinutes;
    }


    if(date.getHours()>12){
  document.querySelector('.time').innerHTML = `${Number(currentHour)-12}:${currentMinutes} PM`
        
    }else{
        document.querySelector('.time').innerHTML = `${currentHour}:${currentMinutes} AM`
    }
}

function setDate(date){
    document.querySelector('.weekday').innerHTML = `${weekday[date.getDay()]}`
    document.querySelector('.day').innerHTML = `${date.getDate()}`
    document.querySelector('.month').innerHTML = `${monthNames[date.getMonth()]}`
}

clock();
setInterval(clock,1000);