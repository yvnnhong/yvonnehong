import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaBrain, 
  FaCode, 
  FaRocket, 
  FaEye, 
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaStream,
  FaDocker,
  FaPython
} from 'react-icons/fa'
import styles from './Github.module.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  useEffect(() => {
    // Your actual ML projects from resume
    const projectsData = [
      {
        id: 1,
        title: 'QA RAG MLops Pipeline',
        subtitle: 'Production-Ready Document Q&A System',
        description: 'Built production-ready RAG system using TensorFlow, Hugging Face Transformers, and Large Language Models for document Q&A with ChromaDB and Pinecone vector databases.',
        date: 'July 2025',
        techStack: ['TensorFlow', 'Hugging Face', 'RAG', 'Generative AI', 'ChromaDB', 'Pinecone', 'spaCy', 'NLTK', 'Docker', 'FastAPI'],
        highlights: [
          'Semantic search with cosine similarity',
          '384-dimensional vector embeddings',
          'PDF extraction and text chunking',
          'OpenAI API integration',
          'MLOps architecture with Docker',
          'Model versioning & monitoring',
          'Streamlit/Gradio interfaces'
        ],
        features: [
          {
            title: 'NLP Pipeline',
            description: 'Advanced text processing with spaCy, NLTK, and sentence-transformers',
            icon: <FaLightbulb />
          },
          {
            title: 'Vector Database',
            description: 'ChromaDB and Pinecone for efficient semantic search',
            icon: <FaBrain />
          },
          {
            title: 'MLOps Architecture',
            description: 'Production deployment with Docker and FastAPI',
            icon: <FaRocket />
          }
        ],
        githubUrl: 'https://github.com/yvnnhong/document-qa-rag-mlops-pipeline',
        category: 'nlp',
        featured: true,
      },
      {
        id: 2,
        title: 'Multi-Task Food Classification System',
        subtitle: 'Advanced Computer Vision with PyTorch',
        description: 'Built multi-task CNN system using PyTorch for food classification (101 classes), cuisine detection (13 categories), and nutrition regression with ResNet50 architecture.',
        date: 'July 2025',
        techStack: ['PyTorch', 'OpenCV', 'Gradio', 'Computer Vision', 'ResNet50', 'PIL/Pillow', 'CUDA', 'FastAPI'],
        highlights: [
          '101 food classes classification',
          '13 cuisine categories detection',
          'Nutrition regression modeling',
          'Task-specific attention mechanisms',
          'Ensemble methods implementation',
          'Cross-platform deployment',
          'Real-time inference APIs'
        ],
        features: [
          {
            title: 'Multi-Task Learning',
            description: 'Simultaneous food, cuisine, and nutrition prediction',
            icon: <FaEye />
          },
          {
            title: 'CNN Architectures',
            description: '4 custom networks with attention mechanisms',
            icon: <FaBrain />
          },
          {
            title: 'Production Pipeline',
            description: 'ONNX, TorchScript, CoreML deployment',
            icon: <FaCogs />
          }
        ],
        githubUrl: 'https://github.com/yvnnhong/pytorch-computer-vision-food-analyzer',
        category: 'computer-vision',
        featured: true,
      },
      {
        id: 3,
        title: 'eBird Java Kafka Stream Processor',
        subtitle: 'Real-time Anomaly Detection Pipeline',
        description: 'Engineered real-time anomaly detection pipeline using Apache Kafka, Java 23, and Docker achieving 100% precision and 96.9% recall on 1,000+ synthetic observations.',
        date: 'June 2025',
        techStack: ['Java', 'Kafka', 'Docker', 'Python', 'SQL', 'DuckDB', 'scikit-learn', 'Maven'],
        highlights: [
          '100% Precision (Zero False Positives)',
          '96.9% Recall Performance',
          '47GB eBird Dataset Processing',
          '20 Years Temporal Analysis',
          'R² = 0.969 Regression Model',
          'Real-time Stream Processing',
          'Containerized Deployment'
        ],
        features: [
          {
            title: 'Stream Processing',
            description: 'Apache Kafka with Java 23 for real-time events',
            icon: <FaStream />
          },
          {
            title: 'ML Analytics',
            description: 'Statistical anomaly detection with Z-score analysis',
            icon: <FaChartLine />
          },
          {
            title: 'Data Pipeline',
            description: 'End-to-end ETL with DuckDB and containerization',
            icon: <FaDocker />
          }
        ],
        githubUrl: 'https://github.com/yvnnhong/ebird-java-kafka-stream-processor',
        category: 'ml-engineering',
        featured: true,
      }
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
          My <span className={styles.textGradient}>Projects</span>
        </h1>
        <p className={styles.pageSubtitle}>
          Production-ready machine learning systems with measurable impact
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
          className={`${styles.filterButton} ${selectedCategory === 'nlp' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('nlp')}
        >
          NLP & RAG
        </button>
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'computer-vision' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('computer-vision')}
        >
          Computer Vision
        </button>
        <button 
          className={`${styles.filterButton} ${selectedCategory === 'ml-engineering' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('ml-engineering')}
        >
          ML Engineering
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
      data-category={project.category}
    >
      <div className={styles.projectCardInner}>
        {/* Header */}
        <div className={styles.projectHeader}>
          <div className={styles.projectMeta}>
            <span className={styles.projectDate}>{project.date}</span>
            <div className={styles.projectLinks}>
              <a 
                href={project.githubUrl} 
                className={styles.projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                title="View Repository"
              >
                <FaGithub />
              </a>
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
          <a 
            href={project.githubUrl} 
            className={styles.viewRepoButton} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
            View Repository
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects