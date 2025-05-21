import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes,
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt,
  FaLinux, FaWindows, FaDatabase, FaCloud, FaServer, FaCode,
  FaChartBar, FaChartLine, FaChartPie, FaMicrochip, FaAws, FaMicrosoft,
  FaCodeBranch, FaProjectDiagram, FaNetworkWired, FaCertificate,
  FaCogs, FaTools, FaLaptopCode, FaTerminal, FaCode as FaCodeAlt,
  FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaChevronDown,
  FaTwitter, FaInstagram
} from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'boxicons/css/boxicons.min.css';
import './index.css';
import HamburgerMenu from './components/HamburgerMenu';
import Contact from './components/Contact';
import VscLogo from './components/VscLogo';
import BackgroundLogo from './components/BackgroundLogo';
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCards, setExpandedCards] = useState({
    skills: null,
    experience: null,
    education: null,
    certifications: null,
    projects: null
  });
  const [activeSection, setActiveSection] = useState('');

  const handleCardClick = (section, index) => {
    setExpandedCards(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black min-h-screen text-white relative">
      <BackgroundLogo />
      
      <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md border-b border-[rgb(0,255,238,0.2)]">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-white">V </span>
            <span className="text-[--main-color]">S C</span>
          </a>
          
          {/* Hamburger Menu */}
          <button
            className="hamburger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Mobile Navigation Menu */}
          <div className={`dropdown-menu ${isMenuOpen ? 'open' : 'closed'}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              <i className='bx bx-home-alt'></i>
              Home
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              <i className='bx bx-user'></i>
              About
            </a>
            <a href="#education" onClick={() => setIsMenuOpen(false)}>
              <i className='bx bx-book'></i>
              Education
            </a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>
              <i className='bx bx-briefcase'></i>
              Experience
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              <i className='bx bx-code-alt'></i>
              Projects
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <i className='bx bx-envelope'></i>
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, It's <span>Venkata Sai Charan</span></h1>
          <h3 className="text-animation">I'm a <span></span></h3>
          <p>Software Engineer & Problem Solver. Engineer by skill, problem-solver by mindset. Let's build what matters.</p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sai-charan-k-v/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="mailto:saicharankarasala@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-envelope'></i>
            </a>
          </div>

          <div className="btn-group">
            <a href="#" className="btn">Download CV</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>

        <div className="home-img">
          <img 
            src="/images/profile.JPG" 
            alt="Venkata Sai Charan - UI/UX Designer & Software Engineer" 
            className="profile-image"
          />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <div className="about-container">
            <div className="about-text">
              <span className="highlight">
                "I believe great technology is built at the intersection of curiosity, creativity, and code."
              </span>
              <p>
                Experienced Software Engineer and Network Operations Analyst with 4+ years of success delivering secure, scalable, and data-driven solutions. Specialized in backend development, cloud infrastructure, and network monitoring, with deep technical expertise in Java, Python, SQL, and AWS.
              </p>
              <p>
                Demonstrated impact through projects involving cryptocurrency security, AI-driven analytics, and IoT-based systems—each built with a focus on performance, optimization, and real-world utility. Skilled in tools like Snowflake, Informatica, Tableau, Power BI, and Git, and highly adaptable to evolving technologies.
              </p>
              <p>
                Driven by innovation, problem-solving, and clean system design. Known for turning complexity into clarity and collaborating across teams to bring high-impact ideas to life.
              </p>
            </div>
            <VscLogo />
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-box">
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">My <span>Education</span></h2>

        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">August 2022 – December 2023</div>
            <div className="timeline-content">
              <h3>University of Missouri - Kansas City</h3>
              <h4>Master of Science in Computer Science</h4>
              <p className="gpa">GPA: 3.75</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">August 2017 – August 2021</div>
            <div className="timeline-content">
              <h3>St. Joseph's College of Engineering</h3>
              <h4>Bachelor of Engineering in Electronics and Communication Engineering</h4>
              <p className="location">Chennai, India</p>
              <p className="gpa">GPA: 3.7</p>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications" id="certifications">
        <h2 className="heading">My <span>Certifications</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AWS Certification */}
          <div className="certification-card group">
            <div className="card-content">
              <h3 className="text-xl font-bold mb-2">AWS Certified Solutions Architect – Associate</h3>
              <p className="text-[--main-color] mb-4">Amazon Web Services (AWS)</p>
              <div className="flex items-center gap-2 mb-4">
                <FaAws className="text-2xl text-[--main-color]" />
                <a 
                  href="https://cp.certmetrics.com/amazon/en/public/verify/credential/2a4a927b8cf14781975cd89adc323106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--main-color] hover:underline flex items-center gap-1"
                >
                  Verify Credential <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Python Professional Certificate */}
          <div className="certification-card group">
            <div className="card-content">
              <h3 className="text-xl font-bold mb-2">Programming with Python – Professional Certificate</h3>
              <p className="text-[--main-color] mb-2">OpenEDG Python Institute</p>
              <p className="text-white/80 mb-4">Issued: March 2024</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">OOP</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPython className="text-2xl text-[--main-color]" />
                <a 
                  href="https://www.linkedin.com/learning/certificates/f8e0636b56af1ab2e8459ff6754f9c036f804d17c4fb3e50fd51bc59ced19f04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--main-color] hover:underline flex items-center gap-1"
                >
                  View Certificate <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Edureka Python Professional */}
          <div className="certification-card group">
            <div className="card-content">
              <h3 className="text-xl font-bold mb-2">Python Professional</h3>
              <p className="text-[--main-color] mb-2">Edureka</p>
              <p className="text-white/80 mb-2">Issued: March 2024</p>
              <p className="text-white/60 mb-4">Credential ID: CKR8M9MX</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">OOP</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPython className="text-2xl text-[--main-color]" />
                <a 
                  href="/certifications/edureka-python.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--main-color] hover:underline flex items-center gap-1"
                >
                  View Certificate <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <h2 className="heading">My <span>Experience</span></h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgba(0, 0, 0, 0.2)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.2)' }}
            date="January 2025 – Present"
            iconStyle={{ background: 'var(--main-color)', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <h4 className="text-lg text-[--main-color]">Source Consulting LLC – Remote (<a href="https://touchwindow.com" target="_blank" rel="noopener noreferrer">Client: Touch Screens Inc - touchwindow.com</a>)</h4>
            <ul className="list-disc pl-5 mt-4 text-white/80">
              <li>Enhanced network performance and reliability by monitoring and analyzing metrics using AWS, Python, and SQL.</li>
              <li>Reduced response times by 30% via automated Python scripts for performance analysis and incident reporting.</li>
              <li>Leveraged Tableau and SQL to visualize network trends and areas for improvement.</li>
              <li>Implemented network upgrades and collaborated across teams using Linux, Bash scripting, and cloud tools.</li>
              <li>Improved communication and technical issue resolution among engineering and support teams.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgba(0, 0, 0, 0.2)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.2)' }}
            date="April 2024 – December 2024"
            iconStyle={{ background: 'var(--main-color)', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-xl font-bold">Network Operation Analyst</h3>
            <h4 className="text-lg text-[--main-color]">Trbhi INC – Remote (<a href="https://ziplyfiber.com" target="_blank" rel="noopener noreferrer">Client: Ziply Fiber Technology - ziplyfiber.com</a>)</h4>
            <ul className="list-disc pl-5 mt-4 text-white/80">
              <li>Reduced network downtime by 20% through SQL and Python-based analysis.</li>
              <li>Boosted client satisfaction by 15% with effective incident response coordination.</li>
              <li>Built Tableau and Google Analytics reports for data-driven decision-making.</li>
              <li>Used Snowflake for trend identification and optimization in mobile/web services.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgba(0, 0, 0, 0.2)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.2)' }}
            date="May 2023 – December 2023"
            iconStyle={{ background: 'var(--main-color)', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-xl font-bold">Graduate Student Technical Assistant</h3>
            <h4 className="text-lg text-[--main-color]">University of Missouri - Kansas City – Kansas City, MO, USA</h4>
            <ul className="list-disc pl-5 mt-4 text-white/80">
              <li>Improved lab functionality by 30% through technical support and systems improvements.</li>
              <li>Boosted lab resource availability by 25% with effective equipment and software management.</li>
              <li>Raised student support satisfaction by 40% via one-on-one support and feedback tracking.</li>
              <li>Increased lab efficiency by 35% with detailed troubleshooting and maintenance.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgba(0, 0, 0, 0.2)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.2)' }}
            date="September 2021 – July 2022"
            iconStyle={{ background: 'var(--main-color)', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <h4 className="text-lg text-[--main-color]">Wipro Technologies – Bengaluru, KA, India</h4>
            <ul className="list-disc pl-5 mt-4 text-white/80">
              <li>Enhanced data integration by 30% with Informatica PowerCenter configuration.</li>
              <li>Automated workflows to reduce processing time by 25%.</li>
              <li>Managed metadata and repositories to streamline project execution.</li>
              <li>Supported cross-functional teams with technical insights using SQL and Python.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgba(0, 0, 0, 0.2)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.2)' }}
            date="May 2019 – August 2021"
            iconStyle={{ background: 'var(--main-color)', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <h4 className="text-lg text-[--main-color]">Merizon Technologies LLC – Remote</h4>
            <ul className="list-disc pl-5 mt-4 text-white/80">
              <li>Developed and maintained web apps with C#/.NET, Java, and MySQL, boosting performance by 20%.</li>
              <li>Automated data processing tasks to cut manual effort by 30%.</li>
              <li>Improved API performance by 25% through SQL query optimization.</li>
              <li>Collaborated in Agile teams using Git, code reviews, and debugging.</li>
              <li>Balanced project work with academic responsibilities, enhancing collaboration and problem-solving skills.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      <section className="projects pt-6 pb-12 px-[12%]" id="projects">
        <h2 className="heading">My <span>Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 2023 Project */}
          <div className="project-card group">
            <div className="card-content">
              <h3 className="text-xl font-bold mb-2">Enhancing Security & Privacy of Cryptocurrency Transactions</h3>
              <p className="text-[--main-color] mb-4">January 2023 – May 2023</p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Developed secure backend systems using Java and cryptographic algorithms to safeguard blockchain transactions.</li>
                <li>Conducted risk assessments and implemented security protocols using Python and SQL.</li>
                <li>Used Snowflake for data analysis and performance optimization.</li>
                <li>Strengthened transaction integrity and reduced vulnerabilities.</li>
              </ul>
              <div className="tech-stack mt-4 flex flex-wrap gap-2">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Blockchain</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">Snowflake</span>
              </div>
            </div>
          </div>

          {/* 2022 Project */}
          <div className="project-card group">
            <div className="card-content">
              <h3 className="text-xl font-bold mb-2">YouTube Data Analysis</h3>
              <p className="text-[--main-color] mb-4">August 2022 – December 2022</p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Designed a real-time data pipeline using Apache Kafka and Apache Spark to analyze YouTube viewer behavior.</li>
                <li>Enabled sentiment analysis and trend forecasting; automated data cleaning and analysis with Python and SQL.</li>
                <li>Built interactive dashboards in Tableau to visualize key metrics.</li>
                <li>Provided strategic recommendations for content optimization and audience growth.</li>
              </ul>
              <div className="tech-stack mt-4 flex flex-wrap gap-2">
                <span className="tech-tag">Apache Kafka</span>
                <span className="tech-tag">Spark</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">Tableau</span>
              </div>
            </div>
          </div>

          {/* 2022 Project */}
          <div className="project-card group">
            <div className="card-content">
              <h3 className="text-xl font-bold mb-2">IoT Sensor Data Analysis for Soil Moisture</h3>
              <p className="text-[--main-color] mb-4">August 2022 – December 2022</p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Built an IoT system using ultrasonic sensors and Azure cloud for soil moisture monitoring and decision-making.</li>
                <li>Used Python and Arduino IDE for processing; visualized data with Matplotlib, Plotly, and Tableau.</li>
                <li>Processed large-scale IoT data with PySpark and Hadoop.</li>
                <li>Created dashboards in Tableau and Power BI; automated ETL with Azure Data Factory and Synapse Analytics.</li>
              </ul>
              <div className="tech-stack mt-4 flex flex-wrap gap-2">
                <span className="tech-tag">IoT</span>
                <span className="tech-tag">Azure</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PySpark</span>
                <span className="tech-tag">Tableau</span>
              </div>
            </div>
          </div>

          {/* 2021 Project */}
          <div className="project-card group">
            <div className="card-content">
              <h3 className="text-xl font-bold mb-2">A 120 Mbps WDM-Based VLC System for IoT Implementation</h3>
              <p className="text-[--main-color] mb-4">August 2020 – January 2021</p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Designed and simulated a high-speed Visible Light Communication (VLC) system using OptiSystem and mathematical models.</li>
                <li>Improved efficiency by 25% and predictive accuracy by 20%.</li>
                <li>Analyzed system performance with SQL and Python; presented results using Tableau.</li>
                <li>Enhanced collaboration and system design for mobile and front-end applications.</li>
              </ul>
              <div className="tech-stack mt-4 flex flex-wrap gap-2">
                <span className="tech-tag">VLC</span>
                <span className="tech-tag">OptiSystem</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">Tableau</span>
              </div>
            </div>
          </div>

          {/* 2019-2021 Project */}
          <div className="project-card group">
            <div className="card-content">
              <h3 className="text-xl font-bold mb-2">Therapy for Autistic Children Using Robot</h3>
              <p className="text-[--main-color] mb-4">December 2019 – January 2021</p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Developed an interactive robot using .NET and Python to improve social skills in autistic children, enhancing engagement by 30%.</li>
                <li>Designed a user-friendly interface and conducted needs analysis with therapists to align robot functionality with user needs.</li>
                <li>Conducted usability testing and implemented iterative improvements.</li>
                <li>Used data visualization to present insights and drive design decisions.</li>
              </ul>
              <div className="tech-stack mt-4 flex flex-wrap gap-2">
                <span className="tech-tag">.NET</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">UI/UX</span>
                <span className="tech-tag">Data Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/sai-charan-k-v/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="mailto:saicharankarasala@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-envelope'></i>
            </a>
          </div>
          
          <div className="footer-links">
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-copyright">
          © Venkata Sai Charan | All Rights Reserved
        </div>
      </footer>
      <SpeedInsights />
    </div>
  );
};

export default App; 