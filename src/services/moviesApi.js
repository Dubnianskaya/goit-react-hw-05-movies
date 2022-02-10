import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '927a57a490f077516f7878eb9440d7ae';

export const getPopularMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    return response.data;
}

export const getMoviesByQuery = async (query) => {
    const response = await axios.get(`search/movie?api_key=${KEY}&query=${query}`);
    return response.data;
}

export const getMoviesById = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${KEY}`);
    return response.data;
}

export const getMovieCast = async (id) => {
    const response = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
    return response.data;
}

export const getMovieReviews = async (id) => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
    return response.data;
}
