import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../utils/api';
import Spinner from '../components/Spinner';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('فشل في جلب تفاصيل الفيلم. حاول مرة أخرى.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <p className="error">{error}</p>;
  if (!movie) return <p>لا يوجد فيلم بهذا المعرف</p>;

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'} 
          alt={movie.Title} 
        />
      </div>
      <div className="movie-info">
        <h1>{movie.Title} ({movie.Year})</h1>
        <p><strong>التصنيف:</strong> {movie.Rated}</p>
        <p><strong>تاريخ الإصدار:</strong> {movie.Released}</p>
        <p><strong>المدة:</strong> {movie.Runtime}</p>
        <p><strong>النوع:</strong> {movie.Genre}</p>
        <p><strong>المخرج:</strong> {movie.Director}</p>
        <p><strong>الكتاب:</strong> {movie.Writer}</p>
        <p><strong>الممثلون:</strong> {movie.Actors}</p>
        <p><strong>القصة:</strong> {movie.Plot}</p>
        <p><strong>التقييم:</strong> {movie.imdbRating}/10 (IMDb)</p>
      </div>
    </div>
  );
};

export default MovieDetails;