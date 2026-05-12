export default function About() {
  return (
    <div className="page">
      <div className="content-card">
        <h2>소개</h2>
        <p>
          OpenWeatherMap API를 활용한 React 날씨 앱입니다.
          도시명 검색 또는 GPS로 현재 위치의 실시간 날씨를 확인할 수 있습니다.
        </p>
        <ul className="feature-list">
          <li>도시명으로 전 세계 날씨 검색</li>
          <li>GPS 기반 현재 위치 날씨</li>
          <li>온도 · 습도 · 바람 · 날씨 상태 제공</li>
          <li>모바일 최적화 UI</li>
        </ul>
        <div className="stack-badges">
          <span className="badge">React 18</span>
          <span className="badge">Vite</span>
          <span className="badge">React Router</span>
          <span className="badge">OpenWeatherMap</span>
        </div>
      </div>
    </div>
  )
}
