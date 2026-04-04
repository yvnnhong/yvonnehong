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
    languages: ['Python', 'Java', 'C/C++', 'SQL'],
    dataEngineering: ['AWS Lambda', 'AWS Glue', 'S3', 'Athena', 'Step Functions', 'EventBridge', 'RDS', 'GCP Dataproc', 'BigQuery', 'GCS', 'Apache Airflow', 'dbt Core', 'Apache Spark', 'PySpark', 'MLflow', 'Delta Lake', 'PostgreSQL'],
    processing: ['pandas', 'NumPy', 'scikit-learn', 'DuckDB', 'Delta Lake', 'Parquet'],
    infra: ['Docker', 'Docker Compose', 'Terraform', 'GitHub Actions', 'Apache Kafka', 'Maven'],
    backend: ['Flask', 'FastAPI', 'REST APIs', 'SQLite', 'Shell Scripting (Bash, PowerShell)']
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
          Data engineering experience, projects, and tech stack
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
              <p className={styles.profileTitle}>Data Engineering · AWS · GCP · Spark · dbt</p>
              
              <div className={styles.profileMetrics}>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaCloud /></div>
                  <div className={styles.metricInfo}>
                    <h4>AWS + GCP</h4>
                    <p>Cloud Platforms</p>
                  </div>
                </div>
                <div className={styles.profileMetric}>
                  <div className={styles.metricIcon}><FaDatabase /></div>
                  <div className={styles.metricInfo}>
                    <h4>1.5M+</h4>
                    <p>Records Processed</p>
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

              {/* EDUCATION */}
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
                            <li>Machine Learning Algorithms</li>
                            <li>Artificial Intelligence: Probabilistic Reasoning & Decision-Making</li>
                            <li>Design & Analysis of Algorithms</li>
                            <li>Advanced Data Structures</li>
                            <li>Probability & Statistics</li>
                            <li>Applied & Computational Linear Algebra</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* EXPERIENCE */}
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
                        <div className={styles.timelinePeriod}>Jul 2024 – Oct 2024</div>
                        <h3>Data Engineering Intern</h3>
                        <h4>Tristero · San Diego, CA</h4>
                        <ul className={styles.experienceList}>
                          <li>Created and deployed an end-to-end serverless AWS ETL pipeline — Lambda, Glue, S3, Athena, Step Functions, EventBridge, Secrets Manager — to automate weekly partner data ingestion from Google Sheets, replacing a fully manual copy-paste workflow and eliminating 85% of manual processing time</li>
                          <li>Implemented medallion architecture with a raw CSV layer and a processed Parquet layer; wrote an AWS Glue Python Shell job to clean and normalize partner data, derive TVL size buckets, and write partitioned output to S3 by partner category (DeFi, CeFi, DEXs, CEXs, Wallets, Infrastructure) and size bucket; registered schema via Glue Crawler and Glue Data Catalog for Athena SQL queries</li>
                          <li>Resolved cross-platform binary incompatibility (cffi, cryptography compiled on Windows failing on Lambda's Linux runtime) by building a Linux-compatible Lambda deployment package inside a Docker container using the official public.ecr.aws/lambda/python:3.12 base image; pinned cryptography to v41 to avoid Rust-based bindings introduced in v42 that caused silent import failures on Lambda</li>
                          <li>Authenticated securely to the Google Sheets API via a GCP service account with credentials stored in AWS Secrets Manager; deployed a second Lambda output function that queries processed partner data directly from Athena via boto3 and writes segmented tabs back to Google Sheets by partner category</li>
                          <li>Orchestrated full pipeline using AWS Step Functions — ingest Lambda → Glue job → output Lambda — triggered weekly via EventBridge cron; enabled S3 versioning to preserve every weekly raw and processed snapshot indefinitely</li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaLaptopCode /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>Sept 2021 – Dec 2021</div>
                        <h3>Data Engineering Intern</h3>
                        <h4>Sagepoint Financial · La Jolla, CA</h4>
                        <ul className={styles.experienceList}>
                          <li>Built an AWS data pipeline (Lambda, Step Functions, S3, RDS) to automate ingestion of client portfolio data</li>
                          <li>Integrated Morningstar Direct Python package to enrich holdings with live ratings, returns, and expense ratios; loaded structured data into Postgres and wrote segmented output to Google Sheets organized by account type</li>
                          <li>Orchestrated quarterly report generation via Apache Airflow, triggering the full pipeline on an automated schedule</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
              
              {/* PROJECTS */}
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
                      <div className={styles.timelineIcon}><FaCloud /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>March 2026</div>
                        <h3>TurtleTide</h3>
                        <h4>BigQuery · GCP Dataproc · SQL · Airflow · PySpark · dbt · Delta Lake · MLflow</h4>
                        <ul className={styles.experienceList}>
                          <li>Built a weekly-automated data engineering pipeline tracking global sea turtle migration patterns by ingesting occurrence records from the OBIS REST API across 4 endangered species, detecting anomalous sighting patterns using STL seasonal decomposition, and surfacing findings through a live Streamlit dashboard with geospatial maps and ocean basin analytics</li>
                          <li>Ingested 1.5M+ raw occurrence records (Leatherback, Green, Loggerhead, Hawksbill) via chunked paginated ingestion (10K records/call); cleaned and typed raw JSON with PySpark on ephemeral Google Cloud Dataproc clusters — deduplicating, dropping null coordinates, standardizing field names — and wrote Silver layer as a Delta Lake table on GCS for atomic commits and schema enforcement; clusters created at job start and deleted immediately to minimize cost</li>
                          <li>Modeled Silver-to-Gold transformations with dbt Core targeting BigQuery; wrote 3 SQL models (stg_obis_occurrences, fct_turtle_sightings, rpt_basin_anomalies) with 7 data quality tests including not_null, accepted_values, and coordinate range validation; automated test execution on every commit via GitHub Actions CI/CD</li>
                          <li>Implemented STL anomaly detection per species per ocean basin — decomposed monthly sighting counts into trend, seasonal, and residual components; flagged basins where residuals exceeded 2 standard deviations; all runs logged to MLflow with parameters, metrics, and per-basin anomaly artifacts</li>
                          <li>Orchestrated full pipeline with Apache Airflow 7-task DAG (@weekly) via Docker Compose; provisioned all GCP infrastructure (GCS buckets, BigQuery datasets, IAM) as code using Terraform; deployed live dashboard to Streamlit Cloud</li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaStream /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>Jan – Feb 2026</div>
                        <h3>MigrationPulse</h3>
                        <h4>Apache Airflow · PySpark · dbt · Delta Lake · AWS S3 · MLflow</h4>
                        <ul className={styles.experienceList}>
                          <li>Built a weekly-automated pipeline ingesting live GPS telemetry from the Movebank Animal Tracking API for migratory species, processing through Bronze → Silver → Gold medallion architecture on AWS S3, and detecting migration corridor deviations using DTW (Dynamic Time Warping) — surfaced via a live Streamlit dashboard with pydeck migration maps and per-individual anomaly scoring</li>
                          <li>Ingested 9.4M+ GPS records across 5 species (Bald Eagle, Turkey Vulture, Snow Goose, Canada Goose, Mallard) and 123 individuals; implemented chunked ingestion using pandas chunksize to handle 2.3GB+ datasets exceeding S3 single-upload limits; cleaned and typed raw telemetry with PySpark and wrote Silver layer as a Delta Lake table on S3 for atomic commits and schema enforcement</li>
                          <li>Modeled Silver-to-Gold transformations with dbt Core using DuckDB as the local execution engine; wrote 3 SQL models with 6 data quality tests; staging model reads directly from Delta Lake via DuckDB's delta_scan() with a pre-hook S3 secret for credential injection; automated test execution via GitHub Actions CI/CD</li>
                          <li>Implemented Sakoe-Chiba banded DTW anomaly detection — built a species-level trajectory template from median lat/long paths across all individuals, computed per-individual DTW distance against the template, and flagged individuals exceeding 2 standard deviations; all runs logged to MLflow</li>
                          <li>Orchestrated full pipeline with Apache Airflow 8-task DAG (@weekly) via Docker Compose — from API health check through bronze ingest, silver Delta Lake write, dbt build, DTW scoring, and anomaly notification</li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaDatabase /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>Dec 2025</div>
                        <h3>Beaver Watershed Pipeline</h3>
                        <h4>AWS Step Functions · Lambda · S3 · RDS PostgreSQL · Streamlit</h4>
                        <ul className={styles.experienceList}>
                          <li>Built a weekly-automated AWS pipeline spatially joining GBIF beaver sighting records with USGS water quality data (dissolved oxygen, temperature, pH, turbidity) to identify anomalous monitoring stations near beaver habitat — surfaced via a live Streamlit dashboard with geospatial maps and Isolation Forest anomaly detection</li>
                          <li>Ingested and spatially joined 39,900+ beaver sightings across 569 USGS monitoring stations nationwide into RDS PostgreSQL; matched each sighting to its nearest station within 500km using vectorized NumPy haversine distance; applied per-parameter sentinel value filters and station deduplication</li>
                          <li>Architected AWS Step Functions orchestration with 4-Lambda workflow to solve GBIF rate limiting — async download request, free Wait State (vs billable Lambda idle time), GBIF status poller, and processor Lambda; reduced pipeline from timeout to 11 min end-to-end</li>
                          <li>Integrated Isolation Forest anomaly detection with EPA climate region z-score normalization — normalized water quality readings within 10 regional baselines before scoring; packaged scikit-learn + scipy into Linux-compatible Docker Lambda layer under 262MB AWS limit</li>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.timelineItem}>
                      <div className={styles.timelineIcon}><FaLayerGroup /></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.timelinePeriod}>May – Jul 2025</div>
                        <h3>eBird 47GB Big Data Processor</h3>
                        <h4>Java · Kafka · Docker · Python · SQL · DuckDB</h4>
                        <ul className={styles.experienceList}>
                          <li>Engineered real-time anomaly detection pipeline using SQL, DuckDB, Java 23, Apache Kafka, and Docker; generated 1,000+ synthetic observations via Python Kafka producer, based on 447 historical Mourning Dove records from San Diego County (2005–2024), with 32 injected anomalies; achieved 100% precision, 96.9% recall (31/32 detected), and 98.4% F1-score via Z-score analysis</li>
                          <li>Processed 47GB eBird dataset with SQL and DuckDB, analyzing 174,422+ observations and 34,963+ records over 20 years; used 447 San Diego sightings to train polynomial regression (R² = 0.969) for 2025 population forecasting and seasonal modeling</li>
                          <li>Built end-to-end fault-tolerant pipeline (eBird → DuckDB → Python → Kafka producer → Java Streams → alerts) with Maven, Docker Compose, and production-ready Kafka architecture; ensured zero false positives and 1,000+ obs/session throughput</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
              
              {/* SKILLS */}
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
                      <h3>Data Engineering</h3>
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
                      <h3>Data Processing & Storage</h3>
                      <div className={styles.skillCards}>
                        {skills.processing.map((skill, index) => (
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
                      <h3>Infrastructure & DevOps</h3>
                      <div className={styles.skillCards}>
                        {skills.infra.map((skill, index) => (
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
                      <h3>Backend & APIs</h3>
                      <div className={styles.skillCards}>
                        {skills.backend.map((skill, index) => (
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