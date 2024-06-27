import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './search.css'

export default function SearchInput() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search?term=${term}`)
  }

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        className="custom-search-input"
        aria-label="Search"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <button className="custom-search-button" type="submit">Search</button>
    </form>
  );
}
