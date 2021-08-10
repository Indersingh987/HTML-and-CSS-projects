const joke = document.getElementById('joke');
const jokeBtn = document.querySelector('.btn');

const config = {
    headers: {
        'Accept': 'application/json'
      },
}

jokeBtn.addEventListener('click',()=>{
    fetch(' https://icanhazdadjoke.com',config)
  .then(response => response.json())
  .then(data =>{
      joke.innerHTML = data.joke;
  });
})