import { useEffect, useRef } from 'react'
import styles from './VantaBirdsBackground.module.css'

const VantaBirdsBackground = () => {
  const vantaRef = useRef(null)
  
  useEffect(() => {
    // Load Three.js and Vanta.js from CDN
    const loadScripts = async () => {
      // Check if scripts are already loaded
      if (window.THREE && window.VANTA) {
        initVanta()
        return
      }
      
      // Load Three.js
      const threeScript = document.createElement('script')
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
      threeScript.async = true
      threeScript.onload = () => {
        // After Three.js loads, load Vanta.js
        const vantaScript = document.createElement('script')
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js'
        vantaScript.async = true
        vantaScript.onload = () => {
          // Once Vanta is loaded, initialize the effect
          initVanta()
        }
        document.body.appendChild(vantaScript)
      }
      document.body.appendChild(threeScript)
    }
    
    // Initialize Vanta effect
    const initVanta = () => {
      if (!vantaRef.current || !window.VANTA) return
      
      // Create the Vanta effect
      const vantaEffect = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0a0f1a, // Dark background
        color1: 0x64ffda, // Light mint/teal (primary)
        color2: 0x88c0ff, // Light blue (secondary)
        colorMode: "varianceGradient",
        birdSize: 1.30,
        wingSpan: 30.00,
        speedLimit: 5.00,
        separation: 80.00,
        alignment: 30.00,
        cohesion: 30.00,
        quantity: 3.00 // Reduce quantity for better performance
      })
      
      // Cleanup function
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }
    
    // Start loading scripts
    loadScripts()
    
    // Cleanup on unmount
    return () => {
      if (window.VANTA && window.VANTA.BIRDS) {
        const instance = window.VANTA.BIRDS
        if (instance && typeof instance.destroy === 'function') {
          instance.destroy()
        }
      }
    }
  }, [])
  
  return (
    <div ref={vantaRef} className={styles.particleContainer}></div>
  )
}

export default VantaBirdsBackground