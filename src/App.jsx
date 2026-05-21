import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const Home        = lazy(() => import('./pages/Home'))
const About       = lazy(() => import('./pages/About'))
const Contact     = lazy(() => import('./pages/Contact'))
const Projects    = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Todo        = lazy(() => import('./pages/Todo'))
const News        = lazy(() => import('./pages/News'))
const NotFound    = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
      <div className="spinner" />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Nav />
        <Header />
        <main className="app-main">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/news" element={<News />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
