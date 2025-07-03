import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaDatabase, 
  FaChartLine, 
  FaCode, 
  FaCogs, 
  FaRocket, 
  FaBrain,
  FaStream,
  FaCloudUploadAlt,
  FaPython
} from 'react-icons/fa'
import profilePic from '../assets/profile_pic.png'
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
            <span className={styles.metaTag}>Data Engineer</span>
            <span className={styles.metaTag}>ML Engineer</span>
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
            Building scalable data pipelines and machine learning systems that transform raw data into actionable insights. Passionate about streaming architectures, anomaly detection, and large-scale data processing.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.ctaButtons}
          >
            <Link to="/projects" className={styles.primaryBtn}>
              <FaRocket />
              Explore My Projects
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              <FaEnvelope />
              Get In Touch
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
            <div className={styles.profileOuterRing}>
              <div className={styles.dataPoint}></div>
              <div className={styles.dataPoint}></div>
              <div className={styles.dataPoint}></div>
            </div>
            <div className={styles.profileInnerRing}>
              <div className={styles.mlNode}></div>
              <div className={styles.mlNode}></div>
            </div>
            <img src={profilePic} alt="Yvonne Hong" className={styles.profileImage} />
            <div className={styles.profileGlow}></div>
          </div>
          
          <div className={styles.techStack}>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaDatabase /></div>
              <div className={styles.techContent}>
                <h4>Data Engineering</h4>
                <p>Kafka • DuckDB • ETL</p>
              </div>
            </div>
            
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaBrain /></div>
              <div className={styles.techContent}>
                <h4>Machine Learning</h4>
                <p>Python • scikit-learn</p>
              </div>
            </div>
            
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaStream /></div>
              <div className={styles.techContent}>
                <h4>Real-time Processing</h4>
                <p>Streaming • Anomaly Detection</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className={styles.achievementsSection}
      >
        <div className={styles.achievementCards}>
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaChartLine />
            </div>
            <div className={styles.achievementContent}>
              <h3>98.4% F1-Score</h3>
              <p>Achieved industry-leading performance in real-time anomaly detection with zero false positives</p>
            </div>
          </div>
          
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaDatabase />
            </div>
            <div className={styles.achievementContent}>
              <h3>47GB Processed</h3>
              <p>Built scalable pipelines processing massive eBird datasets with SQL optimization</p>
            </div>
          </div>
          
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaCogs />
            </div>
            <div className={styles.achievementContent}>
              <h3>85% Efficiency</h3>
              <p>Automated ETL workflows reducing manual processing time through intelligent automation</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className={styles.expertiseSection}
      >
        <div className={styles.expertiseGrid}>
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaCode className={styles.expertiseIcon} />
              <h3>Technical Expertise</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>Languages</h4>
                <p>Python, Java, C++, SQL, JavaScript, TypeScript</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Data Engineering</h4>
                <p>Apache Kafka, DuckDB, SQLite, MongoDB, ETL Pipelines</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Machine Learning</h4>
                <p>scikit-learn, pandas, NumPy, matplotlib, seaborn</p>
              </div>
            </div>
          </div>
          
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaCloudUploadAlt className={styles.expertiseIcon} />
              <h3>Infrastructure & Cloud</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>Cloud Platforms</h4>
                <p>AWS, Google Cloud Platform, Supabase, Render</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>DevOps</h4>
                <p>Docker, Git/CI-CD, RESTful APIs, Postman</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Web Technologies</h4>
                <p>React.js, Node.js, Express.js, Next.js, Flask</p>
              </div>
            </div>
          </div>
          
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaPython className={styles.expertiseIcon} />
              <h3>Data Science Focus</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>Analytics</h4>
                <p>Statistical modeling, time series analysis, trend detection</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Specializations</h4>
                <p>Anomaly detection, real-time streaming, large-scale data processing</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Experience</h4>
                <p>ETL automation, SQL optimization, containerized microservices</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Home