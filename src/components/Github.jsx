import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaCode, FaBrain, FaCogs, FaChartLine, FaRocket, FaAward, FaClock, FaFlask } from 'react-icons/fa'
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
        {/* Header Section */}
        <div className={styles.projectHeader}>
          <div className={styles.projectTitleSection}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectSubtitle}>{project.subtitle}</p>
          </div>
          <div className={styles.projectActions}>
            {project.featured && (
              <span className={styles.featuredBadge}>
                <FaAward /> Featured
              </span>
            )}
            <a 
              href={project.githubUrl} 
              className={styles.githubButton} 
              target="_blank" 
              rel="noopener noreferrer"
              title="View on GitHub"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        </div>

        {/* Description */}
        <div className={styles.projectDescription}>
          <p>{project.description}</p>
        </div>

        {/* Key Metrics */}
        <div className={styles.metricsSection}>
          <h4 className={styles.sectionTitle}>
            <FaChartLine /> Key Metrics
          </h4>
          <div className={styles.metricsGrid}>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Data Processed</span>
              <span className={styles.metricValue}>{project.metrics.dataProcessed}</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Scope</span>
              <span className={styles.metricValue}>{project.metrics.scope || project.metrics.observations}</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Timespan</span>
              <span className={styles.metricValue}>{project.metrics.timespan}</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Focus</span>
              <span className={styles.metricValue}>{project.metrics.focus}</span>
            </div>
          </div>
        </div>

        {/* Performance Highlights */}
        <div className={styles.highlightsSection}>
          <h4 className={styles.sectionTitle}>
            <FaRocket /> Performance Highlights
          </h4>
          <div className={styles.highlightsList}>
            {project.highlights.map((highlight, index) => (
              <div key={index} className={styles.highlight}>
                <span className={styles.highlightBullet}>●</span>
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Special Studies Section (for DuckDB project) */}
        {project.studies && (
          <div className={styles.studiesSection}>
            <h4 className={styles.sectionTitle}>
              <FaBrain /> Research Studies
            </h4>
            <div className={styles.studiesList}>
              {project.studies.map((study, index) => (
                <div key={index} className={styles.study}>
                  <div className={styles.studyTitle}>{study.title}</div>
                  <div className={styles.studyResult}>{study.result}</div>
                  <div className={styles.studyInsight}>{study.insight}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack */}
        <div className={styles.techSection}>
          <h4 className={styles.sectionTitle}>
            <FaCogs /> Technology Stack
          </h4>
          <div className={styles.techStacks}>
            {Object.entries(project.techStack).map(([category, techs]) => (
              <div key={category} className={styles.techCategory}>
                <span className={styles.techCategoryLabel}>{category}</span>
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
    </motion.div>
  )
}

export default Projects