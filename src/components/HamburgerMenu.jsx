import React, { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaEnvelope 
} from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.hamburger-menu')) {
        setIsOpen(false);
      }
    };

    // Close menu when pressing Escape key
    const handleEscKey = (event) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="hamburger-menu md:hidden text-primary-light dark:text-primary-dark hover:text-link-light dark:hover:text-link-dark"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span className="bg-primary-light dark:bg-primary-dark"></span>
          <span className="bg-primary-light dark:bg-primary-dark"></span>
          <span className="bg-primary-light dark:bg-primary-dark"></span>
        </div>
      </button>

      <div className={`dropdown-menu ${isOpen ? 'open' : 'closed'} bg-background-light/95 dark:bg-background-dark/95 border border-primary-light/20 dark:border-primary-dark/20`}>
        <a href="#home" onClick={() => setIsOpen(false)} className="text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark">
          <FaHome className="text-2xl" />
          Home
        </a>
        <a href="#about" onClick={() => setIsOpen(false)} className="text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark">
          <FaUser className="text-2xl" />
          About
        </a>
        <a href="#education" onClick={() => setIsOpen(false)} className="text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark">
          <FaGraduationCap className="text-2xl" />
          Education
        </a>
        <a href="#experience" onClick={() => setIsOpen(false)} className="text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark">
          <FaBriefcase className="text-2xl" />
          Experience
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark">
          <FaCode className="text-2xl" />
          Projects
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark">
          <FaEnvelope className="text-2xl" />
          Contact
        </a>
      </div>
    </>
  );
};

export default HamburgerMenu; 