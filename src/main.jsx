import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './sections/Header.jsx'
import AboutMe from './sections/AboutMe.jsx'
import Projects from './sections/Projects.jsx'
import Home from './sections/Home.jsx'
import Footer from './sections/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </>,
)
