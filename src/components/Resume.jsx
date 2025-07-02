import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaMobile, FaServer, FaTools, FaChartLine, FaUniversity, FaLaptopCode, FaCogs, FaCloud } from 'react-icons/fa'
import profilePic from '../assets/profile_pic.png' // Make sure this file path is correct
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
  
  // Skills data
  const skills = {
    programming: ['Python', 'Java', 'C/C++', 'JavaScript/TypeScript', 'SQL'],
    dataEngineering: ['Apache Kafka', 'Docker', 'DuckDB', 'SQLite', 'MongoDB', 'ETL Pipelines'],
    machineLearning: ['pandas', 'NumPy', 'scikit-learn', 'matplotlib', 'seaborn', 'TensorFlow'],
    cloud: ['AWS', 'Google Cloud Platform', 'Supabase', 'Render']
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
          My <span className="text-gradient">Resume</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.pageSubtitle}
        >
          Machine Learning Engineer & Data Engineering Specialist
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
              <div className={styles.profileBorder}></div>
              <img src={profilePic} alt="Yvonne Hong" className={styles.profileImage} />
            </div>
            
            <div className={styles.profileInfo}>
              <h2>Yvonne Hong</h2>
              <p className={styles.profileTitle}>ML Engineer & Data Specialist</p>
              
              <div className={styles.profileMetrics}>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaDatabase /></div>
                  <div className={styles.metricInfo}>
                    <h4>47GB+</h4>
                    <p>Data Processed</p>
                  </div>
                </div>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaCogs /></div>
                  <div className={styles.metricInfo}>
                    <h4>85%</h4>
                    <p>Efficiency Gain</p>
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
                <FaDatabase />
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
                <FaTools />
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
                            <li>Machine Learning Algorithms, Reinforcement Learning</li>
                            <li>Data Structures & Algorithms (C++, C, Java, Python)</li>
                            <li>Probability & Statistics, Stochastic Processes</li>
                            <li>Applied & Computational Linear Algebra, Numerical Analysis</li>
                            <li>Artificial Intelligence: Probabilistic Reasoning & Decision-Making</li>
                            <li>Systems Programming (C, UNIX, gdb, valgrind)</li>
                            <li>Theory of Computability (Formal Languages, Turing Machines)</li>
                            <li>Discrete Math & Combinatorics</li>
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
                      <div className={styles.timelineIcon}><FaDatabase /></div>
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
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaChartLine /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>Oct 2021 - Dec 2021</div>
                        <h3>Financial Analyst Intern</h3>
                        <h4>Sagepoint Financial (San Diego, CA)</h4>
                        <ul className={styles.experienceList}>
                          <li>Conducted in-depth analysis of mutual funds, equities, and real estate using Morningstar to optimize client portfolio performance</li>
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
                      <div className={styles.timelineIcon}><FaCode /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>June 2025</div>
                        <h3>eBird Java Kafka Stream Processor</h3>
                        <h4>Java, Kafka, Docker, Python, SQL, DuckDB</h4>
                        <ul className={styles.experienceList}>
                          <li>Engineered real-time anomaly detection pipeline using Apache Kafka, Java 23, and Docker with JavaScript prototyping for algorithm validation, achieving 100% precision and 96.9% recall on 1,000+ synthetic observations</li>
                          <li>Processed 47GB eBird dataset using SQL and DuckDB to extract Mourning Dove population trends across 20 years (2005-2024), analyzing 174,422+ bird observations and 34,963+ individual records</li>
                          <li>Developed machine learning prediction models using Python (pandas, NumPy, scikit-learn) with polynomial regression (R² = 0.969), generating synthetic observations with realistic seasonal breeding patterns</li>
                          <li>Implemented statistical anomaly detection using Z-score analysis and Python visualization libraries (matplotlib, seaborn), processing streaming data in real-time through containerized microservices architecture</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaDatabase /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>June 2025</div>
                        <h3>eBird SQL DuckDB Analytics</h3>
                        <h4>DuckDB, SQL</h4>
                        <ul className={styles.experienceList}>
                          <li>Analyzed 47GB of eBird observation data using DuckDB SQL queries to examine 4 bird species in California across 20+ years (2005-2025)</li>
                          <li>Built SQL analysis framework covering urban species adaptation (House Finch vs House Sparrow), endangered species recovery (Ridgway's Rail), and endemic species climate resilience (Yellow-billed Magpie)</li>
                          <li>Measured 4,456% population increase (390 to 17,758 birds) and 3,880% locality expansion for Ridgway's Rail, and House Finch dominance (87.1% vs 12.9%) over House Sparrow in urban environments</li>
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
                      <h3>Data Engineering & ML</h3>
                      <div className={styles.skillCards}>
                        {skills.dataEngineering.map((skill, index) => (
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
                      <h3>Machine Learning Libraries</h3>
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
                      <h3>Cloud & Infrastructure</h3>
                      <div className={styles.skillCards}>
                        {skills.cloud.map((skill, index) => (
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
                      <h3>Web Technologies</h3>
                      <div className={styles.techTags}>
                        <span className={styles.techTag}>React.js</span>
                        <span className={styles.techTag}>Node.js</span>
                        <span className={styles.techTag}>Express.js</span>
                        <span className={styles.techTag}>Next.js</span>
                        <span className={styles.techTag}>Flask</span>
                        <span className={styles.techTag}>RESTful APIs</span>
                        <span className={styles.techTag}>WebSockets</span>
                        <span className={styles.techTag}>JSON Web Tokens</span>
                        <span className={styles.techTag}>HTML/CSS</span>
                        <span className={styles.techTag}>Tailwind CSS</span>
                      </div>
                    </div>
                    
                    <div className={styles.skillSection}>
                      <h3>Developer Tools</h3>
                      <div className={styles.techTags}>
                        <span className={styles.techTag}>Git/CI-CD</span>
                        <span className={styles.techTag}>Postman</span>
                        <span className={styles.techTag}>MATLAB</span>
                        <span className={styles.techTag}>UNIX</span>
                        <span className={styles.techTag}>gdb</span>
                        <span className={styles.techTag}>valgrind</span>
                      </div>
                    </div>
                    
                    <div className={styles.skillSection}>
                      <h3>Spoken Languages</h3>
                      <div className={styles.languages}>
                        <div className={styles.language}>
                          <span className={styles.languageName}>English</span>
                          <span className={styles.languageLevel}>Native</span>
                        </div>
                        <div className={styles.language}>
                          <span className={styles.languageName}>Chinese</span>
                          <span className={styles.languageLevel}>Fluent</span>
                        </div>
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