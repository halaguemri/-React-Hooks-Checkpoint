import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const MovieDetail = ({ movies }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find((m) => m.id === parseInt(id))

  if (!movie) {
    return <div>Movie not found</div>
  }

  const { title, description, posterURL, rating, trailerURL } = movie

  return (
    <div className="movie-detail">
      <button onClick={() => navigate('/')}>Back to Home</button>
      <h1>{title}</h1>
      <img src={posterURL} alt={`${title} poster`} className="movie-poster" />
      <p>{description}</p>
      <strong>Rating: {rating} / 5</strong>
      <div className="trailer">
        <h2>Trailer</h2>
        <iframe
          width="560"
          height="315"
          src={trailerURL}
          title={`${title} trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default MovieDetail