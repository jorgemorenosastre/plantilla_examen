import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../models/movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: movie.imagen }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.nombre}</Text>
        <Text style={styles.year}>{movie.año}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {movie.descripcion}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  year: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});

export default MovieCard;
