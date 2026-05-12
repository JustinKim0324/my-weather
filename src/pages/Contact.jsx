export default function Contact() {
  return (
    <div className="page">
      <div className="content-card">
        <h2>연락</h2>
        <p>피드백이나 문의 사항이 있으면 아래로 연락해주세요.</p>
        <ul className="contact-list">
          <li>
            <span className="contact-label">GitHub</span>
            <a
              href="https://github.com/JustinKim0324/my-weather"
              target="_blank"
              rel="noreferrer"
            >
              JustinKim0324/my-weather
            </a>
          </li>
          <li>
            <span className="contact-label">Email</span>
            <a href="mailto:nsync123justin0324@gmail.com">
              nsync123justin0324@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
