const movies = 
[
  {
      "id": 1,
      "title": "Inception",
      "year": 2010,
      "rating": 8.8,
      "poster": "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
  },
  {
      "id": 2,
      "title": "Interstellar",
      "year": 2014,
      "rating": 8.6,
      "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
      "id": 3,
      "title": "The Dark Knight",
      "year": 2008,
      "rating": 9.0,
      "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
      "id": 4,
      "title": "The Matrix",
      "year": 1999,
      "rating": 8.7,
      "poster": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
      "id": 5,
      "title": "Avengers: Endgame",
      "year": 2019,
      "rating": 8.4,
      "poster": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
      "id": 6,
      "title": "Titanic",
      "year": 1997,
      "rating": 7.8,
      "poster": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
      "id": 7,
      "title": "Joker",
      "year": 2019,
      "rating": 8.4,
      "poster": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
      "id": 8,
      "title": "The Lion King",
      "year": 1994,
      "rating": 8.5,
      "poster": "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
  },
  {
      "id": 9,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "rating": 9.3,
      "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
      "id": 10,
      "title": "Forrest Gump",
      "year": 1994,
      "rating": 8.8,
      "poster": "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
  }
]

        function displayMovies(movieList) {
            const container = document.getElementById('movieContainer');
            container.innerHTML = '';
            movieList.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.year}</p>
                    <p>⭐ ${movie.rating}</p>
                `;
                container.appendChild(movieCard);
            });
        }

        document.getElementById('searchBar').addEventListener('input', (e) => {
            const searchText = e.target.value.toLowerCase();
            const filteredMovies = movies.filter(movie => 
                movie.title.toLowerCase().includes(searchText)
            );
            displayMovies(filteredMovies);
        });

        displayMovies(movies);
