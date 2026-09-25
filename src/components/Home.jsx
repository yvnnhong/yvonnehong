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
            <span className={styles.metaTag}>DISTRIBUTED SYSTEMS ENGINEER</span>
            <span className={styles.metaTag}>Go · Kafka · Redis · AWS</span>
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
            I build distributed systems that stay consistent under load.
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.heroDescription}
          >
            UC San Diego grad (B.S. Mathematics-Computer Science). Distributed Systems Engineer
            at Nebulearn — rate limiting, Kafka consumer groups, Flink abuse detection,
            Cassandra vector retrieval, and production load testing on AWS.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={styles.heroDescription2}
          >
            I care about correct limits across shards, p99 latency, and systems you can observe.
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
              <div className={styles.techIcon}><FaStream /></div>
              <div className={styles.techContent}>
                <h4>Streaming & Limits</h4>
                <p>Kafka · Flink · Redis · token buckets</p>
              </div>
            </div>
            
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaCloud /></div>
              <div className={styles.techContent}>
                <h4>Cloud & Compute</h4>
                <p>AWS EC2 · ALB · ElastiCache · Docker</p>
              </div>
            </div>
            
            <div className={styles.techCard}>
              <div className={styles.techIcon}><FaLayerGroup /></div>
              <div className={styles.techContent}>
                <h4>Storage</h4>
                <p>Postgres · Cassandra · S3 · DynamoDB</p>
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
              <h3>5,500–8,300 RPS</h3>
              <p>k6-tested Golang flashcard pipeline behind ALB and a 3-instance Redis token-bucket limiter at ~43 ms p95</p>
            </div>
          </div>
          
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaDatabase />
            </div>
            <div className={styles.achievementContent}>
              <h3>90% Bot Reduction</h3>
              <p>Split Kafka consumers: Go for generation, Flink keyed state for per-account velocity — active bots 20 → 2</p>
            </div>
          </div>
          
          <div className={styles.achievementCard}>
            <div className={styles.achievementIcon}>
              <FaCogs />
            </div>
            <div className={styles.achievementContent}>
              <h3>32% AWS Cost Cut</h3>
              <p>Idle staging shutdown plus JVM heap tuning from k6 data — ~$1.2k/mo → $800/mo and fewer OOMs</p>
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
              <FaStream className={styles.expertiseIcon} />
              <h3>Distributed Systems</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>Messaging</h4>
                <p>Apache Kafka, Apache Flink, RabbitMQ, consumer groups, keyed state</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Rate limiting</h4>
                <p>Token-bucket limiter, atomic Redis Lua, ElastiCache sharding</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>RPC</h4>
                <p>gRPC, Protobuf, video chunk ingestion</p>
              </div>
            </div>
          </div>
          
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseHeader}>
              <FaCloud className={styles.expertiseIcon} />
              <h3>Cloud & Observability</h3>
            </div>
            <div className={styles.expertiseContent}>
              <div className={styles.skillCategory}>
                <h4>AWS</h4>
                <p>EC2, ALB, Lambda, Step Functions, Glue, Athena, RDS, EventBridge, Secrets Manager, ElastiCache</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Testing</h4>
                <p>k6 load tests, pytest, Prometheus, Grafana</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Containers</h4>
                <p>Docker, Linux Lambda packaging</p>
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
                <h4>Databases</h4>
                <p>PostgreSQL, Apache Cassandra, Amazon DynamoDB, Amazon S3, Parquet</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Search</h4>
                <p>HNSW vector index on Cassandra for RAG embeddings</p>
              </div>
              <div className={styles.skillCategory}>
                <h4>Languages</h4>
                <p>Go, Java, Python, SQL</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}
export default Home