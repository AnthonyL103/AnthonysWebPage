export const profile = {
  name: 'Anthony Li',
  handle: 'anthonyl103',
  role: 'Software Engineer',
  company: 'Oracle Cloud Infrastructure',
  location: 'Seattle, WA',
  email: 'anthonyli0330@gmail.com',
  phone: '425-623-2468',
  github: 'https://github.com/AnthonyL103',
  linkedin: 'https://www.linkedin.com/in/anthony-l103',
  resumeBlurb:
    "I am an OSU alumnus with a B.S. in Computer Science and a passion for full-stack development, cloud computing, and AI/ML technologies.\n\nI've built AI agents for large-scale observability workflows, award-winning web applications, and efficient, scalable infrastructure. I enjoy turning messy real-world data into reliable systems and shipping software that performs under constraints.\n\nIn my free time, you'll find me playing guitar, DJing, golfing, going to concerts, and working on my latest side project.",
  status: 'Open to interesting problems',
}

export const heroLines = [
  { prompt: 'whoami', output: 'Anthony Li' },
  { prompt: 'cat role.txt', output: 'Software Engineer @ Oracle Cloud Infrastructure' },
  { prompt: 'cat focus.txt', output: 'Full-stack systems, cloud infra, and AI agents that ship.' },
]

export const stats = [
  { key: 'companies_shipped_at', value: 4, label: 'companies shipped at' },
  { key: 'hackathons_won', value: 2, label: 'hackathons won' },
  { key: 'gpa', value: 3.73, decimals: 2, label: 'gpa @ osu' },
]

export type Experience = {
  company: string
  position: string
  location: string
  period: string
  current?: boolean
  points: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Oracle Cloud Infrastructure',
    position: 'Software Engineer',
    location: 'Seattle, WA',
    period: 'Jun 2026 – Present',
    current: true,
    points: ['Region Build Platform'],
  },
  {
    company: 'Samsung SDS',
    position: 'Software Engineering Intern',
    location: 'Seattle, WA',
    period: 'Jun 2025 – Aug 2025',
    points: [
      'Built a Grafana AI-agent (MCP) to parse and diagnose 100K+ logs/day in real time.',
      'Implemented and optimized RAG with LlamaIndex + BERT-style embeddings; achieved < 10s tool responses.',
      'Engineered an embedding pipeline generating ~20K embeddings/min and reached ~90% semantic retrieval accuracy.',
      'Reduced hallucinations by ~95% via prompt + context optimization (validated across 95/100 test prompts).',
      'Added session memory (thread persistence) and external memory for multi-turn recall.',
      'Implemented live dashboard refresh/tooling updates via WebSockets for < 90ms end-to-end latency.',
      'Built markdown-to-HTML response formatting for polished, IDE-like output.',
    ],
  },
  {
    company: 'ID TECH (University of Washington)',
    position: 'Software Camp Instructor',
    location: 'Seattle, WA',
    period: 'Jun 2023 – Aug 2024',
    points: [
      'Taught 70+ students AI/ML, Robotics (C++), and DSA; earned a 4.7 satisfaction rating.',
      'Led ML projects to 90%+ accuracy and guided students in building LLM-powered chatbots.',
      'Explained neural nets + prompt engineering in beginner-friendly terms.',
      'Developed hands-on robotics labs covering algorithms, OOP, and engineering fundamentals.',
    ],
  },
  {
    company: 'Guided Fitness',
    position: 'Web Development Intern',
    location: 'Redmond, WA',
    period: 'Jun 2019 – Sep 2021',
    points: [
      'Shipped production features using Ruby on Rails (Heroku) with AWS integrations.',
      'Built a fraud detection feature blocking 33,000+ intrusion attempts.',
      'Hardened endpoints to reduce repeated attack traffic (~500,000 attempts/year).',
      'Created marketing materials and helped run events engaging 200+ customers.',
    ],
  },
]

export type Project = {
  title: string
  description: string[]
  technologies: string[]
  github?: string
  live?: string
  award?: string
  link?: string
  devpost?: string
}

export const projects: Project[] = [
  {
    title: 'GlassBox Audit Platform',
    description: [
      'Built an agentic security audit platform that clones a GitHub repo, scans repo files, and streams a unified vulnerability report.',
      'Designed an agent layer with repo, search, and tools that answers questions with citations and persists audit context across sessions.',
      'Used hardware validation by flashing candidate C/C++ functions to an ESP32 via Raspberry Pi Pico to confirm timing-leak vulnerabilities.',
      "Built the platform on GoMCP, serving as the framework's first real end-to-end integration test against a live tool chain.",
    ],
    technologies: [
      'Python', 'Go', 'C++', 'React', 'TypeScript', 'FastAPI', 'WebSockets',
      'Nemotron', 'GoMCP', 'FAISS', 'Gitleaks', 'OSV Scanner', 'ESP32',
      'Raspberry Pi Pico', 'asyncio', 'Hardware-in-the-loop',
    ],
    award: '1st Place — Conductor One: Best Agent Infrastructure',
    github: 'https://github.com/cbgabler/glassbox',
    link: 'https://judge.beaverhacks.org/cmlfqho300000kv04wi9199a5/projects/cmoq6uquw0131jv04le7w15h8',
  },
  {
    title: 'Catalytica',
    description: [
      'Built a real-time wildfire tracking dashboard using NASA FIRMS satellite data and Leaflet.js heat mapping.',
      'Implemented radius-based proximity queries within a 50-mile zone to accurately surface impacted areas.',
      'Integrated Gemini to generate location-specific safety recommendations based on fire severity, weather, and population data.',
      'Developed Firebase Cloud Functions, API calls, schemas, and controllers to deliver live, multi-API data to the frontend in < 1 second.',
    ],
    technologies: [
      'Google Gemini AI', 'NASA FIRMS API', 'Firebase', 'React', 'TypeScript',
      'Leaflet.js', 'TailwindCSS', 'OpenCage Geocoding API', 'OpenWeather API', 'U.S. Census API',
    ],
    award: '1st Place — Google Technology Challenge',
    github: 'https://github.com/AnthonyL103/Catalytica',
    devpost: 'https://www.devpost.com/software/catalytica',
  },
  {
    title: 'BenchRacers',
    description: [
      'As lead developer/co-founder of a startup, built a car showcase platform for sharing custom builds, voting, and performance specs.',
      'Designed production-ready infrastructure with Terraform, Auto Scaling Groups, load balancers, and CloudWatch logging.',
      'Optimized database queries and schema design to achieve <1 second response latency for a media-heavy application.',
      'Developed an Instagram-style recommendation algorithm based on engagement metrics to surface relevant content.',
    ],
    technologies: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Express',
      'MySQL', 'AWS S3', 'JWT', 'Terraform', 'CloudWatch', 'ALB / Auto Scaling', 'Nginx', 'PM2',
    ],
    github: 'https://github.com/AnthonyL103/BenchRacers',
    link: 'https://www.benchracershq.com',
  },
  {
    title: 'GoMCP',
    description: [
      'Built a Go-based MCP framework for creating AI agents with dynamic tool loading and multi-provider LLM support.',
      'Designed an extensible MCP server architecture with customizable YAML-driven config for instructions and tool discovery/registration.',
      'Supports default tooling options via config, enabling server/tool and infrastructure-as-code generation.',
      'Manages chat history and context delivery to the provider, with support for both API and console interfaces.',
    ],
    technologies: [
      'Go', 'Model Context Protocol', 'Anthropic Claude API', 'OpenAI API', 'YAML',
      'JSON Schema', 'HTTP/REST APIs', 'Concurrent Programming', 'Agent Architecture',
    ],
    github: 'https://github.com/AnthonyL103/GOMCP',
  },
  {
    title: 'Zukini',
    description: [
      'Built a study-assist app with React to generate flashcards and mock tests from parsed class notes using Google Cloud Vision and OpenAI models.',
      'Implemented and optimized prompt engineering to reduce hallucinations by 95%, ensuring high-quality and accurate flashcard generation.',
      'Optimized the generation pipeline by chunking larger inputs to stay within token limits and maintain fast route response times.',
      'Leveraged AWS, Sequelize, and PostgreSQL for secure storage of uploads, user data, and generated materials.',
      'Integrated Stripe for secure payments and automated infrastructure deployment with Terraform for scalability and maintainability.',
    ],
    technologies: [
      'React', 'React Router', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Mammoth.js', 'jsPDF',
      'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'OpenAI API', 'Google Cloud Vision',
      'AWS', 'Stripe', 'Terraform',
    ],
    github: 'https://github.com/AnthonyL103/Zukini',
    link: 'https://www.zukini.com',
  },
]

export const skills = {
  languages: ['Java', 'Python', 'C', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Ruby'],
  concepts: [
    'AI Agents', 'RAG', 'Data Structures', 'Algorithms', 'Agile', 'REST APIs',
    'Scalability', 'Security', 'MCP', 'Vector Search', 'Prompt Engineering', 'UI/UX',
  ],
  frameworks: [
    'Express', 'React', 'TensorFlow', 'Ruby on Rails', 'Fast Agent', 'Flask',
    'PostgreSQL', 'MySQL', 'FAISS', 'Docker', 'Next.js', 'Nginx',
  ],
  devops: ['Git', 'Bitbucket', 'Jira', 'Terraform', 'GitHub Actions', 'Bash / Linux'],
  cloud: ['Oracle Cloud (OCI)', 'Google Cloud', 'AWS', 'Azure'],
}

export const education = {
  school: 'Oregon State University',
  degree: 'B.S. Computer Science',
  gpa: 3.73,
  honors: [
    'Magna Cum Laude',
    "Dean's List (4x)",
    'BeaverHacks 2026 — Conductor One: Best Agent Infrastructure',
    'OSU Winter 2024 Hackathon Winner',
    'OSU Winter 2025 Hackathon Winner (Google Track)',
  ],
}

export const nav = [
  { id: 'home', label: 'home.tsx' },
  { id: 'about', label: 'about.tsx' },
  { id: 'experience', label: 'experience.tsx' },
  { id: 'projects', label: 'projects.tsx' },
  { id: 'skills', label: 'skills.ts' },
  { id: 'contact', label: 'contact.tsx' },
]
