import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails, getPosterUrl } from '../utils/api';
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
        setError('حدث خطأ أثناء جلب تفاصيل الفيلم');
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
    <div className="movie-details-container">
      <Link to="/" className="back-button">
        ← العودة للقائمة
      </Link>

      <div className="movie-details">
        <img 
          src={getPosterUrl(movie.poster_path, 'w500')} 
          alt={movie.title}
          className="movie-poster"
        />
        
        <div className="movie-info">
          <h1>{movie.title} ({movie.release_date && movie.release_date.substring(0,4)})</h1>
          
          {movie.tagline && <p className="tagline">{movie.tagline}</p>}
          
          <div className="rating">
            ⭐ {movie.vote_average?.toFixed(1)}/10 ({movie.vote_count} تقييمات)
          </div>
          
          <p><strong>المدة:</strong> {movie.runtime} دقيقة</p>
          <p><strong>النوع:</strong> {movie.genres?.map(g => g.name).join('، ')}</p>
          
          {movie.credits?.crew.find(c => c.job === 'Director') && (
            <p><strong>المخرج:</strong> {movie.credits.crew.find(c => c.job === 'Director').name}</p>
          )}
          
          <h3>القصة:</h3>
          <p className="overview">{movie.overview || 'لا يوجد وصف متوفر'}</p>
          
          {movie.credits?.cast.length > 0 && (
            <>
              <h3>أبرز الممثلين:</h3>
              <div className="cast">
                {movie.credits.cast.slice(0, 5).map(actor => (
                  <div key={actor.id} className="actor">
                    {actor.profile_path ? (
                      <img 
                        src={getPosterUrl(actor.profile_path, 'w185')} 
                        alt={actor.name}
                      />
                    ) : (
                      <div className="no-photo">{actor.name}</div>
                    )}
                    <span>{actor.name}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;