import React, { useState } from 'react';
import { searchMovies } from '../utils/api';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/Movielist.jsx';
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
      setError('فشل في جلب البيانات. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <h1>ابحث عن أفلامك المفضلة</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <Spinner />}
      {error && <p className="error">{error}</p>}
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        !loading && <p>لا توجد نتائج. ابدأ بالبحث!</p>
      )}
    </div>
  );
};

export default Home;