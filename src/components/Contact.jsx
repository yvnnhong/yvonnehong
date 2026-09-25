
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaDatabase, FaCloud, FaStream } from 'react-icons/fa'
import profilePic from '../assets/profile_pic.png'
import styles from './Contact.module.css'
const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.contactContainer}
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={styles.contactHeader}
      >
        <h1 className={styles.pageTitle}>
          Contact <span className={styles.textGradient}>Me!</span>
        </h1>
        <p className={styles.pageSubtitle}>
          Let's build something reliable under load
        </p>
      </motion.div>
      <div className={styles.contactContent}>
        <motion.div 
          className={styles.contactInfo}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.profileSection} variants={fadeInUp}>
            <div className={styles.profileWrapper}>
              <img src={profilePic} alt="Yvonne Hong" className={styles.profileImage} />
            </div>
            <div className={styles.profileInfo}>
              <h2>Yvonne Hong</h2>
              <p className={styles.profileTitle}>Distributed Systems Engineer</p>
            </div>
          </motion.div>
          <motion.div className={styles.infoHeader} variants={fadeInUp}>
            <p>
              I'm a distributed systems engineer working on rate limiting, streaming pipelines,
              and observable production services. Reach me at{' '}
              <a href="mailto:yvonneh.nyc@gmail.com" className={styles.emailLink}>
                yvonneh.nyc@gmail.com
              </a>
            </p>
          </motion.div>
          <div className={styles.contactCards}>
            <ContactCard 
              icon={<FaEnvelope />}
              title="Email"
              content="yvonneh.nyc@gmail.com"
              link="mailto:yvonneh.nyc@gmail.com"
              delay={0}
            />
            <ContactCard 
              icon={<FaMapMarkerAlt />}
              title="Location"
              content="Toronto, ON / San Diego, CA"
              link="https://maps.google.com"
              delay={0.1}
            />
          </div>
          <motion.div className={styles.expertiseHighlight} variants={fadeInUp}>
            <h3>What I Bring to the Table</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <FaStream className={styles.skillIcon} />
                <div className={styles.skillContent}>
                  <h4>Streaming & Limits</h4>
                  <p>Kafka, Flink, Redis Lua token buckets, ElastiCache sharding</p>
                </div>
              </div>
              <div className={styles.skillCard}>
                <FaCloud className={styles.skillIcon} />
                <div className={styles.skillContent}>
                  <h4>Cloud Systems</h4>
                  <p>AWS EC2, ALB, Lambda, Step Functions, ElastiCache, Docker</p>
                </div>
              </div>
              <div className={styles.skillCard}>
                <FaDatabase className={styles.skillIcon} />
                <div className={styles.skillContent}>
                  <h4>Storage</h4>
                  <p>Postgres, Cassandra (HNSW), DynamoDB, S3, Parquet</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className={styles.socialLinks} variants={fadeInUp}>
            <h3>Connect with me</h3>
            <div className={styles.socialIcons}>
              <a href="http://www.linkedin.com/in/yvnnhong" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/yvnnhong" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
const ContactCard = ({ icon, title, content, link, delay }) => {
  return (
    <motion.a 
      href={link}
      className={styles.contactCard}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay }
        }
      }}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel={link.startsWith('http') ? 'noopener noreferrer' : ''}
    >
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </motion.a>
  )
}
export default Contact