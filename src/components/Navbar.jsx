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
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <motion.ul 
            className={styles.navList}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <NavItem to="/home" label="00. About" end />
            <NavItem to="/resume" label="01. Experience" />
            <NavItem to="/github" label="02. Projects" />
            <NavItem to="/contact" label="03. Contact" />
          </motion.ul>
        </nav>
        
        <div className={styles.mobileMenuToggle} onClick={toggleMenu}>
          <div className={`${styles.menuBar} ${isMenuOpen ? styles.active : ''}`}></div>
        </div>
      </div>
    </header>
  )
}

const NavItem = ({ to, label, end }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
      >
        {label}
        <div className={styles.navLinkEffect}>
          <span className={styles.navHoverLine}></span>
        </div>
      </NavLink>
    </motion.li>
  )
}

export default Navbar