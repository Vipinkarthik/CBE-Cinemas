import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from an API or a static JSON file
    axios.get('/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Available Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
