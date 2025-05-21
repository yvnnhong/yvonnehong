import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
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
          Get In Touch <span className="text-gradient">With Me</span>
        </h1>
      </motion.div>

      <div className={styles.contactContent}>
        <motion.div 
          className={styles.contactInfo}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }}
          }
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.infoHeader} variants={fadeInUp}>
            <h2>Let's Talk Quant Finance!</h2>
            <p>
              I'm actively seeking my next challenge in quantitative finance — ideally with a 
              high-performing team in New York City. With a strong background in statistical 
              modeling, convex optimization, and multivariate stochastic processes, I'm ready to contribute from day one. 
              Feel free to reach out to me directly at{' '}
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
              content={
                <>
                  📍 Currently in La Jolla, CA<br />
                  🗽 NYC preferred, open to relocation
                </>
              }
              link="https://maps.google.com"
              delay={0.1}
            />
            
            <ContactCard 
              icon={<FaPhone />}
              title="Phone"
              content="(858)-214-7354"
              link="tel:8582147354"
              delay={0.2}
            />
          </div>

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
          transition: {
            duration: 0.6,
            delay
          }
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