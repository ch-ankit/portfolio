import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Server,
  Users,
  BookOpen,
  Menu,
  X
} from 'lucide-react';

import ProfileCard from "./components/ProfileCard/ProfileCard"

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      title: "Software Engineer I",
      company: "LIS Nepal Pvt. Ltd",
      period: "Jan 2025 – Present",
      location: "Manbhawan, Lalitpur",
      description: "Spearheading development of cutting-edge LLM-powered products using Next.js. Managing complex tables with TanStack Table and customizing open source projects.",
      technologies: ["Next.js", "TypeScript", "TanStack Table", "LLM Integration"]
    },
    {
      title: "Associate Software Engineer",
      company: "LIS Nepal Pvt. Ltd",
      period: "Jan 2024 – Jan 2025",
      location: "Manbhawan, Lalitpur",
      description: "Developed ETL processes for retail data using Python and Snowflake. Conducted data validations and designed interactive dashboards.",
      technologies: ["Python", "Snowflake", "SQL", "Data Visualization", "ETL"]
    },
    {
      title: "Associate Software Engineer",
      company: "Octagon Infotech Pvt. Ltd",
      period: "Sep 2023 – Jan 2024",
      location: "Panipokhari, Kathmandu",
      description: "Engineered responsive web applications with React. Led migration from Magento to Next.js/React application.",
      technologies: ["React", "Next.js", "Magento", "SEO Optimization"]
    },
    {
      title: "Associate Data Engineer",
      company: "Cedar Gate Technologies",
      period: "Jul 2023 – Sep 2023",
      location: "Sanepa, Lalitpur",
      description: "Developed data pipelines and executed ETL processes for healthcare data. Automated repetitive data import tasks.",
      technologies: ["SQL", "Excel", "Data Pipeline", "Healthcare Data"]
    }
  ];

  const projects = [
    {
      title: "Intelliome/Denzing",
      company: "LIS Nepal Pvt. Ltd",
      period: "Mar 2024 – Present",
      description: "Agent-based LLM application with interactive UI. Optimized frontend performance with virtual rendering for large datasets.",
      technologies: ["TypeScript", "HTML", "Tailwind CSS", "Virtual Rendering"],
      link: "https://denzing.com/"
    },
    {
      title: "Customer Segmentation Dashboard",
      company: "LIS Nepal Pvt. Ltd",
      period: "Jan 2024 – Mar 2024",
      description: "Data visualization dashboards using D3.js and Vega with responsive interface design.",
      technologies: ["D3.js", "Vega", "TypeScript", "Data Analysis"],
      link: "#"
    },
    {
      title: "Hukut Store",
      company: "Octagon Infotech Pvt. Ltd",
      period: "Sep 2023 – Jan 2024",
      description: "Migrated application from Magento to Next.js/React with mobile-first design approach.",
      technologies: ["Next.js", "React", "Mobile-First Design"],
      link: "https://hukut.com/"
    },
    {
      title: "19-bit CPU Architecture",
      company: "Kathmandu University",
      period: "Apr 2021 – Oct 2021",
      description: "Designed custom CPU model (ANBU Computer) with 14-bit address bus supporting 16K memory locations.",
      technologies: ["Computer Architecture", "Assembly", "Hardware Design"],
      link: "#"
    }
  ];

  const skills = {
    "Programming": ["JavaScript", "TypeScript", "Python"],
    "Frontend": ["Next.js", "React", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Express.js", "Node.js"],
    "Database": ["MySQL", "PostgreSQL", "Elasticsearch", "Snowflake"],
    "Tools": ["dbt", "Git", "Docker", "TanStack Table"]
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AK
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 px-4 hover:bg-slate-800 rounded transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className='mt-3'>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Ankit
                </span>
                <br />
                <span className="text-white">Khatiwada</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Software Engineer & Data Enthusiast
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Passionate about building cutting-edge LLM-powered applications and robust data pipelines. 
                Experienced in full-stack development with expertise in Next.js, Python, and modern web technologies.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Get In Touch
                </button>
                <a 
                  href="#"
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>

              <div className="flex gap-6">
                <a href="mailto:akgunner6@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://github.com/ch-ankit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/ankit-khatiwada-ak/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center mt-24">
              <div className="relative">  
                <ProfileCard
                  name="Ankit Khatiwada"
                  title="Software Engineer"
                  handle="ankyeet"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/ankit.jpg"
                  showUserInfo={true}
                  enableTilt={true}
                  behindGradient=""
                  innerGradient=""
                  onContactClick={() => document.getElementById("mail-link")?.click()}
                  miniAvatarUrl="/ankit.jpg"
                />
                {/* <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"></div> */}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3.90</div>
              <div className="text-gray-400">CGPA</div>
            </div> */}
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m a Computer Engineering graduate from Kathmandu University with a strong passion for 
                software development and data engineering. My journey began with a curiosity about how 
                technology can solve real-world problems, leading me to specialize in full-stack development 
                and data pipeline engineering.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently working as a Software Engineer at LIS Nepal, I focus on developing LLM-powered 
                applications and creating robust data solutions. I enjoy working with cutting-edge technologies 
                and contributing to open-source projects.
              </p>
              
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <MapPin size={18} />
                <span>Bhaktapur, Nepal</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Phone size={18} />
                <span>(+977)-9861286950</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <span>akgunner6@gmail.com</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-blue-400" size={24} />
                  <h4 className="text-xl font-semibold">Education</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-blue-400">Bachelor of Engineering</h5>
                    <p className="text-gray-300">Computer Engineering - Kathmandu University</p>
                    <p className="text-gray-400 text-sm">2018-2023</p>
                    {/* CGPA: 3.90/4.0 */}
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-400">+2 Science</h5>
                    <p className="text-gray-300">St. Xavier&apos;s College</p>
                    <p className="text-gray-400 text-sm"> 2016-2018 </p> 
                    {/* CGPA: 3.54/4.0 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-1">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-sm md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                  <ExternalLink size={18} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
                </div>
                <p className="text-gray-300 text-sm mb-2">{project.company} • {project.period}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  {category === 'Programming' && <Code className="text-blue-400" size={24} />}
                  {category === 'Frontend' && <Server className="text-green-400" size={24} />}
                  {category === 'Backend' && <Server className="text-purple-400" size={24} />}
                  {category === 'Database' && <Database className="text-yellow-400" size={24} />}
                  {category === 'Tools' && <Users className="text-red-400" size={24} />}
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-8">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s connect and discuss how we can work together!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">akgunner6@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-green-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">(+977)-9861286950</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-purple-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Bhaktapur, Nepal</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              id="mail-link" 
              href="mailto:akgunner6@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/ankit-khatiwada-ak/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Ankit Khatiwada. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="mailto:akgunner6@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/ch-ankit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/ankit-khatiwada-ak/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;