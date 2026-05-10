import { useState } from 'react'

export function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const city = input.trim()
    if (!city) return
    onSearch(city)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="도시명을 입력하세요 (예: Seoul, Tokyo)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
        autoComplete="off"
      />
      <button className="search-btn" type="submit" disabled={loading || !input.trim()}>
        {loading ? '검색 중…' : '검색'}
      </button>
    </form>
  )
}
