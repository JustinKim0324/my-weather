import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'
import { useWeather } from './hooks/useWeather'
import { useGeolocation } from './hooks/useGeolocation'

export default function App() {
  const { weather, loading, error, fetchWeather, fetchWeatherByCoords } = useWeather()
  const { locating, geoError, getLocation } = useGeolocation()

  async function handleGPS() {
    try {
      const coords = await getLocation()
      fetchWeatherByCoords(coords)
    } catch {
      // geoError 상태로 표시됨
    }
  }

  const isLoading = loading || locating
  const displayError = error || geoError

  return (
    <div className="app">
      <header className="app-header">
        <h1>날씨 앱</h1>
      </header>

      <main className="app-main">
        <SearchBar onSearch={fetchWeather} loading={isLoading} />

        <button className="gps-btn" onClick={handleGPS} disabled={isLoading}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          </svg>
          {locating ? '위치 확인 중…' : '현재 위치로 검색'}
        </button>

        {isLoading && (
          <div className="status-box">
            <div className="spinner" />
            <p>{locating ? '위치를 확인하는 중...' : '날씨 정보를 불러오는 중...'}</p>
          </div>
        )}

        {displayError && !isLoading && (
          <div className="status-box error-box">
            <p>{displayError}</p>
          </div>
        )}

        {weather && !isLoading && (
          <WeatherCard weather={weather} />
        )}

        {!weather && !isLoading && !displayError && (
          <div className="status-box hint-box">
            <p>도시명을 검색하거나 현재 위치를 사용하세요.</p>
          </div>
        )}
      </main>
    </div>
  )
}
