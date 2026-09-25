import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaUniversity, FaLaptopCode, FaCogs, FaDatabase, FaCloud, FaStream, FaLayerGroup } from 'react-icons/fa'
import profilePic from '../assets/profile_pic.png'
import styles from './Resume.module.css'
const Resume = () => {
  const [activeTab, setActiveTab] = useState('education')
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    }),
    exit: { opacity: 0, y: -20 }
  }
  
  const skills = {
    languages: ['Go', 'Java', 'Python', 'SQL'],
    distributed: ['Apache Kafka', 'Apache Flink', 'Redis', 'ElastiCache', 'RabbitMQ', 'gRPC', 'Protobuf', 'token-bucket rate limiting', 'sharding', 'consumer groups'],
    storage: ['PostgreSQL', 'Amazon DynamoDB', 'Apache Cassandra', 'Amazon S3', 'Parquet'],
    cloud: ['AWS EC2', 'ALB', 'Lambda', 'Step Functions', 'Glue', 'Athena', 'RDS', 'EventBridge', 'Secrets Manager', 'Docker'],
    observability: ['Prometheus', 'Grafana', 'k6', 'pytest']
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
          Distributed systems experience, projects, and tech stack
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
              <p className={styles.profileTitle}>Distributed Systems Engineer · Go · Kafka · Redis</p>
              
              <div className={styles.profileMetrics}>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaStream /></div>
                  <div className={styles.metricInfo}>
                    <h4>8.3k RPS</h4>
                    <p>k6 load tested</p>
                  </div>
                </div>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaDatabase /></div>
                  <div className={styles.metricInfo}>
                    <h4>500k+</h4>
                    <p>Vector records</p>
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
                        <div className={styles.timelinePeriod}>2021 – 2025</div>
                        <h3>Bachelor of Science — Mathematics-Computer Science</h3>
                        <h4>University of California, San Diego</h4>
                        
                        <div className={styles.courseList}>
                          <h5>Relevant Coursework:</h5>
                          <ul>
                            <li>Graph Theory</li>
                            <li>Design & Analysis of Algorithms</li>
                            <li>Advanced Data Structures</li>
                            <li>Probability & Statistics</li>
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
                        <div className={styles.timelinePeriod}>June 2025 – Present</div>
                        <h3>Distributed Systems Engineer</h3>
                        <h4>Nebulearn — Spaced Repetition Flashcard Platform · Toronto, ON</h4>
                        <ul className={styles.experienceList}>
                          <li>Built a Golang AI-flashcard pipeline: Application Load Balancer → 3-instance token-bucket limiter (atomic Redis Lua on a 2-shard, 4-node ElastiCache cluster) → Apache Kafka → Postgres; load-tested with k6 at 5,500–8,300 RPS at ~43 ms p95 and verified correct limits across 4M+ k6 requests in Prometheus and Grafana.</li>
                          <li>Isolated a p99 spike under Zipfian traffic to a Redis hot shard 17.7% above mean CPU; rejected a local cache after profiling cross-server races so enforcement stayed consistent across all 3 EC2 server instances.</li>
                          <li>Split the flashcard Kafka topic across two consumer groups: a Go group for card generation and an Apache Flink group (Java) for abuse detection; used Flink keyed state on per-account velocity; active bots went from 20 to 2 (90%), at &lt;15 ms p99 in Prometheus.</li>
                          <li>Designed a gRPC/Protobuf video ingestion path for 100MB+ chunks (&lt;50 ms serialize) and RabbitMQ fanout workers; tracked queue lag in Prometheus/Grafana and used k6 peak tests to avoid 94% of processing timeouts.</li>
                          <li>Created an AI context engine using a 3-node Apache Cassandra cluster to store 1,536-dimensional vector embeddings for RAG retrieval. Tuned the HNSW index ef search parameter to balance algorithmic recall, cutting p99 read latencies by 41% to maintain a stable sub-60 ms response across 500,000+ vector records.</li>
                          <li>Cut AWS monthly costs by 32% (~$1.2k/mo → $800/mo) by automating staging environments to turn off when idle. Reduced production cloud spending by using k6 load-test data to tune JVM heap allocations across live Kafka brokers, cutting memory costs by 40% (~$120/mo → $72/mo) and eliminating recurring OOM incidents.</li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaLaptopCode /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>Jul 2024 – Sep 2024</div>
                        <h3>Data Engineering Intern</h3>
                        <h4>Tristero — $5M Seed-Funded Dark Pool Crypto Trading Platform · San Diego, CA</h4>
                        <ul className={styles.experienceList}>
                          <li>Created a weekly-automated AWS ETL pipeline to organize incoming partner data using Lambda, Glue, S3, Athena, and Step Functions. Used a medallion architecture: source data came from a messy Google Sheets; final data was written to a new Google Sheets and segmented in tabs by partner category. This replaced a copy-paste workflow, eliminating 85% of manual processing time.</li>
                          <li>Resolved a cross-platform binary incompatibility (cffi, cryptography compiled on Windows failing on Lambda’s Linux runtime) by building a Linux-compatible Lambda deployment package inside a Docker container using a compatible base image. Pinned cryptography to v41 to avoid Rust-based bindings introduced in v42 that caused silent import failures on Lambda.</li>
                          <li>Orchestrated full pipeline execution using AWS Step Functions: ingest Lambda → Glue job → output Lambda, with each step waiting for the previous to succeed before proceeding. Enabled S3 versioning.</li>
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
                      <div className={styles.timelineIcon}><FaDatabase /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>Nov 2025</div>
                        <h3>Beaver Watershed Pipeline</h3>
                        <h4>AWS Step Functions · Lambda · S3 · RDS PostgreSQL · Streamlit</h4>
                        <ul className={styles.experienceList}>
                          <li>Built an AWS data pipeline to identify anomalous water monitoring stations near beaver habitats in the United States.</li>
                          <li>Ingested and spatially joined 39,900+ beaver sightings with 569 water monitoring stations nationwide into RDS PostgreSQL; matched each sighting to its nearest station within 500km.</li>
                          <li>Used AWS Step Functions for a 4-Lambda workflow to solve GBIF rate limiting: async download request, free Wait State (vs billable Lambda idle time), GBIF status poller, and processor Lambda; reduced pipeline from timeout to 11 min end-to-end.</li>
                          <li>Integrated Isolation Forest for anomaly detection with EPA climate region z-score normalization.</li>
                          <li>Presented dashboard findings to a children’s program at a local park to support nature education.</li>
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
                      <h3>Languages</h3>
                      <div className={styles.skillCards}>
                        {skills.languages.map((skill, index) => (
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
                      <h3>Distributed Systems</h3>
                      <div className={styles.skillCards}>
                        {skills.distributed.map((skill, index) => (
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
                      <h3>Storage</h3>
                      <div className={styles.skillCards}>
                        {skills.storage.map((skill, index) => (
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
                      <h3>Cloud & Compute</h3>
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
                      <h3>Observability & Testing</h3>
                      <div className={styles.skillCards}>
                        {skills.observability.map((skill, index) => (
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