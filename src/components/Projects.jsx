import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaCode, FaBrain, FaCogs } from 'react-icons/fa'
import styles from './Projects.module.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  useEffect(() => {
    // Your actual projects from resume
    const projectsData = [
      {
        id: 1,
        title: 'eBird Java Kafka Stream Processor',
        description: 'Engineered real-time anomaly detection pipeline using Apache Kafka, Java 23, and Docker with JavaScript prototyping for algorithm validation, achieving 100% precision and 96.9% recall on 1,000+ synthetic observations. Processed 47GB eBird dataset using SQL and DuckDB to extract Mourning Dove population trends across 20 years (2005-2024), analyzing 174,422+ bird observations and 34,963+ individual records for baseline establishment and breeding pattern analysis.',
        longDescription: 'Developed machine learning prediction models using Python (pandas, NumPy, scikit-learn) with polynomial regression (R² = 0.969), generating synthetic observations with realistic seasonal breeding patterns. Implemented statistical anomaly detection using Z-score analysis and Python visualization libraries (matplotlib, seaborn), processing streaming data in real-time through containerized microservices architecture. Built end-to-end data pipeline (47GB eBird dataset → DuckDB SQL analysis → Python CSV processing → synthetic data generation → Kafka streaming → real-time anomaly detection → JSON alerts) with Maven build automation.',
        category: 'data-engineering',
        technologies: ['Java', 'Apache Kafka', 'Docker', 'Python', 'SQL', 'DuckDB', 'scikit-learn', 'pandas', 'NumPy', 'matplotlib', 'seaborn', 'Maven'],
        image: 'project1.jpg',
        githubUrl: 'https://github.com/yvnnhong/ebird-kafka-stream-processor',
        liveUrl: 'https://github.com/yvnnhong/ebird-kafka-stream-processor',
        featured: true,
      },
      {
        id: 2,
        title: 'eBird SQL DuckDB Analytics',
        description: 'Analyzed 47GB of eBird observation data using DuckDB SQL queries to examine 4 bird species in California across 20+ years (2005-2025). Built SQL analysis framework covering urban species adaptation (House Finch vs House Sparrow), endangered species recovery (Ridgway\'s Rail), and endemic species climate resilience (Yellow-billed Magpie). Measured 4,456% population increase (390 to 17,758 birds) and 3,880% locality expansion for Ridgway\'s Rail, and House Finch dominance (87.1% vs 12.9%) over House Sparrow in urban environments.',
        longDescription: 'Comprehensive large-scale data analytics project focusing on wildlife population trends and environmental adaptation patterns. Used DuckDB CLI for query execution and output analysis, processing decades of observational data to identify significant ecological changes and species behavior patterns.',
        category: 'data-engineering',
        technologies: ['DuckDB', 'SQL', 'Python', 'Data Analysis', 'CLI'],
        image: 'project2.jpg',
        githubUrl: 'https://github.com/yvnnhong/ebird-sql-duckdb-analytics',
        liveUrl: 'https://github.com/yvnnhong/ebird-sql-duckdb-analytics',
        featured: true,
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