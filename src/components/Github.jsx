import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaDatabase, 
  FaCode, 
  FaBrain, 
  FaCogs, 
  FaChartLine, 
  FaRocket, 
  FaAward, 
  FaClock, 
  FaFlask, 
  FaPlay, 
  FaEye, 
  FaStar,
  FaStream,
  FaJava,
  FaDocker,
  FaPython,
  FaFire,
  FaLightbulb,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBolt,
  FaChartArea,
  FaCloudUploadAlt,
  FaBriefcase
} from 'react-icons/fa'
import profilePic from '../assets/profile_pic.png'
import screenshot1 from '../assets/screenshot_1.png'
import screenshot2 from '../assets/screenshot_2.png'
import screenshot3 from '../assets/screenshot_3.png'
import screenshotAnomaly from '../assets/screenshot_with_anomaly_and_number.png'
import smaImageWebsite from '../assets/sma_image_website.png'
import styles from './Github.module.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('data-science')
  
  useEffect(() => {
    // Your actual projects with detailed results and metrics
    const projectsData = [
      {
        id: 1,
        title: 'eBird Java Kafka Stream Processor',
        subtitle: 'Production-Ready Real-time Anomaly Detection Pipeline',
        description: 'Enterprise-grade streaming data engineering system combining Apache Kafka, Java 23, and machine learning for real-time bird observation anomaly detection with industry-leading 98.4% F1-score performance.',
        highlights: [
          '100% Precision (Zero False Positives)',
          '96.9% Recall (31/32 True Anomalies Detected)',
          'F1-Score: 98.4% (Exceeds Industry Standards)',
          '<100ms End-to-End Processing Latency',
          'R² = 0.969 Polynomial Regression Model',
          '1,000+ Observations Processed Successfully',
          'Fault-Tolerant Kafka Architecture'
        ],
        technicalFeatures: [
          {
            title: 'Stream Processing Architecture',
            description: 'Apache Kafka 3.5.0 with Java 23 for real-time event processing',
            icon: <FaStream />
          },
          {
            title: 'Statistical Anomaly Detection',
            description: 'Z-score analysis with 3.0 standard deviation threshold',
            icon: <FaChartArea />
          },
          {
            title: 'Regression-Based Synthesis',
            description: 'Polynomial regression (R² = 0.969) for synthetic data generation',
            icon: <FaBrain />
          },
          {
            title: 'Containerized Deployment',
            description: 'Docker Compose orchestration for production scalability',
            icon: <FaDocker />
          }
        ],
        performanceMetrics: [
          { label: 'Precision', value: '100.0%', description: 'Perfect accuracy - no false positives' },
          { label: 'Recall', value: '96.9%', description: 'Detected 31 of 32 true anomalies' },
          { label: 'F1-Score', value: '98.4%', description: 'Harmonic mean exceeding industry standards' },
          { label: 'Processing Speed', value: '<100ms', description: 'End-to-end latency per observation' },
          { label: 'Data Throughput', value: '1,000+', description: 'Observations processed successfully' },
          { label: 'Model Accuracy', value: 'R² = 0.969', description: 'Polynomial regression performance' }
        ],
        javaImplementation: {
          streamProcessor: {
            title: 'BirdStreamProcessor.java',
            description: 'Core Kafka Streams application implementing real-time anomaly detection',
            features: [
              'ConcurrentHashMap for thread-safe baseline storage',
              'Jackson JSON processing for high-performance serialization',
              'Statistical Z-score analysis with configurable thresholds',
              'Graceful shutdown hooks for production deployment'
            ]
          },
          dataProducer: {
            title: 'DataStreamProducer.java',
            description: 'Sophisticated data ingestion system with dual-stream architecture',
            features: [
              'Historical data replay with OpenCSV integration',
              'Regression-based synthetic data generation',
              'Coordinated multi-threaded streaming pipeline',
              'Real-time anomaly injection for testing validation'
            ]
          }
        },
        screenshots: [
          {
            title: 'Real-time Stream Processing in Action',
            description: 'Live terminal output showing anomaly detection with Z-score calculations and alert generation',
            image: screenshot1,
            filename: 'screenshot_1.png'
          },
          {
            title: 'Performance Analysis Dashboard',
            description: 'Comprehensive visualization showing confusion matrix, Z-score analysis, and seasonal breeding patterns',
            image: smaImageWebsite,
            filename: 'sma_image_website.png'
          },
          {
            title: 'High-Severity Anomaly Detection',
            description: 'Critical anomaly alerts with statistical metrics showing 10x normal population counts',
            image: screenshotAnomaly,
            filename: 'screenshot_with_anomaly_and_number.png'
          }
        ],
        techStack: {
          'Core Technologies': ['Java 23', 'Apache Kafka 3.5.0', 'Docker & Docker Compose'],
          'Data Processing': ['Jackson JSON', 'OpenCSV', 'Maven Build System'],
          'Analytics & ML': ['Python 3.13', 'scikit-learn', 'pandas', 'NumPy'],
          'Visualization': ['matplotlib', 'seaborn', 'Statistical Analysis'],
          'DevOps': ['Containerization', 'Multi-threaded Architecture', 'Production Logging']
        },
        metrics: {
          dataProcessed: '47GB eBird Dataset',
          observations: '1,000+ Synthetic Observations',
          timespan: '20 Years (2005-2024)',
          focus: 'Mourning Dove Population Analysis',
          architecture: 'Event-Driven Microservices',
          deployment: 'Production-Ready Containers'
        },
        businessApplications: [
          {
            domain: 'Wildlife Conservation',
            applications: [
              'Early detection of population crashes',
              'Real-time endangered species monitoring',
              'Climate change impact assessment'
            ]
          },
          {
            domain: 'Research & Academia',
            applications: [
              'Automated citizen science data validation',
              'Real-time ecological trend identification',
              'Long-term behavioral pattern analysis'
            ]
          },
          {
            domain: 'Production Systems',
            applications: [
              'Horizontally scalable architecture',
              'RESTful API integration capabilities',
              'Built-in metrics and operational monitoring'
            ]
          }
        ],
        category: 'data-engineering-ml',
        githubUrl: 'https://github.com/yvnnhong/ebird-java-kafka-stream-processor',
        featured: true,
      },
      {
        id: 2,
        title: 'eBird SQL DuckDB Analytics',
        subtitle: 'Large-Scale Wildlife Population Study',
        description: 'Comprehensive ecological data analysis examining species adaptation, conservation effectiveness, and climate resilience across California using advanced SQL optimization techniques.',
        highlights: [
          '4,456% Population Recovery (Ridgway\'s Rail)',
          '3,880% Geographic Expansion',
          '87.1% Urban Dominance (House Finch)',
          '47GB Dataset Processing',
          '20+ Years Temporal Analysis'
        ],
        techStack: {
          'Database': ['DuckDB', 'SQL Optimization'],
          'Analysis': ['Python', 'Statistical Modeling'],
          'Data Sources': ['Cornell eBird API', 'Citizen Science Data'],
          'Scope': ['58 California Counties', '3 Ecological Studies']
        },
        metrics: {
          dataProcessed: '47GB California Observations',
          species: '4 Bird Species Analyzed',
          timespan: '21 Years (2005-2025)',
          scope: 'Urban, Endangered & Endemic Species'
        },
        studies: [
          {
            title: 'Urban Adaptation Study',
            result: 'House Finch 87.1% vs House Sparrow 12.9%',
            insight: 'Native species outcompeting introduced species'
          },
          {
            title: 'Conservation Assessment',
            result: '4,456% population increase for endangered species',
            insight: 'Multi-decade habitat restoration effectiveness'
          },
          {
            title: 'Climate Resilience',
            result: '53.8% range expansion in breeding counties',
            insight: 'Endemic species climate adaptation capacity'
          }
        ],
        category: 'data-science',
        githubUrl: 'https://github.com/yvnnhong/ebird-sql-duckdb-analytics',
        featured: true,
      },
    ]
    
    setProjects(projectsData)
  }, [])
  
  const filteredProjects = projects.filter(project => project.category === selectedCategory)
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.projectsContainer}
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={styles.projectsHeader}
      >
        <h1 className={styles.pageTitle}>
          My <span className="text-gradient">Github</span>
        </h1>
        <p className={styles.pageSubtitle}>
          Production-ready data engineering and machine learning projects with measurable impact
        </p>
      </motion.div>

      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles.filterButtons}
      >
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'data-science' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('data-science')}
        >
          <FaFlask className={styles.buttonIcon} />
          Data Science
        </button>
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'data-engineering-ml' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('data-engineering-ml')}
        >
          <FaBrain className={styles.buttonIcon} />
          Data Engineering & ML
        </button>
      </motion.div>

      <div className={styles.projectsGrid}>
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <ProjectCard key={`${selectedCategory}-${project.id}`} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={styles.projectCard}
      data-category={project.category}
    >
      <div className={styles.projectCardInner}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectSubtitle}>{project.subtitle}</p>
            <p className={styles.projectDescription}>{project.description}</p>
            
            <div className={styles.heroActions}>
              <a 
                href={project.githubUrl} 
                className={styles.repositoryButton} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>View Repository</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaDatabase />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>{project.metrics.dataProcessed}</div>
                <div className={styles.statLabel}>Data Processed</div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaClock />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>{project.metrics.timespan}</div>
                <div className={styles.statLabel}>Time Span</div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaEye />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>{project.metrics.scope || project.metrics.observations}</div>
                <div className={styles.statLabel}>Scope</div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaChartLine />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>{project.metrics.focus}</div>
                <div className={styles.statLabel}>Focus Area</div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics (for Kafka project) */}
        {project.performanceMetrics && (
          <div className={styles.performanceSection}>
            <div className={styles.sectionHeader}>
              <FaRocket className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Industry-Leading Performance</h3>
            </div>
            <div className={styles.performanceGrid}>
              {project.performanceMetrics.map((metric, index) => (
                <div key={index} className={styles.performanceCard}>
                  <div className={styles.performanceValue}>{metric.value}</div>
                  <div className={styles.performanceLabel}>{metric.label}</div>
                  <div className={styles.performanceDesc}>{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Features (for Kafka project) */}
        {project.technicalFeatures && (
          <div className={styles.featuresSection}>
            <div className={styles.sectionHeader}>
              <FaCogs className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Technical Architecture</h3>
            </div>
            <div className={styles.featuresGrid}>
              {project.technicalFeatures.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <div className={styles.featureContent}>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Java Implementation Details (for Kafka project) */}
        {project.javaImplementation && (
          <div className={styles.javaSection}>
            <div className={styles.sectionHeader}>
              <FaJava className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Java Implementation Deep Dive</h3>
            </div>
            <div className={styles.javaGrid}>
              <div className={styles.javaCard}>
                <div className={styles.javaHeader}>
                  <FaStream className={styles.javaIcon} />
                  <div>
                    <h4 className={styles.javaTitle}>{project.javaImplementation.streamProcessor.title}</h4>
                    <p className={styles.javaSubtitle}>{project.javaImplementation.streamProcessor.description}</p>
                  </div>
                </div>
                <div className={styles.javaFeatures}>
                  {project.javaImplementation.streamProcessor.features.map((feature, index) => (
                    <div key={index} className={styles.javaFeature}>
                      <FaCheckCircle className={styles.javaFeatureIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.javaCard}>
                <div className={styles.javaHeader}>
                  <FaCloudUploadAlt className={styles.javaIcon} />
                  <div>
                    <h4 className={styles.javaTitle}>{project.javaImplementation.dataProducer.title}</h4>
                    <p className={styles.javaSubtitle}>{project.javaImplementation.dataProducer.description}</p>
                  </div>
                </div>
                <div className={styles.javaFeatures}>
                  {project.javaImplementation.dataProducer.features.map((feature, index) => (
                    <div key={index} className={styles.javaFeature}>
                      <FaCheckCircle className={styles.javaFeatureIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Screenshots Section (for Kafka project) */}
        {project.screenshots && (
          <div className={styles.screenshotsSection}>
            <div className={styles.sectionHeader}>
              <FaEye className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Live System Demonstrations</h3>
            </div>
            <div className={styles.screenshotsGrid}>
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className={styles.screenshotCard}>
                  <div className={styles.screenshotImageContainer}>
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className={styles.screenshotImage}
                    />
                  </div>
                  <div className={styles.screenshotContent}>
                    <h4 className={styles.screenshotTitle}>{screenshot.title}</h4>
                    <p className={styles.screenshotDesc}>{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Business Applications (for Kafka project) */}
        {project.businessApplications && (
          <div className={styles.businessSection}>
            <div className={styles.sectionHeader}>
              <FaBriefcase className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Real-World Applications</h3>
            </div>
            <div className={styles.businessGrid}>
              {project.businessApplications.map((domain, index) => (
                <div key={index} className={styles.businessCard}>
                  <h4 className={styles.businessDomain}>{domain.domain}</h4>
                  <div className={styles.businessApps}>
                    {domain.applications.map((app, appIndex) => (
                      <div key={appIndex} className={styles.businessApp}>
                        <FaLightbulb className={styles.businessAppIcon} />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          {/* Performance Highlights */}
          <div className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <FaRocket className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Key Achievements</h3>
            </div>
            <div className={styles.highlightsList}>
              {project.highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightItem}>
                  <div className={styles.highlightBullet}></div>
                  <span className={styles.highlightText}>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Studies */}
          {project.studies && (
            <div className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <FaBrain className={styles.sectionIcon} />
                <h3 className={styles.sectionTitle}>Research Studies</h3>
              </div>
              <div className={styles.studiesContainer}>
                {project.studies.map((study, index) => (
                  <div key={index} className={styles.studyCard}>
                    <div className={styles.studyHeader}>
                      <h4 className={styles.studyTitle}>{study.title}</h4>
                    </div>
                    <div className={styles.studyResult}>{study.result}</div>
                    <div className={styles.studyInsight}>{study.insight}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack */}
          <div className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <FaCogs className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Technology Stack</h3>
            </div>
            <div className={styles.techContainer}>
              {Object.entries(project.techStack).map(([category, techs]) => (
                <div key={category} className={styles.techGroup}>
                  <div className={styles.techCategoryLabel}>{category}</div>
                  <div className={styles.techTags}>
                    {techs.map((tech, index) => (
                      <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects