//* Movie API key
const API_URL = 'https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/4/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const form = document.getElementById('form');
const search = document.getElementById('search')
const main = document.getElementById('main');

const showMovies = movies => {
  main.innerText = '';

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class='${getClassByRate(vote_average)}'>${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
          ${overview}
        </div>
    </div>
    `

    main.appendChild(movieEl);
  });
}

const getClassByRate = vote => {
  if(vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

getMovies(API_URL)

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchTerm = search.value;

  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
})