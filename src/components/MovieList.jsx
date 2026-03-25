import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, idx) => (
        <MovieCard key={`${movie.title}-${idx}`} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
