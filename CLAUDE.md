# my-weather

React 기반 날씨 앱. 현재 위치 또는 도시명으로 날씨를 조회하고, 모바일 환경에 최적화된 UI를 제공한다.

## Tech Stack

- **Framework**: React 18 + Vite
- **API**: OpenWeatherMap REST API
- **Styling**: CSS (mobile-first, responsive)
- **Language**: JavaScript (JSX)

## Dev Commands

```bash
npm install        # 의존성 설치
npm run dev        # 개발 서버 (http://localhost:5173)
npm run build      # 프로덕션 빌드 (dist/)
npm run preview    # 빌드 결과 로컬 미리보기
```

## Environment Variables

`.env` 파일을 루트에 생성하고 아래 변수를 설정한다. `.env`는 `.gitignore`에 포함되어야 한다.

```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

코드에서 접근: `import.meta.env.VITE_OPENWEATHER_API_KEY`

## Project Structure

```
src/
  components/      # UI 컴포넌트 (WeatherCard, SearchBar, ...)
  hooks/           # 커스텀 훅 (useWeather, useGeolocation, ...)
  pages/           # 페이지 컴포넌트 (Home, ...)
  assets/          # 정적 이미지/아이콘
  App.jsx
  main.jsx
```

## OpenWeatherMap API

Base URL: `https://api.openweathermap.org/data/2.5`

| 엔드포인트 | 설명 |
|---|---|
| `GET /weather?q={city}&appid={key}&units=metric&lang=kr` | 도시명으로 현재 날씨 |
| `GET /weather?lat={lat}&lon={lon}&appid={key}&units=metric&lang=kr` | 좌표로 현재 날씨 |
| `GET /forecast?q={city}&appid={key}&units=metric&lang=kr` | 5일 예보 (3시간 간격) |

- `units=metric` → 섭씨(°C)
- `lang=kr` → 한국어 날씨 설명

## Mobile

- `index.html`에 `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 포함
- CSS는 모바일 우선(mobile-first)으로 작성하고 `@media (min-width: 768px)`로 데스크탑 분기
- 터치 영역 최소 44×44px 유지

## Conventions

- 컴포넌트 파일명과 함수명은 **PascalCase** (`WeatherCard.jsx`)
- 훅은 `use` 접두사 (`useWeather.js`)
- API 호출은 커스텀 훅 또는 별도 `api.js` 모듈로 분리 — 컴포넌트에 직접 fetch 금지
- named export 사용, default export는 페이지 컴포넌트에만 허용
- 환경변수 키를 소스코드에 하드코딩 금지
