import React from 'react';
import { Link } from 'react-router-dom';
import { getPosterUrl } from '../utils/api';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img 
          src={getPosterUrl(movie.poster_path)} 
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <p>{movie.release_date && movie.release_date.substring(0,4)}</p>
        {movie.vote_average && (
          <p>⭐ {movie.vote_average.toFixed(1)}/10</p>
        )}
      </Link>
    </div>
  );
};

export default MovieCard;