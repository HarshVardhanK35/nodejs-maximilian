const addMovieButton = document.getElementById('add-movie-btn')
const searchMovieButton = document.getElementById('search-btn')

const movies = []

const renderMovieList = () => {

  const movieList = document.getElementById('movie-list')

  if(movies.length === 0) {
    movieList.classList.remove('visible')
    return
  }
  else{
    movieList.classList.add('visible')
  }
  movieList.innerHTML = ''

  movies.forEach((movie) => {
    const movieEl = document.createElement('li')
    movieEl.textContent = movie.info.title
    movieList.append(movieEl)
  })
}

const addMovieHandler = () =>  {
  const title = document.getElementById('title').value
  const extraName = document.getElementById('extra-name').value
  const extraValue = document.getElementById('extra-value').value

  if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random()
  }

  movies.push(newMovie)
  console.log(movies)
  renderMovieList()
}

addMovieButton.addEventListener('click', addMovieHandler)