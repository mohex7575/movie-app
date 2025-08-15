import axios from 'axios';

const API_KEY = 'YOUR_OMDB_API_KEY'; // احصل على مفتاح من http://www.omdbapi.com/
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    return response.data.Search || [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};