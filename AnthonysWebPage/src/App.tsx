import { useState, useEffect } from 'react'
import DecryptedText from "./utils/decryptedtext"
import TextType from './utils/texttype';
import ShinyText from './utils/shinytext';


interface Project {
  title: string;
  description: string[];
  technologies: string[];
  github?: string;
  live?: string;
  award?: string;
  link?:string;
}

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  points: string[];
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Catalytica",
      description: [
        "Won first place in the Google Technology Challenge at BeaverHacks 2025 out of 71 teams",
        "Built a real-time wildfire heat map and dashboard using NASA FIRMS data for intuitive fire tracking",
        "Implemented Google Gemini to generate dynamic, location-specific safety recommendations",
        "Leveraged Firebase Cloud Functions and multi-API data integration"
      ],
      technologies: ["Google Gemini", "NASA FIRMS API", "Firebase", "React", "Real-time Data"],
      award: "🏆 1st Place - Google Technology Challenge",
      link: "https://www.catalytica.org/"
    },
    {
      title: "Guitar Hub:",
      description: [
        "Won first place at the Oregon State Spring Hackathon out of 50 student teams",
        "Built a web app for guitar players in 48 hours, collaborated with a team of 4 using GitHub for version control",
        "Features include instrument tuning, song and genre identification from audio, and chord tablature generation.",
      ],
      technologies: ["Google Gemini", "NASA FIRMS API", "Firebase", "React", "Real-time Data"],
      award: "🏆 1st Place - BeaverHacks"
    },
    {
      title: "BenchRacers",
      description: [
        "Built a car showcase platform where users share builds, vote, and view performance specs",
        "Collaborated with marketing team to shape product vision for sponsorship opportunities",
        "Designed scalable infrastructure with auto-scaling groups and load balancers using Terraform",
        "Optimized SQL queries and indexing strategies to reduce page load time"
      ],
      technologies: ["React", "AWS", "MySQL", "Terraform", "Load Balancing"],
      github: "https://github.com/AnthonyL103/BenchRacers",
      link: "https://www.benchracershq.com"
    },
    {
      title: "Zukini",
      description: [
        "Designed an application to help students study more effectively with classroom material",
        "Built intuitive interface using React to generate flashcards and mock tests from parsed text",
        "Leveraged AWS and PostgreSQL to securely store uploads and generated study materials",
        "Implemented Terraform to automate infrastructure deployment"
      ],
      technologies: ["React", "AWS", "PostgreSQL", "GPT API", "Terraform"],
      github: "https://github.com/AnthonyL103/Zukini",
      link: "https://www.zukini.com"
    }
  ];

  const experiences: Experience[] = [
    {
      company: "Samsung SDS",
      position: "Software Engineering Intern",
      location: "Seattle, WA",
      period: "June 2024 – Present",
      points: [
    "Developed an intelligent RCA system using MCP framework integrated as a Grafana plugin, analyzing 100,000+ logs daily with automated root cause analysis and summarization capabilities",
    "Implemented semantic search infrastructure using LlamaIndex and BERT embeddings to enable RAG-powered query capabilities across distributed log databases",
    "Engineered high-performance embedding pipeline processing 20,000 embeddings per minute for real-time log analysis and similarity matching",
    "Created dynamic response formatting system combining markdown parsing with HTML styling to deliver Claude/GPT-quality formatted outputs",
    "Architected real-time data synchronization using WebSockets and web scraping to maintain live dashboard updates across multiple data sources and panel queries"
    ]
    },
    {
      company: "ID TECH (University of Washington)",
      position: "Software Camp Instructor",
      location: "Seattle, WA",
      period: "June 2023 – August 2024",
      points: [
        "Taught 70 high school students CS subjects including OOP, Robotics, and Machine Learning",
        "Achieved a satisfaction rating of 4.7 stars from both students and parents",
        "Broke down complex concepts such as neural networks and game design",
        "Used real-world examples and interactive exercises to ensure student comprehension"
      ]
    },
    {
      company: "GUIDED FITNESS",
      position: "Web Development/Marketing Intern",
      location: "Redmond, WA",
      period: "June 2019 – September 2021",
      points: [
        "Developed web app features using Ruby on Rails on Heroku and AWS",
        "Built fraud detection feature blocking 33,000+ intrusion attempts",
        "Prevented ~500,000 hacking attempts annually",
        "Created marketing materials and organized events engaging 200+ customers"
      ]
    }
  ];

  const skills = {
    "Programming": ["Java", "Python", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS", "Ruby"],
    "Frameworks": ["React", "Express", "Ruby on Rails", "Flask", "Tensorflow", "Tailwind CSS", "Fast Agent"],
    "DevOps & Cloud": ["AWS", "Google Cloud", "Azure", "Docker", "Terraform", "CI/CD"],
    "Databases": ["PostgreSQL", "MySQL", "ClickHouse", "Firebase"],
    "Tools": ["Git", "GitHub", "Linux", "Bash", "FAISS", "LlamaIndex"],
    "Concepts": [ "Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "Agile", "Rest APIs", "Scalability", "Security", "MCP", "Vector Search"]
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">AL</span>
            </div>
            {/*We use sections here because they allow me to track and move to their location based on section id 
            They are like divs with semantic meaning and location targeting */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`${
                      activeSection === item.toLowerCase()
                        ? 'text-purple-400'
                        : 'text-gray-300 hover:text-white'
                    } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen relative flex items-center justify-center px-4">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div 
            className="bg-cover bg-center bg-gray-600" 
          >
            <img 
                src="/DSC03056 (1).JPG" 
                alt="Workspace" 
                className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="bg-cover bg-center bg-gray-600"
          >
             <img 
                src="/IMG_0115.JPG" 
                alt="Workspace" 
                className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="bg-cover bg-center bg-gray-600"
            
          >
             <img 
                src="/IMG_7620.JPG" 
                alt="Workspace" 
                className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="bg-cover bg-center bg-gray-600"
          >
             <img 
                src="/sdsphoto.jpeg" 
                alt="Workspace" 
                className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center">
            <div>
            <DecryptedText
                text="Hi my name is Anthony Li"
                speed={150}
                animateOn="view"
                animateOnce={true}  // Set to false to animate every time
                className='text-5xl md:text-7xl font-bold text-white mb-6'
                encryptedClassName="text-5xl md:text-7xl text-white font-bold"
                revealDirection="center"
                useOriginalCharsOnly={false}
                sequential={true}    // Add this for letter-by-letter reveal
                />
            </div>
            <div className="mb-8">
            <DecryptedText
                text="I am a Software Engineer & Full-Stack Developer interested in Artificial Intelligence and Cloud Engineering"
                speed={40}
                animateOn="view"
                animateOnce={true}  
                className='text-xl md:text-2xl text-purple-300 mb-8'
                encryptedClassName="text-xl md:text-2xl text-purple-300"
                revealDirection="center"
                sequential={true}
                />
            </div>
         
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/anthony-l103" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-purple-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/AnthonyL103" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-purple-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:anthonyli0330@gmail.com"
               className="text-white hover:text-purple-400 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-3xl font-semibold text-purple-300 mb-4">Oregon State University</h3>
              <p className="text-gray-300 text-xl mb-2">B.S. in Computer Science | GPA: 3.73</p>
              <p className="text-gray-400 text-xl mb-4">Expected Graduation: June 2026</p>
              <div className="space-y-2">
                <ShinyText 
                    text="🏆 Dean's List (4x)" 
                    disabled={false} 
                    speed={3} 
                    className='text-2xl text-purple-200' 
                />
                <ShinyText 
                    text="🏆 OSU Winter 2024 Hackathon Winner" 
                    disabled={false} 
                    speed={3} 
                    className='text-2xl text-purple-200' 
                />
                <ShinyText 
                    text="🏆 OSU Winter 2025 Hackathon Winner (Google track)" 
                    disabled={false} 
                    speed={3} 
                    className='text-2xl text-purple-200' 
                />
                </div>
            </div>
            <div className="text-gray-300 text-xl space-y-4">
            <TextType 
                text={[
 `I'm currently a senior at Oregon State University studying Computer Science, with a strong foundation in full-stack development, cloud architecture, and AI/ML technologies. Currently pursuing my B.S. in Computer Science at Oregon State University while gaining hands-on experience at Samsung SDS.

My journey in tech started early, and I've since built Ai Agents with RCA and summarization capabilties of over 100,000 logs/metrics/traces to award-winning wildfire tracking applications. I love solving complex problems and creating scalable solutions that make a real impact.

When I'm not coding, you'll find me playing guitar, going to music concerts, and working on my latest side project.`
]}
                typingSpeed={20}
                pauseDuration={3000}
                deletingSpeed={20}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
            />
            </div>
          </div>
        </div>
      </section>

      
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-semibold text-purple-300">{exp.position}</h3>
                    <p className="text-2xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-2xl mt-2 md:mt-0 md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-gray-300 text-xl flex items-start">
                      <span className="text-purple-400 mr-2">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                {project.award && (
                  <div className="bg-gradient-to-r text-xl from-yellow-400 to-orange-500 text-black text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    {project.award}
                  </div>
                )}
                <h3 className="text-3xl font-semibold text-purple-300 mb-4">{project.title}</h3>
                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-300 text-xl flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-purple-600/30 text-purple-200 text-lg px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-gray-300 hover:text-purple-400 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition-colors group"
                        title="Try the App">
                        <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                    </a>
                    )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="text-gray-300 hover:text-purple-400 transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-lg text-lg hover:bg-purple-600/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-gray-300 text-2xl mb-8">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:anthonyli0330@gmail.com"
               className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Send Email
            </a>
            <a href="https://www.linkedin.com/in/anthony-l103" target="_blank" rel="noopener noreferrer"
               className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              LinkedIn Profile
            </a>
            <a href="https://github.com/AnthonyL103" target="_blank" rel="noopener noreferrer"
               className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              GitHub Profile
            </a>
          </div>
          <div className="mt-12 text-gray-400">
            <p>📍 Corvallis, OR 97330</p>
            <p>📧 anthonyli0330@gmail.com</p>
            <p>📱 425-623-2468</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Anthony Li. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App