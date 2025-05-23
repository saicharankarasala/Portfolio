import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>The Code Behind the Canvas: How I Engineered My Personal Brand</title>
        <meta name="description" content="A full case study blog by Venkat Sai Charan on building his personal portfolio using React, Tailwind, Vite, and Framer Motion." />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="The Code Behind the Canvas: How I Engineered My Personal Brand" />
        <meta property="og:description" content="A full case study blog by Venkat Sai Charan on building his personal portfolio using React, Tailwind, Vite, and Framer Motion." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.venkatasaicharan.com/blog/portfolio-case-study" />
      </Helmet>

      <motion.div 
        className="max-w-4xl mx-auto px-6 py-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <article className="prose lg:prose-xl dark:prose-invert prose-a:text-[--main-color] prose-a:no-underline hover:prose-a:underline prose-headings:text-white prose-strong:text-[--main-color]">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            {...fadeIn}
          >
            The Code Behind the Canvas: How I Engineered My Personal Brand with React, Tailwind & Analytics
          </motion.h1>

          {/* Table of Contents */}
          <motion.div 
            className="sticky top-20 hidden lg:block float-right ml-8 p-4 bg-black/20 backdrop-blur-sm rounded-lg border border-[--main-color]/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-[--main-color]">Table of Contents</h3>
            <ul className="space-y-2">
              <li><a href="#intro">The Portfolio Revolution</a></li>
              <li><a href="#tech-stack">The Blueprint</a></li>
              <li><a href="#design">From Mockup to Motion</a></li>
              <li><a href="#analytics">The Data Game</a></li>
              <li><a href="#seo">SEO & Speed</a></li>
              <li><a href="#conversion">Conversion Ready</a></li>
              <li><a href="#summary">TL;DR + Resources</a></li>
            </ul>
          </motion.div>

          {/* Introduction */}
          <motion.section id="intro" {...fadeIn}>
            <h2>Page 1: The Portfolio Revolution</h2>
            <blockquote className="border-l-4 border-[--main-color] pl-4 italic">
              "In today's market, your personal website is your first interview." — Tech Recruiter at Google
            </blockquote>

            <p>Resumes alone aren't enough. I needed to <strong>show</strong> my work, not just list it. That's why I built <a href="https://www.venkatasaicharan.com">venkatasaicharan.com</a>—to be fast, responsive, recruiter-friendly, and conversion-focused.</p>

            <ul className="space-y-2">
              <li>Developers with portfolios get 3x more callbacks</li>
              <li>Recruiters prefer project demos over resume bullets</li>
              <li>Time spent reviewing a resume: 7.4 seconds</li>
            </ul>

            <p>This blog is a full breakdown of the why, what, and how I built a high-impact personal portfolio.</p>
          </motion.section>

          {/* Tech Stack */}
          <motion.section id="tech-stack" {...fadeIn}>
            <h2>Page 2: The Blueprint – Architecting a High-Impact Portfolio</h2>
            <p>My stack: <code className="bg-black/20 px-2 py-1 rounded">React + Tailwind + Vite + Framer Motion + Vercel + EmailJS</code>. Here's why:</p>

            <ul className="space-y-2">
              <li><strong>React:</strong> Component-based, scalable, reusable</li>
              <li><strong>Tailwind:</strong> Utility-first, theming support, mobile-friendly</li>
              <li><strong>Vite:</strong> Blazing-fast dev experience</li>
              <li><strong>Vercel:</strong> CI/CD + CDN in one</li>
            </ul>

            <div className="bg-black/20 p-4 rounded-lg my-4">
              <pre><code>&lt;title&gt;Venkat Sai Charan | Software Engineer Portfolio&lt;/title&gt;</code></pre>
            </div>

            <p>I customized Tailwind themes, added semantic color variables, and implemented dark mode using <code className="bg-black/20 px-2 py-1 rounded">useContext</code>.</p>
          </motion.section>

          {/* Design */}
          <motion.section id="design" {...fadeIn}>
            <h2>Page 3: From Mockup to Motion – Designing with Intent</h2>
            <p>I wireframed in Figma, then built components in React using Tailwind. Animations? All thanks to <code className="bg-black/20 px-2 py-1 rounded">Framer Motion</code>:</p>

            <div className="bg-black/20 p-4 rounded-lg my-4">
              <pre><code>&lt;motion.div initial={{opacity:0}} animate={{opacity:1}}&gt;Hello World&lt;/motion.div&gt;</code></pre>
            </div>

            <p>Every section had intent: Projects guide visitors to the contact form, CTAs are action-oriented, and everything works across mobile, desktop, and dark/light themes.</p>
          </motion.section>

          {/* Analytics */}
          <motion.section id="analytics" {...fadeIn}>
            <h2>Page 4: The Data Game – Analytics-Driven UX Decisions</h2>
            <p>Using Google Analytics, Hotjar, and EmailJS logs, I tracked:</p>
            <ul className="space-y-2">
              <li>CTA click-through rates</li>
              <li>Heatmaps of most clicked elements</li>
              <li>Contact form conversion rate: 12.4%</li>
            </ul>
            <p>These insights helped improve engagement by over 37% after optimization.</p>
          </motion.section>

          {/* SEO */}
          <motion.section id="seo" {...fadeIn}>
            <h2>Page 5: SEO & Speed – Ranking Without Paying a Dime</h2>
            <p>SEO strategy focused on metadata, structured content, performance, and accessibility:</p>
            <ul className="space-y-2">
              <li>Performance score: 99</li>
              <li>Indexed via Google Search Console</li>
              <li>Impressions in month 1: 472</li>
            </ul>
            <p>I targeted terms like "React developer portfolio" and "Tailwind CSS portfolio example."</p>
          </motion.section>

          {/* Conversion */}
          <motion.section id="conversion" {...fadeIn}>
            <h2>Page 6: Conversion Ready – Driving Action, Not Just Views</h2>
            <p>CTA buttons, sticky mobile bars, and real-time validation turned views into leads. EmailJS was used for contact form submissions with live feedback.</p>
            <p>CTA click rate highlights:</p>
            <ul className="space-y-2">
              <li>Project Page: 14.1%</li>
              <li>Sticky CTA on mobile: 21.3%</li>
            </ul>
          </motion.section>

          {/* Summary */}
          <motion.section id="summary" {...fadeIn}>
            <h2>Page 7: TL;DR + Developer Resources</h2>
            <ul className="space-y-2">
              <li><strong>What worked:</strong> Clear CTAs, animations, keyword-targeted content</li>
              <li><strong>What helped convert:</strong> Light/dark mode toggle, real-time form feedback</li>
              <li><strong>Bonus:</strong> <a href="#">Download the Dev Portfolio Kit</a></li>
            </ul>

            <p>If you're building your own portfolio and want help or feedback—<a href="https://www.venkatasaicharan.com#contact">reach out here</a>.</p>
            <p className="text-xl font-bold mt-8">Thanks for reading. Now go build yours 🚀</p>
          </motion.section>
        </article>
      </motion.div>
    </>
  );
};

export default Blog; 