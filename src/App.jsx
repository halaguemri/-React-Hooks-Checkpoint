import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Filter from './components/Filter'

const initialMovies = [
  {
    title: 'The Matrix',
    description: 'A hacker learns the truth about reality.',
    posterURL: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
    rating: 5,
  },
  {
    title: 'Stranger Things',
    description: 'A group of kids discover supernatural mysteries.',
    posterURL: 'https://m.media-amazon.com/images/I/71zHE8XxR7L._AC_SY679_.jpg',
    rating: 4,
  },
  {
    title: 'Inception',
    description: 'Dream heists and layered realities.',
    posterURL: 'https://m.media-amazon.com/images/I/51s8G6Eh6AL.jpg',
    rating: 5,
  },
]

function App() {
  const [movies, setMovies] = useState([])
  const [filterTitle, setFilterTitle] = useState('')
  const [minRating, setMinRating] = useState(1)

  useEffect(() => {
    setMovies(initialMovies)
  }, [])

  const addMovie = (movie) => {
    setMovies((prev) => [{ ...movie }, ...prev])
  }

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filterTitle.toLowerCase())
    const ratingMatch = movie.rating >= minRating
    return titleMatch && ratingMatch
  })

  return (
    <div className="app-container">
      <header>
        <h1>Movie App</h1>
        <p>Display and manage favorite movies/TV shows with React hooks.</p>
      </header>

      <Filter
        filterTitle={filterTitle}
        minRating={minRating}
        onFilterTitleChange={setFilterTitle}
        onMinRatingChange={setMinRating}
        onAddMovie={addMovie}
      />

      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <p className="empty-state">No movies match your filters.</p>
      )}
    </div>
  )
}

export default App
