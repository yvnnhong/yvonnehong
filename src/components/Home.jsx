import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaBrain,
  FaRocket, 
  FaCode,
  FaCogs,
  FaChartLine,
  FaEye,
  FaLightbulb
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
      {/* Fixed Social Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
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

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroMetadata}
          >
            <span className={styles.metaTag}>ML ENGINEER</span>
            <span className={styles.metaTag}>MLOps Pipelines</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.heroTitle}
          >
            Hello, my name is
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.heroName}
          >
            Yvonne Hong.
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.heroSubtitle}
          >
            I love exploring new things!
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.heroDescription}
          >
            I'm a recent graduate at UC San Diego with a B.S in Mathematics-Computer Science; 
            exclusively interested in machine learning, computer vision, and model 
            optimization for applied AI systems.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={styles.heroDescription2}
          >
            I thrive on picking up new concepts quickly and applying them in hands-on ML work!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={styles.ctaButtons}
          >
            <Link to="/contact" className={styles.primaryBtn}>
              Get In Touch
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.heroVisuals}
        >
          <div className={styles.profileWrapper}>
            <img src={profilePic} alt="Yvonne Hong" className={styles.profileImage} />
          </div>
          
          <div className={styles.techStack}>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaBrain /></div>
              <div className={styles.techContent}>
                <h4>Machine Learning</h4>
                <p>TensorFlow • PyTorch • scikit-learn</p>
              </div>
            </div>
            
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaEye /></div>
              <div className={styles.techContent}>
                <h4>Computer Vision</h4>
                <p>OpenCV • CNN • Object Detection</p>
              </div>
            </div>
            
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaLightbulb /></div>
              <div className={styles.techContent}>
                <h4>NLP & RAG</h4>
                <p>Hugging Face • LLMs • Vector DB</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className={styles.achievementsSection}
      >
        <div className={styles.achievementCards}>
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaChartLine />
            </div>
            <div className={styles.achievementContent}>
              <h3>98.4% F1-Score</h3>
              <p>Achieved industry-grade performance in real-time anomaly detection with zero false positives</p>
            </div>
          </div>
          
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaBrain />
            </div>
            <div className={styles.achievementContent}>
              <h3>Multi-Task CNN</h3>
              <p>Built production-ready food classification system with 101 classes and nutrition regression</p>
            </div>
          </div>
          
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaRocket />
            </div>
            <div className={styles.achievementContent}>
              <h3>RAG Pipeline</h3>
              <p>Production-ready QA system using TensorFlow, Hugging Face, and vector databases</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className={styles.expertiseSection}
      >
        <div className={styles.expertiseGrid}>
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaCode className={styles.expertiseIcon} />
              <h3>Machine Learning</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>Deep Learning</h4>
                <p>TensorFlow, PyTorch, Keras, Neural Networks, CNNs, RNNs</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>ML Libraries</h4>
                <p>scikit-learn, pandas, NumPy, matplotlib, seaborn</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Languages</h4>
                <p>Python, Java, C++, SQL, JavaScript</p>
              </div>
            </div>
          </div>
          
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaEye className={styles.expertiseIcon} />
              <h3>Computer Vision</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>Vision Libraries</h4>
                <p>OpenCV, PIL/Pillow, albumentations, torchvision</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Techniques</h4>
                <p>Object Detection, Image Classification, Data Augmentation</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Architectures</h4>
                <p>ResNet, CNNs, Attention Mechanisms, Multi-task Learning</p>
              </div>
            </div>
          </div>
          
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaLightbulb className={styles.expertiseIcon} />
              <h3>NLP & Generative AI</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>NLP Stack</h4>
                <p>Hugging Face, spaCy, NLTK, sentence-transformers</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>LLMs & RAG</h4>
                <p>Large Language Models, Vector Databases, RAG Systems</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>MLOps</h4>
                <p>Docker, FastAPI, Model Versioning, Performance Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Home