import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'} 
          alt={movie.Title} 
        />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
};

export default MovieCard;