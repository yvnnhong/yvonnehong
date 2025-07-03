import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaCode, FaBrain, FaCogs, FaChartLine, FaRocket, FaAward, FaClock, FaFlask, FaPlay, FaEye, FaStar } from 'react-icons/fa'
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
        subtitle: 'Real-time Anomaly Detection Pipeline',
        description: 'Production-ready streaming data engineering system with machine learning anomaly detection achieving industry-leading performance metrics.',
        highlights: [
          '100% Precision (Zero False Positives)',
          '96.9% Recall (31/32 True Anomalies)',
          'F1-Score: 98.4% (Exceeds Industry Standards)',
          '<100ms Processing Latency',
          'R² = 0.969 Regression Model'
        ],
        techStack: {
          'Core': ['Java 23', 'Apache Kafka 3.5.0', 'Docker'],
          'Data Science': ['Python 3.13', 'scikit-learn', 'pandas', 'NumPy'],
          'Visualization': ['matplotlib', 'seaborn'],
          'DevOps': ['Maven', 'Docker Compose', 'Jackson JSON']
        },
        metrics: {
          dataProcessed: '47GB eBird Dataset',
          observations: '1,000+ Synthetic Observations',
          timespan: '20 Years (2005-2024)',
          focus: 'Mourning Dove Population Analysis'
        },
        category: 'data-engineering-ml',
        githubUrl: 'https://github.com/yvnnhong/ebird-java-kafka-stream-processor',
        featured: true,
      },
      {
        id: 2,
        title: 'eBird SQL DuckDB Analytics',
        subtitle: 'Large-Scale Wildlife Population Study',
        description: 'Comprehensive ecological data analysis examining species adaptation, conservation effectiveness, and climate resilience across California.',
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

      <motion.div 
        className={styles.projectsGrid}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className={styles.projectCard}
      data-category={project.category}
    >
      <div className={styles.projectCardInner}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.titleBadgeContainer}>
              {project.featured && (
                <span className={styles.featuredBadge}>
                  <FaStar /> Featured Project
                </span>
              )}
            </div>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectSubtitle}>{project.subtitle}</p>
            <p className={styles.projectDescription}>{project.description}</p>
            
            <div className={styles.heroActions}>
              <a 
                href={project.githubUrl} 
                className={styles.primaryButton} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>View Repository</span>
              </a>
              <button className={styles.secondaryButton}>
                <FaPlay />
                <span>Live Demo</span>
              </button>
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