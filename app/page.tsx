'use client';

import { useEffect, useState } from 'react';

// Dummy data
const portfolioData = {
  name: "Dragica Bosnakova",
  title: "Creative Developer & Designer",
  bio: "Passionate about crafting beautiful digital experiences with a blend of creativity and code. I turn ideas into elegant solutions.",
  email: "dragica.bosnakova@gmail.com",
  location: "Skopje, North Macedonia",
  social: {
    github: "https://github.com/dragicab",
    linkedin: "https://www.linkedin.com/in/dragica-boshnakova-0633b4305/",
  },
  skills: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 92 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 88 },
    { name: "Figma", level: 90 },
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management and seamless payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛍️",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Beautiful analytics dashboard for managing multiple social media accounts with real-time insights.",
      tech: ["Next.js", "TypeScript", "Chart.js"],
      image: "📊",
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop functionality and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "📝",
      color: "from-rose-400 to-pink-600",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Elegant weather application with location-based forecasts and beautiful weather animations.",
      tech: ["Vue.js", "OpenWeather API", "CSS3"],
      image: "☁️",
      color: "from-pink-400 to-purple-500",
    },
    {
      id: 5,
      title: "Music Streaming Platform",
      description: "A sleek music streaming service with playlist management and social sharing capabilities.",
      tech: ["React Native", "Spotify API", "GraphQL"],
      image: "🎵",
      color: "from-rose-500 to-fuchsia-600",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations and responsive design for creative professionals.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image: "✨",
      color: "from-pink-500 to-purple-600",
    },
  ],
  experience: [
    {
      company: "Tech Innovations Inc.",
      role: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Leading frontend development initiatives and mentoring junior developers.",
    },
    {
      company: "Creative Studios",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications for diverse clients.",
    },
    {
      company: "Startup Labs",
      role: "Junior Developer",
      period: "2018 - 2020",
      description: "Built responsive web interfaces and collaborated on various projects.",
    },
  ],
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-pink-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              AJ
            </button>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative font-medium transition-colors ${
                      activeSection === sectionId
                        ? 'text-pink-600'
                        : 'text-gray-700 hover:text-pink-600'
                    }`}
                  >
                    {item}
                    {activeSection === sectionId && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-bounce-slow">
            <div className="inline-block p-6 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-fuchsia-400 shadow-2xl shadow-pink-300/50">
              <span className="text-6xl">👋</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600 bg-clip-text text-transparent animate-fade-in">
            {portfolioData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light animate-fade-in-delay">
            {portfolioData.title}
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-delay-2">
            {portfolioData.bio}
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full font-semibold shadow-xl shadow-pink-300/50 hover:shadow-2xl hover:shadow-pink-400/50 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold border-2 border-pink-600 hover:bg-pink-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
          <div className="mt-16 flex gap-6 justify-center">
            {Object.entries(portfolioData.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 group"
              >
                <span className="text-gray-600 group-hover:text-white text-xl">
                  {platform === 'github' && '💻'}
                  {platform === 'linkedin' && '💼'}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
                <div className="text-8xl mb-6">🎨</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Creative Problem Solver</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I love turning complex problems into simple, beautiful, and intuitive solutions.
                  With over 5 years of experience in web development, I've had the privilege of
                  working with amazing teams and creating products that users love.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new design trends, contributing
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl">📍</span>
                  <h4 className="text-xl font-semibold text-gray-800">Location</h4>
                </div>
                <p className="text-gray-600 ml-11">{portfolioData.location}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl">📧</span>
                  <h4 className="text-xl font-semibold text-gray-800">Email</h4>
                </div>
                <a href={`mailto:${portfolioData.email}`} className="text-pink-600 hover:text-rose-600 ml-11">
                  {portfolioData.email}
                </a>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl">💡</span>
                  <h4 className="text-xl font-semibold text-gray-800">What I Do</h4>
                </div>
                <p className="text-gray-600 ml-11">
                  I design and develop modern web applications, focusing on user experience,
                  performance, and beautiful aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                  <span className="text-pink-600 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            A collection of projects I've worked on
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-7xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-rose-500 rounded-l-2xl"></div>
                <div className="ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                    <span className="text-pink-600 font-semibold">{exp.period}</span>
                  </div>
                  <h4 className="text-xl text-gray-600 mb-3">{exp.company}</h4>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in touch</h3>
                <p className="text-gray-600 mb-6">
                  Feel free to reach out if you want to collaborate with me, or simply have a chat.
                </p>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href={`mailto:${portfolioData.email}`} className="text-pink-600 hover:text-rose-600">
                      {portfolioData.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">{portfolioData.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center pt-8 border-t border-gray-200">
              {Object.entries(portfolioData.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <span className="text-xl">
                    {platform === 'github' && '💻'}
                    {platform === 'linkedin' && '💼'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} {portfolioData.name}. Made with ❤️ and lots of ☕
        </p>
      </footer>
    </div>
  );
}