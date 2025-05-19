import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaCode, FaBrain } from 'react-icons/fa'
import styles from './Projects.module.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  useEffect(() => {
    // Simulated project data - in a real app, this could come from an API
    const projectsData = [
      {
        id: 1,
        title: 'Risk Parity Portfolio Optimization Model',
        description: 'A Python-based risk parity optimizer using CVXPY and Q-learning RL, with Alpha Vantage data and backtesting for risk-adjusted returns.',
        longDescription: 'Engineered a convex optimization-based portfolio allocation algorithm that equalizes risk contribution across all assets using robust covariance estimation. Implemented a reinforcement learning component with Q-learning that dynamically adjusts portfolio weights based on changing market conditions.',
        category: 'finance',
        technologies: ['Python', 'CVXPY', 'Pandas', 'Alpha Vantage API', 'Reinforcement Learning'],
        image: 'project1.jpg',
        githubUrl: 'https://github.com/yvnnhong/risk-parity-portfolio-optimization-model',
        liveUrl: 'https://github.com/yvnnhong/risk-parity-portfolio-optimization-model/blob/main/risk_parity_portfolio_optimization_model.ipynb',
        featured: false,
      },
      {
        id: 2,
        title: 'Cross-Asset Volatility Arbitrage Engine',
        description: 'A volatility arbitrage strategy exploiting mispricings between related asset pairs, using z-scores for signal generation and CVXPY for portfolio optimization.',
        longDescription: 'Developed a systematic volatility arbitrage engine that identifies and exploits mispricings between related asset pairs. The system uses rolling z-scores to generate trading signals and implements a CVXPY optimization framework for optimal capital allocation with transaction cost modeling.',
        category: 'finance',
        technologies: ['Python', 'CVXPY', 'Pandas', 'Matplotlib', 'Statistical Analysis'],
        image: 'project2.jpg',
        githubUrl: 'https://github.com/yvnnhong/cross-asset-volatility-arbitrage-engine',
        liveUrl: 'https://github.com/yvnnhong/cross-asset-volatility-arbitrage-engine',
        featured: false,
      },
      {
        id: 3,
        title: 'Quantitative Portfolio Strategy SMA Backtester',
        description: 'A Python-based stock portfolio system using SMA-driven trading to optimize risk-adjusted returns, with yfinance data and Matplotlib visualizations.',
        longDescription: 'Built a comprehensive backtesting framework for evaluating moving average crossover strategies across multiple assets. The system calculates risk metrics including Sharpe ratio, Sortino ratio, and maximum drawdown while visualizing equity curves and portfolio composition over time.',
        category: 'finance',
        technologies: ['Python', 'Pandas', 'yfinance', 'Matplotlib', 'NumPy'],
        image: 'project3.jpg',
        githubUrl: 'https://github.com/yvnnhong/quantitative-portfolio-strategy-backtester',
        liveUrl: 'https://github.com/yvnnhong/quantitative-portfolio-strategy-backtester/blob/main/improved_quantitative_portfolio_strategy_backtester.ipynb',
        featured: false,
      },
      {
        id: 4,
        title: 'Rolling Factor Model for Alpha Attribution',
        description: 'A rolling Fama-French 5-factor + momentum model for estimating dynamic alpha and betas, with an optimized factor timing strategy and robust data pipeline.',
        longDescription: 'Created a time-varying factor model that captures dynamic exposures to market risk factors. The model incorporates Fama-French factors plus momentum and implements a factor timing strategy that adjusts positions based on factor strength signals while accounting for transaction costs.',
        category: 'finance',
        technologies: ['Python', 'Pandas', 'statsmodels', 'yfinance', 'Seaborn'],
        image: 'project4.jpg',
        githubUrl: 'https://github.com/yvnnhong/rolling-factor-model-alpha-attribution',
        liveUrl: 'https://github.com/yvnnhong/rolling-factor-model-alpha-attribution/blob/main/rolling_factor_model_alpha_attribution.ipynb',
        featured: false,
      },
      {
        id: 5,
        title: 'Bayesian Kriegspiel Chess Agent',
        description: 'A probabilistic chess agent using Bayesian networks and inference to handle uncertainty in Kriegspiel variant, with Stockfish integration.',
        longDescription: 'Designed a Bayesian inference-based chess agent for Kriegspiel, a chess variant with imperfect information. The system uses probabilistic belief states to track possible game configurations and integrates with Stockfish to evaluate positions and select optimal moves in an uncertain environment.',
        category: 'ml',
        technologies: ['Python', 'Bayesian Networks', 'Stockfish', 'Game Theory', 'MCMC'],
        image: 'project5.jpg',
        githubUrl: 'https://github.com/yvnnhong/bayesian-kriegspiel-chess',
        liveUrl: 'https://github.com/yvnnhong/bayesian-kriegspiel-chess',
        featured: false,
      },
      {
        id: 6,
        title: 'Financial News Sentiment Analyzer',
        description: 'An NLP-based system that analyzes financial news sentiment and correlates it with market movements using transformer models.',
        longDescription: 'Developed a financial news sentiment analyzer that scrapes, processes and analyzes news articles using NLP techniques. The system employs BERT-based models fine-tuned on financial text to extract sentiment signals and correlates these with asset price movements to generate potential trading signals.',
        category: 'ml',
        technologies: ['Python', 'Transformers', 'NLTK', 'PyTorch', 'Web Scraping'],
        image: 'project6.jpg',
        githubUrl: 'https://github.com/yvnnhong/financial-news-sentiment',
        liveUrl: 'https://github.com/yvnnhong/financial-news-sentiment',
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
          A collection of my quantitative finance and machine learning projects
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
          className={`${styles.filterButton} ${selectedCategory === 'finance' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('finance')}
        >
          <FaChartLine className={styles.buttonIcon} />
          Quantitative Finance
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
            {project.category === 'finance' ? (
              <FaChartLine className={styles.projectIcon} />
            ) : (
              <FaCode className={styles.projectIcon} />
            )}
            <span className={styles.projectInitials}>
              {project.title.split(' ').map(word => word[0]).join('')}
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