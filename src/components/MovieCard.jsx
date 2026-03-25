import React from 'react'

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie

  return (
    <div className="movie-card">
      <img src={posterURL} alt={`${title} poster`} className="movie-poster" />
      <div className="movie-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <strong>Rating: {rating} / 5</strong>
      </div>
    </div>
  )
}

export default MovieCard
