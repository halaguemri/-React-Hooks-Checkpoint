import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie, id }) => {
  const { title, description, posterURL, rating } = movie

  return (
    <Link to={`/movie/${id}`} className="movie-card-link">
      <div className="movie-card">
        <img src={posterURL} alt={`${title} poster`} className="movie-poster" />
        <div className="movie-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <strong>Rating: {rating} / 5</strong>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
