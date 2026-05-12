import { NavLink } from 'react-router-dom'

const links = [
  { to: '/',         label: '날씨' },
  { to: '/projects', label: '프로젝트' },
  { to: '/about',    label: '소개' },
  { to: '/contact',  label: '연락' },
]

export function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">🌤</span>
      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
