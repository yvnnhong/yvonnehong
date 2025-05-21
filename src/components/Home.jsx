import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaChartLine, FaCode, FaBriefcase } from 'react-icons/fa'
import profilePic from '../assets/profile_pic.png' // Make sure this file path is correct
import styles from './Home.module.css'

const Home = () => {
  useEffect(() => {
    // Add any initialization code here
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.homeContainer}
    >
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroMetadata}
          >
            <span className={styles.metaTag}>Quantitative Developer</span>
            <span className={styles.metaDot}>•</span>
            <span className={styles.metaTag}>Financial Analyst</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.heroTitle}
          >
            Hi, I'm <span className="text-gradient">Yvonne Hong</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.heroDescription}
          >
            Building sophisticated quantitative models and algorithms for data-driven financial decision making.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.ctaButtons}
          >
            <Link to="/projects" className={styles.primaryBtn}>
              View My Portfolio
              <span className={styles.btnShine}></span>
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.socialLinks}
          >
            <a href="https://github.com/yvnnhong" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="http://www.linkedin.com/in/yvnnhong" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
            <Link to="/contact" className={styles.socialIcon}>
              <FaEnvelope />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.heroVisuals}
        >
          <div className={styles.profileWrapper}>
            <div className={styles.profileOuterCircle}></div>
            <div className={styles.profileInnerCircle}></div>
            <img src={profilePic} alt="Yvonne Hong" className={styles.profileImage} />
            <div className={styles.profileGlow}></div>
          </div>
          
          <div className={styles.statsCards}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}><FaCode /></div>
              <div className={styles.statContent}>
                <h3>Algorithms</h3>
                <p>Python & ML</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}><FaChartLine /></div>
              <div className={styles.statContent}>
                <h3>Analysis</h3>
                <p>Quant Models</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}><FaBriefcase /></div>
              <div className={styles.statContent}>
                <h3>Finance</h3>
                <p>Portfolio Strategy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className={styles.quickInfoSection}
      >
        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <h3>Background</h3>
            <p>Mathematics-Computer Science student at UCSD, passionate about quantitative finance and algorithmic portfolio strategies.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>Focus</h3>
            <p>Developing robust financial models using Python, statistics, and machine learning for risk optimization and alpha generation.</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>Skills</h3>
            <p>Python, CVXPY, Pandas, statistical analysis, algorithmic trading, risk models, and portfolio optimization.</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Home