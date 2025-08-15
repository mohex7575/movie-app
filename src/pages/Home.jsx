import React, { useState } from 'react';
import { searchMovies } from '../utils/api';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Spinner from '../components/Spinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      setError('حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '30px'
      }}>
        🎬 بحث الأفلام
      </h1>
      
      <SearchBar onSearch={handleSearch} />
      
      {loading && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Spinner />
        </div>
      )}
      
      {error && (
        <p style={{ 
          color: 'red', 
          textAlign: 'center',
          padding: '10px',
          backgroundColor: '#ffeeee',
          borderRadius: '4px'
        }}>
          {error}
        </p>
      )}
      
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        !loading && (
          <p style={{ 
            textAlign: 'center', 
            color: '#666',
            marginTop: '20px'
          }}>
            اكتب اسم فيلم في شريط البحث للبدء
          </p>
        )
      )}
    </div>
  );
};

export default Home;