import { useState, useCallback } from 'react'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export function useWeather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchByQuery = useCallback(async (query) => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
    if (!apiKey) {
      setError('.env 파일에 VITE_OPENWEATHER_API_KEY를 설정해주세요.')
      return
    }

    setLoading(true)
    setError(null)
    setWeather(null)

    try {
      const res = await fetch(`${BASE_URL}/weather?${query}&appid=${apiKey}&units=metric&lang=kr`)

      if (res.status === 404) throw new Error('도시를 찾을 수 없습니다.')
      if (res.status === 401) throw new Error('API 키가 유효하지 않습니다.')
      if (!res.ok) throw new Error(`오류가 발생했습니다. (${res.status})`)

      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchWeather = useCallback((city) => {
    return fetchByQuery(`q=${encodeURIComponent(city)}`)
  }, [fetchByQuery])

  const fetchWeatherByCoords = useCallback(({ lat, lon }) => {
    return fetchByQuery(`lat=${lat}&lon=${lon}`)
  }, [fetchByQuery])

  return { weather, loading, error, fetchWeather, fetchWeatherByCoords }
}
