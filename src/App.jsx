import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import VantaBirdsBackground from './components/VantaBirdsBackground'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <Router basename="/yvonnehong">
      <div className="app">
        <VantaBirdsBackground />
        
        {loading ? (
          <div className="loader-container">
            <div className="loader">
              <span className="loader-text">Quantitative</span>
              <div className="loader-dot"></div>
            </div>
            <div className="loader-name">Yvonne Hong</div>
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-text">Initializing portfolio...</span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        ) : (
          <div className="content">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </main>
          </div>
        )}
      </div>
    </Router>
  )
}

export default App