import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaUniversity, FaLaptopCode, FaCogs, FaEye, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa'
import profilePic from '../assets/profile_pic.png'
import styles from './Resume.module.css'

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education')
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: i * 0.1
      }
    }),
    exit: { opacity: 0, y: -20 }
  }
  
  // Skills data - ML focused
  const skills = {
    programming: ['Python', 'Java', 'C/C++', 'SQL', 'JavaScript'],
    machineLearning: ['TensorFlow', 'PyTorch', 'scikit-learn', 'pandas', 'NumPy'],
    deepLearning: ['Computer Vision', 'Multi-task Learning', 'Ensemble Methods', 'Attention Mechanisms'],
    nlp: ['Hugging Face', 'spaCy', 'NLTK', 'Large Language Models', 'Generative AI'],
    tools: ['Docker', 'FastAPI', 'OpenCV', 'PIL/Pillow', 'Model Quantization']
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.resumeContainer}
    >
      <div className={styles.resumeHeader}>
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.pageTitle}
        >
          My <span className={styles.textGradient}>Resume</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.pageSubtitle}
        >
          Check out my experience, projects, and tech stack!
        </motion.p>
      </div>
      
      <div className={styles.resumeContent}>
        <div className={styles.sidebarProfile}>
          <motion.div 
            className={styles.profileSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.profileImageWrapper}>
              <img src={profilePic} alt="Yvonne Hong" className={styles.profileImage} />
            </div>
            
            <div className={styles.profileInfo}>
              <h2>Yvonne Hong</h2>
              <p className={styles.profileTitle}>Machine Learning Engineering, Computer Vision, & Generative AI</p>
              
              <div className={styles.profileMetrics}>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaBrain /></div>
                  <div className={styles.metricInfo}>
                    <h4>98.4%</h4>
                    <p>F1-Score</p>
                  </div>
                </div>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaRocket /></div>
                  <div className={styles.metricInfo}>
                    <h4>3</h4>
                    <p>ML Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className={styles.mainContent}>
          <div className={styles.tabsSection}>
            <div className={styles.tabsNav}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'education' ? styles.active : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <FaUniversity />
                <span>Education</span>
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'experience' ? styles.active : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <FaLaptopCode />
                <span>Experience</span>
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'projects' ? styles.active : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                <FaCode />
                <span>Projects</span>
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'skills' ? styles.active : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                <FaCogs />
                <span>Skills</span>
              </button>
            </div>
            
            <div className={styles.tabsContent}>
              {activeTab === 'education' && (
                <motion.div 
                  key="education"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={styles.educationTab}
                >
                  <div className={styles.timelineWrapper}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaUniversity /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>2021 - 2025</div>
                        <h3>Bachelor of Science in Mathematics-Computer Science</h3>
                        <h4>University of California, San Diego (UCSD)</h4>
                        
                        <div className={styles.courseList}>
                          <h5>Relevant Coursework:</h5>
                          <ul>
                            <li>Machine Learning Algorithms, Artificial Intelligence: Probabilistic Reasoning & Decision-Making</li>
                            <li>Design & Analysis of Algorithms, Advanced Data Structures</li>
                            <li>Probability & Statistics, Applied & Computational Linear Algebra</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'experience' && (
                <motion.div 
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={styles.experienceTab}
                >
                  <div className={styles.timelineWrapper}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaLaptopCode /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>Jul 2024 - Sep 2024</div>
                        <h3>Data Engineering Intern</h3>
                        <h4>Tristero (Remote)</h4>
                        <ul className={styles.experienceList}>
                          <li>Built reusable ETL pipeline using Python, pandas, SQLite, and gspread-pandas to process multiple partner datasets, converting Google Sheets data into DataFrames to load into structured database tables</li>
                          <li>Executed SQL queries via Python across multiple databases to retrieve grouped DataFrames, partitioning datasets by TVL, contact frequency, and partner type into 50+ segmented CSV files</li>
                          <li>Automated complete DataFrame workflows (Google Sheets → pandas → SQLite tables → segmented Google Sheets) across dozens of data sources, reducing manual processing time by 85%</li>
                          <li>Configured Python logging.basicConfig with timestamp formatting to track DataFrame .shape validation, sqlite3 operations, and error handling throughout pipeline execution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'projects' && (
                <motion.div 
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={styles.projectsTab}
                >
                  <div className={styles.timelineWrapper}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaLightbulb /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>July 2025</div>
                        <h3>QA RAG MLops Pipeline</h3>
                        <h4>TensorFlow, Hugging Face, RAG, Generative AI</h4>
                        <ul className={styles.experienceList}>
                          <li>Built production-ready RAG system using TensorFlow, Hugging Face Transformers, and Large Language Models for document Q&A with ChromaDB and Pinecone vector databases, implementing semantic search, cosine similarity, and prompt engineering</li>
                          <li>Engineered NLP pipeline with spaCy, NLTK, sentence-transformers for 384-dimensional vector embeddings, PDF extraction, text chunking, OpenAI API, local Hugging Face models, retrieval augmentation, and embedding optimization</li>
                          <li>Developed MLOps architecture with Docker containerization, FastAPI REST APIs, Streamlit/Gradio interfaces, implementing vector database storage, model versioning, performance monitoring, batch processing, error handling, and logging infrastructure</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaEye /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>July 2025</div>
                        <h3>Multi-Task Food Classification System</h3>
                        <h4>PyTorch, OpenCV, Gradio, Computer Vision</h4>
                        <ul className={styles.experienceList}>
                          <li>Built multi-task CNN system using PyTorch for food classification (101 classes), cuisine detection (13 categories), and nutrition regression, implementing ResNet50 with task-specific attention mechanisms, focal loss, data augmentation, hyperparameter tuning, multi-task loss weighting, uncertainty-weighted optimization, and attention mechanisms implementation</li>
                          <li>Developed 4 CNN architectures including custom networks with depthwise separable convolutions, ensemble methods (weighted, stacked, mixture of experts), attention layers using PIL/Pillow and albumentations, dilated convolutions, Bayesian Model Averaging, uncertainty quantification, temperature scaling, model ensemble averaging, and attention visualization</li>
                          <li>Engineered production ML pipeline with FastAPI, Gradio interface, PyTorch model quantization, CUDA optimization, comprehensive benchmarking utilities, cross-platform deployment (ONNX, TorchScript, CoreML), model versioning, performance monitoring, real-time inference APIs, model switching capabilities, checkpoint management, and containerized deployment</li>
                          <li>Implemented ensemble techniques with gating networks, cross-modal attention fusion, mobile deployment optimization using OpenCV and scikit-learn evaluation metrics, gradient clipping, learning rate scheduling, early stopping, and MLOps architecture</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaChartLine /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>June 2025</div>
                        <h3>eBird Java Kafka Stream Processor</h3>
                        <h4>Java, Kafka, Docker, Python, SQL, DuckDB</h4>
                        <ul className={styles.experienceList}>
                          <li>Engineered real-time anomaly detection pipeline using Apache Kafka, Java 23, and Docker with JavaScript prototyping for algorithm validation, achieving 100% precision and 96.9% recall on 1,000+ synthetic observations</li>
                          <li>Processed 47GB eBird dataset using SQL and DuckDB to extract Mourning Dove population trends across 20 years (2005-2024), analyzing 174,422+ bird observations and 34,963+ individual records for baseline establishment and breeding pattern analysis</li>
                          <li>Developed machine learning prediction models using Python (pandas, NumPy, scikit-learn, seaborn) with polynomial regression (R² = 0.969), generating synthetic observations with realistic seasonal breeding patterns</li>
                          <li>Built end-to-end data pipeline (47GB eBird dataset → DuckDB SQL analysis → Python CSV processing → synthetic data generation → Kafka streaming → real-time anomaly detection → JSON alerts) with Maven build automation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'skills' && (
                <motion.div 
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={styles.skillsTab}
                >
                  <div className={styles.skillsContent}>
                    <div className={styles.skillSection}>
                      <h3>Programming Languages</h3>
                      <div className={styles.skillCards}>
                        {skills.programming.map((skill, index) => (
                          <motion.div 
                            key={skill}
                            className={styles.skillCard}
                            custom={index}
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.skillSection}>
                      <h3>Machine Learning & Deep Learning</h3>
                      <div className={styles.skillCards}>
                        {skills.machineLearning.map((skill, index) => (
                          <motion.div 
                            key={skill}
                            className={styles.skillCard}
                            custom={index}
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.skillSection}>
                      <h3>Computer Vision & Neural Networks</h3>
                      <div className={styles.skillCards}>
                        {skills.deepLearning.map((skill, index) => (
                          <motion.div 
                            key={skill}
                            className={styles.skillCard}
                            custom={index}
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.skillSection}>
                      <h3>NLP & Generative AI</h3>
                      <div className={styles.skillCards}>
                        {skills.nlp.map((skill, index) => (
                          <motion.div 
                            key={skill}
                            className={styles.skillCard}
                            custom={index}
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.skillSection}>
                      <h3>MLOps & Production Tools</h3>
                      <div className={styles.skillCards}>
                        {skills.tools.map((skill, index) => (
                          <motion.div 
                            key={skill}
                            className={styles.skillCard}
                            custom={index}
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume