import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaMobile, FaServer, FaTools, FaChartLine, FaUniversity, FaLaptopCode } from 'react-icons/fa'
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
    programming: ['Python', 'JavaScript/React', 'Algorithmic Design', 'C/C++'],
    data: ['CVXPY', 'Pandas', 'Statistical Analysis', 'ML Algorithms']
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
          Education, experience, and technical skills
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
              <p className={styles.profileTitle}>Quantitative Developer</p>
              
              <div className={styles.profileMetrics}>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaChartLine /></div>
                  <div className={styles.metricInfo}>
                    <h4>4+</h4>
                    <p>Quant Projects</p>
                  </div>
                </div>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaLaptopCode /></div>
                  <div className={styles.metricInfo}>
                    <h4>3+</h4>
                    <p>Years Coding</p>
                  </div>
                </div>
              </div>
              
              {/* Adjusted download link */}
              <a href="/Yvonne_Hong_Resume.pdf" download="Yvonne_Hong_Resume.pdf" className={styles.downloadButton}>
                Download CV
              <span className={styles.buttonHighlight}></span>
              </a>

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
                <FaChartLine />
                <span>Experience</span>
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'skills' ? styles.active : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                <FaCode />
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
                            <li>Differential Equations & Dynamical Systems</li>
                            <li>Discrete Math & Combinatorics</li>
                            <li>Artificial Intelligence: Probabilistic Reasoning & Decision-Making</li>
                            <li>Systems Programming (C, UNIX, gdb, valgrind)</li>
                            <li>Abstract Algebra, Theory of Computability</li>
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
                      <div className={styles.timelineIcon}><FaChartLine /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>Jul 2024 - Sep 2024</div>
                        <h3>Business Operations Intern</h3>
                        <h4>Tristero (Remote)</h4>
                        <ul className={styles.experienceList}>
                          <li>Designed and optimized automation workflows in HubSpot, Notion, and Coda, enhancing operational efficiency and streamlining cross-departmental communication by 50%</li>
                          <li>Organized high-profile networking events, ensuring flawless execution, budget adherence, and elevated brand visibility, driving significant client engagement and partnerships</li>
                          <li>Analyzed operational data to identify bottlenecks, implementing data-driven process improvements that boosted team productivity and informed strategic business decisions</li>
                          <li>Actively participated in cross-functional meetings, providing feedback on inefficient processes, documenting key discussion points, and contributing actionable suggestions that led to measurable operational improvements</li>
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
                          <li>Conducted in-depth analysis of mutual funds, equities, and real estate using Morningstar, leveraging advanced data analytics to formulate high-impact investment strategies that optimized client portfolio performance</li>
                          <li>Authored comprehensive quarterly performance reports, synthesizing complex market trends and actionable insights to empower client decision-making and enhance investment outcomes</li>
                          <li>Revamped client newsletters and communications, integrating quantitative insights and market forecasts to elevate engagement and align with client objectives</li>
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
                      <h3>Data Science & Analytics</h3>
                      <div className={styles.skillCards}>
                        {skills.data.map((skill, index) => (
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
                      <h3>Tools & Technologies</h3>
                      <div className={styles.techTags}>
                        <span className={styles.techTag}>Git</span>
                        <span className={styles.techTag}>NumPy</span>
                        <span className={styles.techTag}>Matplotlib</span>
                        <span className={styles.techTag}>Scikit-learn</span>
                        <span className={styles.techTag}>TensorFlow</span>
                        <span className={styles.techTag}>PyTorch</span>
                        <span className={styles.techTag}>SQL</span>
                        <span className={styles.techTag}>AWS</span>
                        <span className={styles.techTag}>Docker</span>
                        <span className={styles.techTag}>Jupyter</span>
                        <span className={styles.techTag}>React</span>
                        <span className={styles.techTag}>Node.js</span>
                        <span className={styles.techTag}>MongoDB</span>
                        <span className={styles.techTag}>PostgreSQL</span>
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
