export function WeatherCard({ weather }) {
  const { name, sys, main, weather: conditions, wind } = weather
  const condition = conditions[0]
  const iconUrl = `https://openweathermap.org/img/wn/${condition.icon}@2x.png`

  return (
    <div className="weather-card">
      <div className="weather-location">
        <h2>{name}</h2>
        <span>{sys.country}</span>
      </div>

      <div className="weather-main">
        <img
          className="weather-icon"
          src={iconUrl}
          alt={condition.description}
        />
        <div className="weather-temp">{Math.round(main.temp)}°C</div>
        <div className="weather-desc">{condition.description}</div>
        <div className="weather-feels">체감 {Math.round(main.feels_like)}°C</div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">습도</span>
          <span className="detail-value">{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">바람</span>
          <span className="detail-value">{wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">최고</span>
          <span className="detail-value">{Math.round(main.temp_max)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">최저</span>
          <span className="detail-value">{Math.round(main.temp_min)}°C</span>
        </div>
      </div>
    </div>
  )
}
