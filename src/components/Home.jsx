import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaDatabase,
  FaCloud,
  FaStream,
  FaCogs,
  FaLayerGroup,
  FaChartLine
} from 'react-icons/fa'
import profilePic from '../assets/profile_pic.png'
import styles from './Home.module.css'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.homeContainer}
    >
      {/* Fixed Social Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className={styles.socialLinks}
      >
        <a href="https://github.com/yvnnhong" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaGithub />
        </a>
        <a href="http://www.linkedin.com/in/yvnnhong" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaLinkedinIn />
        </a>
        <Link to="/contact" className={styles.socialIcon}>
          <FaEnvelope />
        </Link>
      </motion.div>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroMetadata}
          >
            <span className={styles.metaTag}>DATA ENGINEER</span>
            <span className={styles.metaTag}>AWS · GCP · Spark</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.heroTitle}
          >
            Hello, my name is
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.heroName}
          >
            Yvonne Hong.
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.heroSubtitle}
          >
            I build data pipelines that scale.
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.heroDescription}
          >
            Recent UC San Diego grad (B.S. Mathematics-Computer Science) specializing in 
            data engineering — building end-to-end pipelines on AWS and GCP, medallion 
            architectures with Delta Lake, and automated orchestration with Airflow and dbt.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={styles.heroDescription2}
          >
            I love turning messy, raw data into clean, reliable systems that teams can actually use.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={styles.ctaButtons}
          >
            <Link to="/contact" className={styles.primaryBtn}>
              Get In Touch
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.heroVisuals}
        >
          <div className={styles.profileWrapper}>
            <img src={profilePic} alt="Yvonne Hong" className={styles.profileImage} />
          </div>
          
          <div className={styles.techStack}>
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaCloud /></div>
              <div className={styles.techContent}>
                <h4>Cloud Platforms</h4>
                <p>AWS · GCP · Lambda · Dataproc</p>
              </div>
            </div>
            
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaStream /></div>
              <div className={styles.techContent}>
                <h4>Pipeline Orchestration</h4>
                <p>Airflow · Step Functions · dbt</p>
              </div>
            </div>
            
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaLayerGroup /></div>
              <div className={styles.techContent}>
                <h4>Data Processing</h4>
                <p>PySpark · Delta Lake · BigQuery</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className={styles.achievementsSection}
      >
        <div className={styles.achievementCards}>
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaChartLine />
            </div>
            <div className={styles.achievementContent}>
              <h3>85% Manual Time Saved</h3>
              <p>Eliminated manual copy-paste workflows at Tristero by deploying a serverless AWS ETL pipeline end-to-end</p>
            </div>
          </div>
          
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaDatabase />
            </div>
            <div className={styles.achievementContent}>
              <h3>1.5M+ Records Processed</h3>
              <p>Ingested and cleaned 1.5M+ sea turtle occurrence records across 4 endangered species via PySpark on GCP Dataproc</p>
            </div>
          </div>
          
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaCogs />
            </div>
            <div className={styles.achievementContent}>
              <h3>Full Medallion Architecture</h3>
              <p>Bronze → Silver → Gold pipelines with Delta Lake, dbt, CI/CD, and Terraform across multiple production projects</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className={styles.expertiseSection}
      >
        <div className={styles.expertiseGrid}>
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaCloud className={styles.expertiseIcon} />
              <h3>Cloud & Infrastructure</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>AWS</h4>
                <p>Lambda, Glue, S3, Athena, Step Functions, RDS, EventBridge, Secrets Manager</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>GCP</h4>
                <p>Dataproc, BigQuery, GCS, IAM — provisioned via Terraform</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>IaC & Containers</h4>
                <p>Terraform, Docker, Docker Compose, Shell Scripting</p>
              </div>
            </div>
          </div>
          
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaStream className={styles.expertiseIcon} />
              <h3>Pipelines & Orchestration</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>Orchestration</h4>
                <p>Apache Airflow (DAGs, Docker Compose), AWS Step Functions, EventBridge</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Transformation</h4>
                <p>dbt Core (BigQuery, DuckDB), SQL models, data quality tests, CI/CD via GitHub Actions</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Streaming</h4>
                <p>Apache Kafka, Java Streams, real-time anomaly detection</p>
              </div>
            </div>
          </div>
          
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaLayerGroup className={styles.expertiseIcon} />
              <h3>Storage & Processing</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>Distributed Processing</h4>
                <p>Apache Spark, PySpark, ephemeral Dataproc clusters, DuckDB</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Storage Formats</h4>
                <p>Delta Lake (atomic commits, schema enforcement), Parquet, S3, GCS</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Databases</h4>
                <p>PostgreSQL, BigQuery, Athena SQL, RDS, SQLite</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Home