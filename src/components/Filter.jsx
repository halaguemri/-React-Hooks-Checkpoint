import React, { useState } from 'react'

const Filter = ({ filterTitle, minRating, onFilterTitleChange, onMinRatingChange, onAddMovie }) => {
  const [form, setForm] = useState({ title: '', description: '', posterURL: '', rating: 1 })

  const handleInput = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: name === 'rating' ? Number(value) : value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.title.trim() || !form.description.trim() || !form.posterURL.trim()) {
      alert('Please complete title, description, and poster URL.')
      return
    }

    onAddMovie({ ...form })
    setForm({ title: '', description: '', posterURL: '', rating: 1 })
  }

  return (
    <section className="filter-panel">
      <h2>Filter movies</h2>
      <div className="filter-inputs">
        <input
          type="text"
          placeholder="Search by title"
          value={filterTitle}
          onChange={(e) => onFilterTitleChange(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="5"
          value={minRating}
          onChange={(e) => onMinRatingChange(Number(e.target.value))}
        />
      </div>

      <h2>Add a new movie</h2>
      <form className="movie-form" onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleInput} placeholder="Title" />
        <input name="description" value={form.description} onChange={handleInput} placeholder="Description" />
        <input name="posterURL" value={form.posterURL} onChange={handleInput} placeholder="Poster URL" />
        <input name="rating" type="number" min="1" max="5" value={form.rating} onChange={handleInput} />
        <button type="submit">Add Movie</button>
      </form>
    </section>
  )
}

export default Filter
