import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <motion.div 
          className={styles.logo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}></div>
            <span className={styles.logoText}>Y</span>
          </div>
        </motion.div>

        {/* Right side navigation group */}
        <div className={styles.rightNavGroup}>
          {/* Navigation */}
          <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
            <motion.ul 
              className={styles.navList}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              <NavItem to="/home" label="About" number="00" end />
              <NavItem to="/resume" label="Experience" number="01" />
              <NavItem to="/github" label="Projects" number="02" />
              <NavItem to="/contact" label="Contact" number="03" />
            </motion.ul>
          </nav>

          {/* Resume Button */}
          <motion.div 
            className={styles.resumeButton}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>
              Resume
            </a>
          </motion.div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className={styles.mobileMenuToggle} onClick={toggleMenu}>
          <div className={`${styles.menuBar} ${isMenuOpen ? styles.active : ''}`}></div>
        </div>
      </div>
    </header>
  )
}

const NavItem = ({ to, label, number, end }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.navItem}
    >
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
      >
        <span className={styles.navNumber}>{number}.</span>
        <span className={styles.navLabel}>{label}</span>
      </NavLink>
    </motion.li>
  )
}

export default Navbar