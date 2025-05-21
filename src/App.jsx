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
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    // Simulate initial loading with progressive loading bar
    const loadingDuration = 2000
    const intervalTime = 20
    const steps = loadingDuration / intervalTime
    const progressIncrement = 100 / steps
    
    let currentProgress = 0
    const progressInterval = setInterval(() => {
      currentProgress += progressIncrement
      setProgress(Math.min(currentProgress, 100))
      
      if (currentProgress >= 100) {
        clearInterval(progressInterval)
        setLoading(false)
      }
    }, intervalTime)
    
    return () => clearInterval(progressInterval)
  }, [])
  
  return (
    <Router basename="/yvonnehong">
      <div className="app">
        <VantaBirdsBackground />
        
        {loading ? (
          <div className="loader-container">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-text">Initializing portfolio...</span>
              <span className="terminal-cursor"></span>
            </div>
            <div className="loading-bar-container">
              <div 
                className="loading-bar" 
                style={{ width: `${progress}%` }}
              ></div>
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

/*try to fix 404 issue*/

export default App