import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <div className="not-found">
        <div className="not-found-code">404</div>
        <h2>페이지를 찾을 수 없어요</h2>
        <p>존재하지 않는 주소입니다.</p>
        <Link to="/" className="not-found-btn">홈으로 돌아가기</Link>
      </div>
    </div>
  )
}
