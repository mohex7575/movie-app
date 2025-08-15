import axios from 'axios';

const API_KEY = 'ce155de6932eba40f13a616148fe9536'; // استبدل هذا بمفتاحك من TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
        language: 'ar-AR', // لنتائج بالعربية (اختياري)
      }
    });
    return response.data.results || [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'ar-AR', // لتفاصيل بالعربية
        append_to_response: 'credits' // للحصول على معلومات الممثلين والمخرج
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const getPosterUrl = (path, size = 'w500') => {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : 'https://via.placeholder.com/300x450?text=No+Poster';
};