

const API_URL = 'https://api.themoviedb.org/3/discover/movie/?api_key=222d68ab7b4b2fdbfc1fbc112f2c6472&sort_by=popularity.desc';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie/?api_key=222d68ab7b4b2fdbfc1fbc112f2c6472&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const rating = document.getElementById('rating')

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
      const results = data.results;
    results.forEach((result,index) => {
        addMovie(result,index);  
    });
  });


function addMovie(result,index){
    const movie = document.createElement('div');
    movie.classList.add('movie');
    movie.innerHTML = '<img src="'+IMAGE_BASE_URL+result.backdrop_path+'" alt="movie img"><div class="movie-info"><h3>'+result.original_title+'</h3><span id = "rating" class="'+getRatingClass(result.vote_average)+'">'+result.vote_average+'</span></div><div class="overview"><h2>Overview</h2><p>'+result.overview+'</p></div>';  
    main.appendChild(movie);
}

function getRatingClass(vote){
    if(vote>=8){
        return 'green'
    }else if(vote<8 && vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const searchValue = search.value;
   if(searchValue && searchValue!==0){

       const url = 'https://api.themoviedb.org/3/search/movie/?api_key=222d68ab7b4b2fdbfc1fbc112f2c6472&query="'+searchValue+'"';;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const results = data.results;
        main.innerHTML = '';
      results.forEach((result,index) => {
          addMovie(result,index);  
      });
    });
   }
})