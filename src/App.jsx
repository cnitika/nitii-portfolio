import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Terminal, 
  Code, 
  Database, 
  Cloud, 
  Bot,
  Cpu,
  Monitor,
  Zap,
  Settings,
  Brain,
  Rocket,
  Shield,
  Globe
} from 'lucide-react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentTheme, setCurrentTheme] = useState('neural')
  const [activeSection, setActiveSection] = useState('hero')

  // Loading animation
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  // Theme configurations
  const themes = {
    neural: {
      name: 'Neural Network',
      bg: 'bg-slate-950',
      primary: 'text-cyan-400',
      secondary: 'text-indigo-400',
      accent: 'text-emerald-400',
      surface: 'bg-slate-900',
      border: 'border-slate-800'
    },
    matrix: {
      name: 'Matrix',
      bg: 'bg-black',
      primary: 'text-green-400',
      secondary: 'text-lime-400',
      accent: 'text-orange-400',
      surface: 'bg-gray-900',
      border: 'border-gray-800'
    },
    cyberpunk: {
      name: 'Cyberpunk',
      bg: 'bg-purple-950',
      primary: 'text-purple-400',
      secondary: 'text-pink-400',
      accent: 'text-yellow-400',
      surface: 'bg-purple-900',
      border: 'border-purple-800'
    }
  }

  const theme = themes[currentTheme]

  // Loading screen messages
  const loadingMessages = [
    "Initializing AI Modules...",
    "Calibrating Automation Protocols...",
    "Loading Neural Networks...",
    "Deploying Intelligence Systems...",
    "Establishing Secure Connections...",
    "System Ready!"
  ]

  const getCurrentMessage = () => {
    const index = Math.floor((loadingProgress / 100) * (loadingMessages.length - 1))
    return loadingMessages[index]
  }

  // Skills data
  const skills = {
    'DevOps & Infrastructure': [
      { name: 'Docker', level: 90, icon: <Database className="w-4 h-4" /> },
      { name: 'Jenkins', level: 85, icon: <Settings className="w-4 h-4" /> },
      { name: 'Linux', level: 95, icon: <Terminal className="w-4 h-4" /> },
      { name: 'Apache', level: 80, icon: <Globe className="w-4 h-4" /> },
      { name: 'Minikube', level: 75, icon: <Cloud className="w-4 h-4" /> }
    ],
    'AI & Machine Learning': [
      { name: 'OpenAI GPT-4', level: 90, icon: <Brain className="w-4 h-4" /> },
      { name: 'YOLO', level: 85, icon: <Monitor className="w-4 h-4" /> },
      { name: 'CNN', level: 80, icon: <Cpu className="w-4 h-4" /> },
      { name: 'Face Recognition', level: 85, icon: <Shield className="w-4 h-4" /> },
      { name: 'LangChain', level: 75, icon: <Bot className="w-4 h-4" /> }
    ],
    'Development': [
      { name: 'Python', level: 95, icon: <Code className="w-4 h-4" /> },
      { name: 'Streamlit', level: 90, icon: <Rocket className="w-4 h-4" /> },
      { name: 'Flask', level: 85, icon: <Globe className="w-4 h-4" /> },
      { name: 'JavaScript', level: 80, icon: <Code className="w-4 h-4" /> },
      { name: 'HTML/CSS', level: 85, icon: <Monitor className="w-4 h-4" /> }
    ]
  }

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Python Automation GUI",
      description: "All-in-one automation dashboard with voice UI, Gmail integration, WhatsApp automation, Docker management, and AI chatbot capabilities.",
      tech: ["Streamlit", "Python", "Docker", "OpenAI", "Voice UI"],
      features: ["Voice Control", "Dark/Light Mode", "PWA Ready", "Docker Packaging"],
      category: "Automation"
    },
    {
      id: 2,
      title: "Docker + Linux Task Automation",
      description: "Web visualizer for 50+ Linux and 20+ Docker commands with voice search and mobile PWA support.",
      tech: ["Python", "Docker", "Linux", "PWA", "Voice Search"],
      features: ["Command Visualization", "Voice Search", "Mobile PWA", "Real Execution"],
      category: "DevOps"
    },
    {
      id: 3,
      title: "AI Breakup Predictor",
      description: "ML model analyzing chat data to predict relationship outcomes with high accuracy using advanced NLP techniques.",
      tech: ["Python", "ML", "NLP", "Streamlit", "Data Analysis"],
      features: ["Chat Analysis", "Prediction Model", "Data Insights", "Interactive UI"],
      category: "AI/ML"
    },
    {
      id: 4,
      title: "YOLO Acne Detector",
      description: "Computer vision application using YOLO for real-time acne detection and classification with bounding box visualization.",
      tech: ["YOLO", "OpenCV", "Python", "Computer Vision", "Streamlit"],
      features: ["Real-time Detection", "Bounding Boxes", "Classification", "Image Processing"],
      category: "AI/ML"
    },
    {
      id: 5,
      title: "All-in-One API Bot",
      description: "Comprehensive automation suite for WhatsApp, Email, SMS, Gmail reading, web scraping, and Instagram posting.",
      tech: ["Python", "APIs", "Automation", "Web Scraping", "Social Media"],
      features: ["Multi-platform", "API Integration", "Automation", "Scheduling"],
      category: "Automation"
    },
    {
      id: 6,
      title: "FocusForge - Focus Tracker",
      description: "Drowsiness detection app using webcam to track focus time, provide motivational alerts, and generate daily reports.",
      tech: ["OpenCV", "Face Detection", "Python", "Real-time Processing"],
      features: ["Drowsiness Detection", "Focus Tracking", "Alerts", "Daily Reports"],
      category: "AI/ML"
    }
  ]

  // Experience data
  const experience = [
    {
      title: "LinuxWorld Mentorship Program",
      company: "Under Vimal Daga Sir",
      period: "2024 - 2025",
      description: "Intensive hands-on training in AI, DevOps, and automation. Built 10+ projects integrating AI with DevOps workflows.",
      achievements: [
        "Built 10+ AI & Automation projects in 6 months",
        "Mastered Docker containerization and deployment",
        "Developed ML models for real-world applications",
        "Created voice-controlled automation systems"
      ]
    }
  ]

  if (isLoading) {
    return (
      <div className={`min-h-screen ${theme.bg} flex items-center justify-center`}>
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className={`text-6xl font-bold ${theme.primary}`}>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                ⚡
              </motion.span>
            </div>
            <h1 className={`text-2xl font-bold ${theme.primary}`}>
              Automated Intelligence Hub
            </h1>
          </motion.div>
          
          <div className="space-y-4">
            <div className={`w-80 h-2 ${theme.surface} rounded-full overflow-hidden`}>
              <motion.div
                className={`h-full bg-gradient-to-r from-cyan-400 to-emerald-400`}
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className={`${theme.secondary} text-sm`}>
              {getCurrentMessage()}
            </p>
            <p className={`${theme.accent} text-xs`}>
              {loadingProgress}%
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme.bg} text-white`}>
      {/* Theme Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {Object.entries(themes).map(([key, t]) => (
          <Button
            key={key}
            variant={currentTheme === key ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentTheme(key)}
            className={`${currentTheme === key ? t.primary : 'text-gray-400'}`}
          >
            {t.name}
          </Button>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 ${theme.surface} backdrop-blur-md border-b ${theme.border}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xl font-bold ${theme.primary}`}
            >
              nitika.dev
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:${theme.primary} transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-lg ${theme.secondary}`}
              >
                Hello! I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={`text-6xl md:text-8xl font-bold ${theme.primary}`}
              >
                NITIKA
                <br />
                KALIRAWNA
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div className={`text-2xl md:text-4xl font-semibold ${theme.secondary}`}>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  DevOps Engineer
                </motion.span>
                <span className={`mx-4 ${theme.accent}`}>•</span>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  AI Developer
                </motion.span>
              </div>
              <div className={`text-xl ${theme.accent}`}>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  Automation Engineer
                </motion.span>
                <span className={`mx-4 ${theme.secondary}`}>•</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  Streamlit Creator
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center space-x-6 pt-8"
            >
              <Button
                variant="outline"
                size="lg"
                className={`${theme.primary} border-current hover:bg-current hover:text-black`}
                asChild
              >
                <a href="#projects">
                  <Rocket className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`${theme.secondary} border-current hover:bg-current hover:text-black`}
                asChild
              >
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${theme.primary} mb-4`}>
              Intelligence Profile
            </h2>
            <p className={`text-lg ${theme.secondary} max-w-3xl mx-auto`}>
              A passionate DevOps and AI Developer from India, specializing in automation, 
              machine learning, and intelligent system design. Currently advancing skills 
              under the mentorship of Vimal Daga Sir in the LinuxWorld program.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className={`text-2xl font-semibold ${theme.secondary}`}>
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated technology enthusiast with expertise in DevOps, AI development, 
                and automation engineering. My journey involves building intelligent systems 
                that bridge the gap between development and operations while leveraging 
                cutting-edge AI technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With hands-on experience in Docker, Linux, Python, and various AI frameworks, 
                I create solutions that automate complex workflows and enhance productivity 
                through intelligent automation.
              </p>
              
              <div className="space-y-4">
                <h4 className={`text-lg font-semibold ${theme.accent}`}>Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`${theme.surface} p-4 rounded-lg ${theme.border} border`}>
                    <div className={`text-2xl font-bold ${theme.primary}`}>10+</div>
                    <div className="text-sm text-gray-400">AI Projects</div>
                  </div>
                  <div className={`${theme.surface} p-4 rounded-lg ${theme.border} border`}>
                    <div className={`text-2xl font-bold ${theme.secondary}`}>6</div>
                    <div className="text-sm text-gray-400">Months Intensive Training</div>
                  </div>
                  <div className={`${theme.surface} p-4 rounded-lg ${theme.border} border`}>
                    <div className={`text-2xl font-bold ${theme.accent}`}>50+</div>
                    <div className="text-sm text-gray-400">Linux Commands Mastered</div>
                  </div>
                  <div className={`${theme.surface} p-4 rounded-lg ${theme.border} border`}>
                    <div className={`text-2xl font-bold ${theme.primary}`}>20+</div>
                    <div className="text-sm text-gray-400">Docker Operations</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className={`text-2xl font-semibold ${theme.secondary}`}>
                Terminal Interface
              </h3>
              <div className={`${theme.surface} rounded-lg p-6 ${theme.border} border font-mono text-sm`}>
                <div className={`${theme.primary} mb-4`}>nitika@automation-hub:~$</div>
                <div className="space-y-2">
                  <div className="flex">
                    <span className={`${theme.accent}`}>$</span>
                    <span className="ml-2">whoami</span>
                  </div>
                  <div className={`${theme.secondary} ml-4`}>Nitika Kalirawna - DevOps & AI Engineer</div>
                  
                  <div className="flex">
                    <span className={`${theme.accent}`}>$</span>
                    <span className="ml-2">cat skills.txt</span>
                  </div>
                  <div className={`${theme.secondary} ml-4`}>
                    Python, Docker, Linux, AI/ML, Automation
                  </div>
                  
                  <div className="flex">
                    <span className={`${theme.accent}`}>$</span>
                    <span className="ml-2">ls projects/</span>
                  </div>
                  <div className={`${theme.secondary} ml-4`}>
                    automation-gui/ ai-predictor/ yolo-detector/ focus-tracker/
                  </div>
                  
                  <div className="flex">
                    <span className={`${theme.accent}`}>$</span>
                    <span className="ml-2">echo $LOCATION</span>
                  </div>
                  <div className={`${theme.secondary} ml-4`}>India</div>
                  
                  <div className="flex">
                    <span className={`${theme.accent}`}>$</span>
                    <span className="ml-2 animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${theme.primary} mb-4`}>
              Automation Pipeline
            </h2>
            <p className={`text-lg ${theme.secondary}`}>
              My journey in building intelligent automation systems
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`${theme.surface} rounded-lg p-8 ${theme.border} border mb-8`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${theme.primary}`}>{exp.title}</h3>
                    <p className={`text-lg ${theme.secondary}`}>{exp.company}</p>
                  </div>
                  <div className={`${theme.accent} font-semibold mt-2 md:mt-0`}>
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{exp.description}</p>
                
                <div className="space-y-3">
                  <h4 className={`font-semibold ${theme.secondary}`}>Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center space-x-3"
                      >
                        <Zap className={`w-4 h-4 ${theme.accent}`} />
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${theme.primary} mb-4`}>
              Deployed Solutions
            </h2>
            <p className={`text-lg ${theme.secondary}`}>
              Intelligent systems and automation tools I've built
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${theme.surface} rounded-lg p-6 ${theme.border} border hover:border-current transition-all duration-300 group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${theme.primary} group-hover:${theme.accent} transition-colors`}>
                      {project.title}
                    </h3>
                    <Badge variant="outline" className={`${theme.secondary} border-current`}>
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className={`font-semibold ${theme.secondary} text-sm`}>Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className={`font-semibold ${theme.secondary} text-sm`}>Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className={`${theme.accent} border-current text-xs`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 flex space-x-3">
                    <Button size="sm" variant="outline" className={`${theme.primary} border-current hover:bg-current hover:text-black flex-1`}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className={`${theme.secondary} border-current hover:bg-current hover:text-black flex-1`}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${theme.primary} mb-4`}>
              Tech Arsenal
            </h2>
            <p className={`text-lg ${theme.secondary}`}>
              My technical expertise and proficiency levels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className={`${theme.surface} rounded-lg p-6 ${theme.border} border`}
              >
                <h3 className={`text-xl font-bold ${theme.primary} mb-6`}>{category}</h3>
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className={`${theme.accent}`}>{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className={`text-sm ${theme.secondary}`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 ${theme.bg} rounded-full overflow-hidden`}>
                        <motion.div
                          className={`h-full bg-gradient-to-r from-cyan-400 to-emerald-400`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${theme.primary} mb-4`}>
              Secure Channel
            </h2>
            <p className={`text-lg ${theme.secondary}`}>
              Let's connect and build something amazing together
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className={`text-2xl font-semibold ${theme.secondary}`}>
                  Get In Touch
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in discussing new opportunities, 
                  innovative projects, and collaborations in DevOps, AI, and automation. 
                  Let's connect and explore how we can work together!
                </p>
                
                <div className="space-y-6">
                  <motion.a
                    href="mailto:cnitika040@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-4 p-4 ${theme.surface} rounded-lg ${theme.border} border hover:border-current transition-colors group`}
                  >
                    <Mail className={`w-6 h-6 ${theme.primary} group-hover:${theme.accent}`} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className={`text-sm ${theme.secondary}`}>cnitika040@gmail.com</div>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+918813937111"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-4 p-4 ${theme.surface} rounded-lg ${theme.border} border hover:border-current transition-colors group`}
                  >
                    <Phone className={`w-6 h-6 ${theme.primary} group-hover:${theme.accent}`} />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className={`text-sm ${theme.secondary}`}>+91-881393711</div>
                    </div>
                  </motion.a>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center space-x-4 p-4 ${theme.surface} rounded-lg ${theme.border} border`}
                  >
                    <MapPin className={`w-6 h-6 ${theme.primary}`} />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className={`text-sm ${theme.secondary}`}>India</div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/cnitika"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 ${theme.surface} rounded-lg ${theme.border} border hover:border-current transition-colors`}
                  >
                    <Github className={`w-6 h-6 ${theme.primary}`} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/nitika-kalirawna"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 ${theme.surface} rounded-lg ${theme.border} border hover:border-current transition-colors`}
                  >
                    <Linkedin className={`w-6 h-6 ${theme.primary}`} />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className={`text-2xl font-semibold ${theme.secondary}`}>
                  Initiate Communication
                </h3>
                <div className={`${theme.surface} rounded-lg p-6 ${theme.border} border font-mono text-sm`}>
                  <div className={`${theme.primary} mb-4`}>connection@nitika.dev:~$</div>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className={`${theme.accent}`}>&gt;</span>
                      <span className="ml-2">establishing secure connection...</span>
                    </div>
                    <div className={`${theme.secondary} ml-4`}>✓ Encryption enabled</div>
                    <div className={`${theme.secondary} ml-4`}>✓ Authentication verified</div>
                    <div className={`${theme.secondary} ml-4`}>✓ Channel secured</div>
                    
                    <div className="flex mt-4">
                      <span className={`${theme.accent}`}>&gt;</span>
                      <span className="ml-2">ready for communication</span>
                    </div>
                    <div className={`${theme.primary} ml-4`}>
                      Status: ONLINE
                    </div>
                    <div className={`${theme.secondary} ml-4`}>
                      Response time: &lt; 24 hours
                    </div>
                    
                    <div className="flex mt-4">
                      <span className={`${theme.accent}`}>&gt;</span>
                      <span className="ml-2 animate-pulse">awaiting message...</span>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="text-center"
                >
                  <Button
                    size="lg"
                    className={`${theme.primary} bg-current text-black hover:opacity-80 w-full`}
                    asChild
                  >
                    <a href="mailto:cnitika040@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme.surface} border-t ${theme.border} py-8`}>
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className={`${theme.secondary}`}>
              Designed and Developed by Nitika Kalirawna
            </p>
            <p className={`text-sm ${theme.accent}`}>
              2025 • Built with React, Tailwind CSS, and Framer Motion
            </p>
            <div className="flex justify-center space-x-4">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className={`${theme.primary}`}
              >
                ⚡
              </motion.span>
              <span className={`${theme.secondary}`}>Automated Intelligence Hub</span>
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className={`${theme.accent}`}
              >
                🤖
              </motion.span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

