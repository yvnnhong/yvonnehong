import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaCode, FaBrain, FaCogs } from 'react-icons/fa'
import styles from './Projects.module.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  useEffect(() => {
    // ML and Data Engineering focused projects
    const projectsData = [
      {
        id: 1,
        title: 'eBird Java Kafka Stream Processor',
        description: 'Real-time anomaly detection pipeline using Apache Kafka, Java 23, and Docker with machine learning models achieving 100% precision and 96.9% recall.',
        longDescription: 'Engineered a real-time anomaly detection pipeline using Apache Kafka, Java 23, and Docker with JavaScript prototyping for algorithm validation. Built end-to-end data pipeline processing 47GB eBird dataset with DuckDB SQL analysis, Python CSV processing, synthetic data generation, and real-time streaming.',
        category: 'data-engineering',
        technologies: ['Java', 'Apache Kafka', 'Docker', 'Python', 'SQL', 'DuckDB', 'Maven'],
        image: 'project1.jpg',
        githubUrl: 'https://github.com/yvnnhong/ebird-kafka-processor',
        liveUrl: 'https://github.com/yvnnhong/ebird-kafka-processor',
        featured: true,
      },
      {
        id: 2,
        title: 'eBird SQL DuckDB Analytics',
        description: 'Large-scale data analytics project analyzing 47GB of eBird observation data using DuckDB SQL queries across 20+ years of bird species data.',
        longDescription: 'Analyzed 47GB of eBird observation data using DuckDB SQL queries to examine 4 bird species in California across 20+ years. Built comprehensive SQL analysis framework covering urban species adaptation, endangered species recovery, and climate resilience patterns.',
        category: 'data-engineering',
        technologies: ['DuckDB', 'SQL', 'Python', 'Data Analysis'],
        image: 'project2.jpg',
        githubUrl: 'https://github.com/yvnnhong/ebird-duckdb-analytics',
        liveUrl: 'https://github.com/yvnnhong/ebird-duckdb-analytics',
        featured: true,
      },
      {
        id: 3,
        title: 'Automated ETL Data Pipeline',
        description: 'Python-based ETL pipeline using pandas, SQLite, and gspread-pandas processing multiple partner datasets and reducing manual processing time by 85%.',
        longDescription: 'Built reusable ETL pipeline using Python, pandas, SQLite, and gspread-pandas to process multiple partner datasets. Automated complete DataFrame workflows across dozens of data sources with comprehensive logging and error handling.',
        category: 'data-engineering',
        technologies: ['Python', 'pandas', 'SQLite', 'gspread-pandas', 'ETL', 'Data Processing'],
        image: 'project3.jpg',
        githubUrl: 'https://github.com/yvnnhong/automated-etl-pipeline',
        liveUrl: 'https://github.com/yvnnhong/automated-etl-pipeline',
        featured: false,
      },
      {
        id: 4,
        title: 'Machine Learning Anomaly Detection',
        description: 'Statistical anomaly detection system using Z-score analysis and Python visualization libraries with polynomial regression models (R² = 0.969).',
        longDescription: 'Developed machine learning prediction models using Python (pandas, NumPy, scikit-learn) with polynomial regression. Implemented statistical anomaly detection using Z-score analysis and Python visualization libraries for real-time data processing.',
        category: 'ml',
        technologies: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'matplotlib', 'seaborn', 'Statistical Analysis'],
        image: 'project4.jpg',
        githubUrl: 'https://github.com/yvnnhong/ml-anomaly-detection',
        liveUrl: 'https://github.com/yvnnhong/ml-anomaly-detection',
        featured: false,
      },
      {
        id: 5,
        title: 'Real-time Data Streaming Platform',
        description: 'Containerized microservices architecture for processing streaming data in real-time with JSON alerts and comprehensive monitoring.',
        longDescription: 'Built containerized microservices architecture for real-time data streaming. Implemented comprehensive monitoring, alerting systems, and automated deployment pipelines using Docker and modern DevOps practices.',
        category: 'data-engineering',
        technologies: ['Docker', 'Microservices', 'Real-time Processing', 'JSON', 'DevOps', 'Monitoring'],
        image: 'project5.jpg',
        githubUrl: 'https://github.com/yvnnhong/realtime-streaming-platform',
        liveUrl: 'https://github.com/yvnnhong/realtime-streaming-platform',
        featured: false,
      },
      {
        id: 6,
        title: 'Large-Scale Species Population Analysis',
        description: 'Data science project measuring 4,456% population increase and 3,880% locality expansion using advanced SQL queries and statistical analysis.',
        longDescription: 'Conducted comprehensive species population analysis using advanced SQL queries and statistical methods. Analyzed population trends, geographic distribution changes, and environmental impact factors across multiple decades of observation data.',
        category: 'ml',
        technologies: ['SQL', 'Statistical Analysis', 'Data Science', 'Python', 'Population Modeling'],
        image: 'project6.jpg',
        githubUrl: 'https://github.com/yvnnhong/species-population-analysis',
        liveUrl: 'https://github.com/yvnnhong/species-population-analysis',
        featured: false,
      },
    ]
    
    setProjects(projectsData)
  }, [])
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)
  
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
          My <span className="text-gradient">Projects</span>
        </h1>
        <p className={styles.pageSubtitle}>
          A collection of my machine learning and data engineering projects
        </p>
      </motion.div>

      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles.filterButtons}
      >
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'all' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All Projects
        </button>
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'data-engineering' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('data-engineering')}
        >
          <FaDatabase className={styles.buttonIcon} />
          Data Engineering
        </button>
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'ml' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('ml')}
        >
          <FaBrain className={styles.buttonIcon} />
          Machine Learning
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
        {filteredProjects.slice(0, 6).map((project) => (
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
    >
      <div className={styles.projectCardInner}>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImagePlaceholder}>
            {project.category === 'data-engineering' ? (
              <FaDatabase className={styles.projectIcon} />
            ) : project.category === 'ml' ? (
              <FaBrain className={styles.projectIcon} />
            ) : (
              <FaCogs className={styles.projectIcon} />
            )}
            <span className={styles.projectInitials}>
              {project.title.split(' ').map(word => word[0]).join('').substring(0, 3)}
            </span>
          </div>
          
          <div className={styles.projectOverlay}>
            <div className={styles.projectLinks}>
              <a href={project.githubUrl} className={styles.projectLink} target="_blank" rel="noopener noreferrer" title="View Source Code">
                <FaGithub />
              </a>
              <a href={project.liveUrl} className={styles.projectLink} target="_blank" rel="noopener noreferrer" title="View Live Project">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.projectContent}>
          <div className={styles.projectHeader}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            {project.featured && (
              <span className={styles.featuredBadge}>Featured</span>
            )}
          </div>
          
          <div className={styles.projectDescription}>
            <p>{project.description}</p>
          </div>
          
          <div className={styles.techTags}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects