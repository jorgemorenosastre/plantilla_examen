import axios from 'axios';
import { Movie } from '../models/movie';

const API_URL = 'http://10.0.2.2:3000'; // Usa tu IP local para desarrollo

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get<Movie[]>(`${API_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
