import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaDatabase,
  FaCloud,
  FaStream,
  FaCogs,
  FaLayerGroup,
  FaChartLine,
  FaDocker,
  FaPython
} from 'react-icons/fa'
import styles from './Github.module.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  useEffect(() => {
    const projectsData = [
      {
        id: 1,
        title: 'TurtleTide',
        subtitle: 'BigQuery · GCP Dataproc · Airflow · PySpark · dbt · Delta Lake · MLflow',
        description: 'Weekly-automated data engineering pipeline tracking global sea turtle migration patterns — ingesting 1.5M+ OBIS occurrence records, detecting anomalous sighting patterns via STL seasonal decomposition, and surfacing findings through a live Streamlit dashboard.',
        date: 'March 2026',
        techStack: ['PySpark', 'GCP Dataproc', 'BigQuery', 'dbt Core', 'Delta Lake', 'Apache Airflow', 'MLflow', 'Terraform', 'Streamlit', 'GitHub Actions'],
        highlights: [
          '1.5M+ raw occurrence records across 4 endangered species (Leatherback, Green, Loggerhead, Hawksbill)',
          'Silver layer as Delta Lake on GCS — atomic commits, schema enforcement, deduplication',
          '3 dbt SQL models with 7 data quality tests; CI/CD via GitHub Actions on every commit',
          'STL anomaly detection per species per ocean basin — flags residuals > 2 std deviations',
          'All experiment runs logged to MLflow with parameters, metrics, and per-basin artifacts',
          '7-task Airflow DAG (@weekly) via Docker Compose; GCP infra provisioned with Terraform'
        ],
        features: [
          {
            title: 'Chunked Paginated Ingestion',
            description: '10K records/call from OBIS REST API across 4 species into Bronze layer on GCS',
            icon: <FaDatabase />
          },
          {
            title: 'PySpark on Ephemeral Dataproc',
            description: 'Clusters created at job start, deleted immediately after to minimize cost',
            icon: <FaCloud />
          },
          {
            title: 'dbt Silver → Gold',
            description: 'stg_obis_occurrences → fct_turtle_sightings → rpt_basin_anomalies targeting BigQuery',
            icon: <FaLayerGroup />
          },
          {
            title: 'STL Anomaly Detection',
            description: 'Seasonal-Trend decomposition isolates genuine migration anomalies from normal cycles',
            icon: <FaChartLine />
          }
        ],
        liveUrl: 'https://turtletide.streamlit.app',
        githubUrl: 'https://github.com/yvnnhong/turtletide',
        categories: ['gcp', 'batch'],
        featured: true,
      },
      {
        id: 2,
        title: 'MigrationPulse',
        subtitle: 'Airflow · PySpark · dbt · Delta Lake · AWS S3 · MLflow',
        description: 'Weekly-automated pipeline ingesting 9.4M+ GPS telemetry records from Movebank for 5 migratory bird species through a Bronze → Silver → Gold medallion architecture on AWS S3, with DTW corridor deviation detection surfaced via a live Streamlit dashboard.',
        date: 'Jan – Feb 2026',
        techStack: ['PySpark', 'AWS S3', 'Delta Lake', 'dbt Core', 'DuckDB', 'Apache Airflow', 'MLflow', 'Streamlit', 'GitHub Actions', 'Docker Compose'],
        highlights: [
          '9.4M+ GPS records across 5 species (Bald Eagle, Turkey Vulture, Snow Goose, Canada Goose, Mallard) and 123 individuals',
          'Chunked ingestion via pandas chunksize handling 2.3GB+ datasets exceeding S3 single-upload limits',
          'dbt Core on DuckDB — staging reads Delta Lake via delta scan() with pre-hook S3 secret injection',
          'Sakoe-Chiba banded DTW — per-individual distance vs species template, flags > 2 std deviations',
          '8-task Airflow DAG (@weekly) via Docker Compose — API health check through anomaly notification'
        ],
        features: [
          {
            title: 'Medallion Architecture on S3',
            description: 'Bronze → Silver (Delta Lake) → Gold with atomic commits and schema enforcement',
            icon: <FaLayerGroup />
          },
          {
            title: 'DTW Anomaly Detection',
            description: 'Sakoe-Chiba banded Dynamic Time Warping flags corridor deviations per individual',
            icon: <FaChartLine />
          },
          {
            title: 'dbt + DuckDB',
            description: '3 SQL models, 6 data quality tests, delta_scan() reads directly from Delta Lake Silver',
            icon: <FaDatabase />
          },
          {
            title: 'Airflow Orchestration',
            description: '8-task DAG running weekly via Docker Compose with MLflow experiment tracking',
            icon: <FaStream />
          }
        ],
        liveUrl: 'https://migrationpulse.streamlit.app',
        githubUrl: 'https://github.com/yvnnhong/migrationpulse',
        categories: ['aws', 'batch'],
        featured: true,
      },
      {
        id: 3,
        title: 'Beaver Watershed Pipeline',
        subtitle: 'AWS Step Functions · Lambda · S3 · RDS PostgreSQL · Streamlit',
        description: 'Weekly-automated AWS data pipeline spatially joining 39,900+ GBIF beaver sightings with USGS water quality data across 569 monitoring stations nationwide — with Isolation Forest anomaly detection and a live geospatial Streamlit dashboard.',
        date: 'Dec 2025',
        techStack: ['AWS Lambda', 'AWS Step Functions', 'S3', 'RDS PostgreSQL', 'Streamlit', 'scikit-learn', 'NumPy', 'Docker', 'Python'],
        highlights: [
          '39,900+ beaver sightings spatially joined to 569 USGS stations via vectorized NumPy haversine',
          'Matches each sighting to nearest station within 500km with per-parameter sentinel value filters',
          '4-Lambda Step Functions workflow solving GBIF rate limiting — async download + Wait State + poller + processor',
          'Reduced pipeline from timeout to 11 min end-to-end using free Wait State vs billable Lambda idle time',
          'Isolation Forest with EPA climate region z-score normalization across 10 regional baselines',
          'scikit-learn + scipy packaged into Linux-compatible Docker Lambda layer under 262MB AWS limit'
        ],
        features: [
          {
            title: 'Async Step Functions',
            description: '4-Lambda workflow with free Wait State solves GBIF rate limiting without idle Lambda cost',
            icon: <FaCloud />
          },
          {
            title: 'Spatial Join at Scale',
            description: 'Vectorized NumPy haversine matching 39,900+ sightings to nearest USGS station',
            icon: <FaDatabase />
          },
          {
            title: 'Isolation Forest Detection',
            description: 'Anomaly scoring normalized within 10 EPA climate regions before scoring',
            icon: <FaChartLine />
          },
          {
            title: 'Docker Lambda Packaging',
            description: 'scikit-learn + scipy stripped and packaged under the 262MB AWS Lambda layer limit',
            icon: <FaDocker />
          }
        ],
        liveUrl: 'https://beaverwatershed.streamlit.app',
        githubUrl: 'https://github.com/yvnnhong/beaver-watershed-pipeline',
        categories: ['aws', 'batch'],
        featured: true,
      },
      {
        id: 4,
        title: 'eBird 47GB Big Data Processor',
        subtitle: 'Java · Kafka · Docker · Python · SQL · DuckDB',
        description: 'Real-time anomaly detection pipeline processing a 47GB eBird dataset with DuckDB and SQL, streaming 1,000+ synthetic observations via Kafka, achieving 100% precision, 96.9% recall, and 98.4% F1-score with zero false positives.',
        date: 'May – Jul 2025',
        techStack: ['Java 23', 'Apache Kafka', 'Docker Compose', 'DuckDB', 'SQL', 'Python', 'pandas', 'NumPy', 'scikit-learn', 'Maven'],
        highlights: [
          '100% precision, 96.9% recall (31/32 detected), 98.4% F1-score — zero false positives',
          '47GB eBird dataset processed with DuckDB — 174,422+ observations over 20 years',
          '447 San Diego Mourning Dove records used to train polynomial regression (R² = 0.969)',
          '1,000+ synthetic observations with 32 injected anomalies streamed via Kafka producer',
          'End-to-end: eBird → DuckDB → Python → Kafka → Java Streams → JSON alerts',
          'Maven build automation, Docker Compose, fault-tolerant Kafka architecture'
        ],
        features: [
          {
            title: 'Real-time Kafka Streaming',
            description: 'Java 23 Kafka Streams consumer with Z-score anomaly detection, 1,000+ obs/session throughput',
            icon: <FaStream />
          },
          {
            title: '47GB DuckDB Processing',
            description: 'SQL analytics on full eBird dataset — 174,422+ observations, 20-year temporal analysis',
            icon: <FaDatabase />
          },
          {
            title: 'Polynomial Regression',
            description: 'R² = 0.969 on 447 San Diego sightings for 2025 forecasting and seasonal modeling',
            icon: <FaChartLine />
          },
          {
            title: 'Containerized Pipeline',
            description: 'Docker Compose + Maven end-to-end from raw dataset to real-time JSON alert output',
            icon: <FaDocker />
          }
        ],
        githubUrl: 'https://github.com/yvnnhong/ebird-java-kafka-stream-processor',
        categories: ['streaming', 'batch'],
        featured: true,
      }
    ]
    
    setProjects(projectsData)
  }, [])
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(selectedCategory))

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
          My <span className={styles.textGradient}>Projects</span>
        </h1>
        <p className={styles.pageSubtitle}>
          End-to-end data engineering pipelines — cloud, batch, and streaming
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
          className={`${styles.filterButton} ${selectedCategory === 'aws' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('aws')}
        >
          AWS
        </button>
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'gcp' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('gcp')}
        >
          GCP
        </button>
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'batch' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('batch')}
        >
          Batch Pipelines
        </button>
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'streaming' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('streaming')}
        >
          Streaming
        </button>
      </motion.div>

      <div className={styles.projectsGrid}>
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={`${selectedCategory}-${project.id}`} 
              project={project}
            />
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
    >
      <div className={styles.projectCardInner}>
        {/* Header */}
        <div className={styles.projectHeader}>
          <div className={styles.projectMeta}>
            <span className={styles.projectDate}>{project.date}</span>
            <div className={styles.projectLinks}>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  className={styles.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="View Repository"
                >
                  <FaGithub />
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  className={styles.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
          
          <h2 className={styles.projectTitle}>{project.title}</h2>
          <p className={styles.projectSubtitle}>{project.subtitle}</p>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className={styles.techStackSection}>
          <div className={styles.techStackGrid}>
            {project.techStack.slice(0, 6).map((tech, index) => (
              <span key={index} className={styles.techTag}>{tech}</span>
            ))}
            {project.techStack.length > 6 && (
              <span className={styles.techMore}>+{project.techStack.length - 6} more</span>
            )}
          </div>
        </div>

        {/* Key Features */}
        <div className={styles.featuresSection}>
          <h3 className={styles.sectionTitle}>Key Features</h3>
          <div className={styles.featuresGrid}>
            {project.features.map((feature, index) => (
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

        {/* Highlights */}
        <div className={styles.highlightsSection}>
          <h3 className={styles.sectionTitle}>Technical Highlights</h3>
          <div className={styles.highlightsList}>
            {project.highlights.slice(0, 4).map((highlight, index) => (
              <div key={index} className={styles.highlightItem}>
                <div className={styles.highlightBullet}></div>
                <span className={styles.highlightText}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={styles.projectFooter}>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              className={styles.viewRepoButton} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
              View Repository
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className={styles.liveDemoButton} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects