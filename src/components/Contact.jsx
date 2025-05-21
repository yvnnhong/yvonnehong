import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address'
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    emailjs.sendForm(
      'service_yvqrsrp', // my EmailJS service ID
      'template_20tifed', // my EmailJS template ID
      formRef.current,
      'I98BEOYuKzuLYJBYY' // my EmailJS user ID
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        setIsSubmitting(false)
        setSubmitStatus('success')
        
        // Reset form data
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Clear status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      }, (error) => {
        console.error('Failed to send email:', error.text)
        setIsSubmitting(false)
        setSubmitStatus('error')
        
        setTimeout(() => setSubmitStatus(null), 5000)
      })
  }

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
            }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.infoHeader} variants={fadeInUp}>
            <h2>Let's Talk Quant Finance!</h2>
            <p>
              I’m actively seeking my next challenge in quantitative finance — ideally with a 
              high-performing team in New York City. With a strong background in statistical 
              modeling, convex optimization, and multivariate stochastic processes, I’m ready to contribute from day one. 
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

        <motion.div 
          className={styles.contactForm}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.3
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.formCard}>
            <h3>Send me a message</h3>
            
            {submitStatus === 'success' && (
              <motion.div 
                className={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                className={`${styles.errorMessage}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Oops! Something went wrong. Please try again later.
              </motion.div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={formErrors.name ? styles.inputError : ''}
                />
                {formErrors.name && <span className={styles.errorText}>{formErrors.name}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className={formErrors.email ? styles.inputError : ''}
                />
                {formErrors.email && <span className={styles.errorText}>{formErrors.email}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                  className={formErrors.subject ? styles.inputError : ''}
                />
                {formErrors.subject && <span className={styles.errorText}>{formErrors.subject}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="5"
                  className={formErrors.message ? styles.inputError : ''}
                ></textarea>
                {formErrors.message && <span className={styles.errorText}>{formErrors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <span className={styles.buttonShine}></span>
              </button>
            </form>
          </div>
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