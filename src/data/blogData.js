export const blogPosts = [
  {
    slug: "portfolio-case-study",
    title: "The Code Behind the Canvas: How I Engineered My Personal Portfolio with React, Tailwind & Analytics",
    date: "2024-06-10",
    category: "Case Study",
    excerpt: "A full case study on building my personal portfolio using React, Tailwind, Vite, and Framer Motion.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    author: {
      name: "Venkata Sai Charan",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer"
    },
    readingTime: "8 min read",
    lastUpdated: "2024-06-15",
    content: `
      <article class="max-w-3xl mx-auto px-4 py-12">
        <!-- Blog Title -->
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">The Code Behind the Canvas: How I Engineered My Personal Portfolio with React, Tailwind & Analytics</h1>
        
        <!-- Meta Info -->
        <div class="flex items-center text-gray-500 text-sm mb-8 space-x-4">
          <img src="/images/avatar.jpg" class="w-8 h-8 rounded-full" alt="Author" />
          <span class="font-medium text-gray-800">Venkata Sai Charan</span>
          <span>•</span>
          <span>June 10, 2024</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        <!-- Hero Image (Portfolio Screenshot) -->
        <img src="/images/Thumbnail.jpg" class="rounded-xl mb-12 shadow-lg" alt="Portfolio Preview" />

        <!-- Blog Content -->
        <div class="prose prose-lg max-w-none text-gray-800">
          <section id="portfolio-revolution" class="mb-16 scroll-mt-20">
            <h2 class="text-3xl font-bold mb-6 flex items-center text-gray-900">
              <span class="mr-3">🧭</span>
              The Portfolio Revolution
            </h2>
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
              <h3 class="text-2xl font-semibold mb-4 text-gray-900">Why Portfolios Are the New Resumes</h3>
              <blockquote class="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-800 mb-6">
                "In today's market, your personal website is your first interview."
                <span class="block text-sm text-gray-600 mt-2">— Tech Recruiter at Google (2024)</span>
              </blockquote>
              <p class="text-gray-800 mb-6">For years, the one-page PDF resume was the universal key to unlocking job opportunities. But in a world where attention spans are shrinking and creativity matters more than ever, static resumes just don't cut it.</p>
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <h4 class="text-xl font-semibold mb-4 text-gray-900">Key Statistics</h4>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-800">
                    <span class="text-blue-600 mr-2">📊</span>
                    Developers with personal portfolios get 3x more callbacks
                  </li>
                  <li class="flex items-center text-gray-800">
                    <span class="text-blue-600 mr-2">📈</span>
                    76% of hiring managers prefer reviewing live demos
                  </li>
                  <li class="flex items-center text-gray-800">
                    <span class="text-blue-600 mr-2">⏳</span>
                    Recruiters spend only 7.4 seconds per resume unless something stands out
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="blueprint" class="mb-16 scroll-mt-20">
            <h2 class="text-3xl font-bold mb-6 flex items-center text-gray-900">
              <span class="mr-3">🏗️</span>
              The Blueprint
            </h2>
            <div class="space-y-12">
              <!-- Tech Stack Table -->
              <div class="bg-white p-8 rounded-xl shadow-sm">
                <h3 class="text-2xl font-semibold mb-6 text-gray-900">Tech Stack</h3>
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr class="bg-gray-100">
                        <th class="text-left py-4 px-4 text-gray-900 font-semibold border-b-2 border-gray-400 border-r border-gray-300">Layer</th>
                        <th class="text-left py-4 px-4 text-gray-900 font-semibold border-b-2 border-gray-400 border-r border-gray-300">Technology</th>
                        <th class="text-left py-4 px-4 text-gray-900 font-semibold border-b-2 border-gray-400">Why I Chose It</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 text-gray-800 font-medium border-b border-r border-gray-300">Frontend</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-r border-gray-300">React</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-gray-300">Component-based, scalable</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 text-gray-800 font-medium border-b border-r border-gray-300">Styling</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-r border-gray-300">Tailwind CSS</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-gray-300">Utility-first, responsive</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 text-gray-800 font-medium border-b border-r border-gray-300">Build Tool</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-r border-gray-300">Vite</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-gray-300">Fast dev server and build</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 text-gray-800 font-medium border-b border-r border-gray-300">Hosting</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-r border-gray-300">Vercel</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-gray-300">CI/CD and CDN combined</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 text-gray-800 font-medium border-r border-gray-300">Animation</td>
                        <td class="py-4 px-4 text-gray-800 border-r border-gray-300">Framer Motion</td>
                        <td class="py-4 px-4 text-gray-800">Smooth microinteractions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Performance Metrics Table -->
              <div class="bg-white p-8 rounded-xl shadow-sm">
                <h3 class="text-2xl font-semibold mb-6 text-gray-900">Performance Metrics</h3>
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr class="bg-gray-100">
                        <th class="text-left py-4 px-4 text-gray-900 font-semibold border-b-2 border-gray-400 border-r border-gray-300">Metric</th>
                        <th class="text-left py-4 px-4 text-gray-900 font-semibold border-b-2 border-gray-400 border-r border-gray-300">Score</th>
                        <th class="text-left py-4 px-4 text-gray-900 font-semibold border-b-2 border-gray-400">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 text-gray-800 font-medium border-b border-r border-gray-300">Performance</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-r border-gray-300">
                          <span class="text-green-600 font-bold text-lg">99</span>
                        </td>
                        <td class="py-4 px-4 text-gray-800 border-b border-gray-300">Page load and runtime performance</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 text-gray-800 font-medium border-b border-r border-gray-300">Accessibility</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-r border-gray-300">
                          <span class="text-green-600 font-bold text-lg">97</span>
                        </td>
                        <td class="py-4 px-4 text-gray-800 border-b border-gray-300">WCAG compliance and screen reader support</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 text-gray-800 font-medium border-b border-r border-gray-300">Best Practices</td>
                        <td class="py-4 px-4 text-gray-800 border-b border-r border-gray-300">
                          <span class="text-green-600 font-bold text-lg">100</span>
                        </td>
                        <td class="py-4 px-4 text-gray-800 border-b border-gray-300">Modern web development standards</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-4 px-4 text-gray-800 font-medium border-r border-gray-300">SEO</td>
                        <td class="py-4 px-4 text-gray-800 border-r border-gray-300">
                          <span class="text-green-600 font-bold text-lg">98</span>
                        </td>
                        <td class="py-4 px-4 text-gray-800">Search engine optimization score</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- System Architecture -->
              <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl">
                <h3 class="text-2xl font-semibold mb-6 text-gray-900">System Architecture</h3>
                <pre class="bg-white p-6 rounded-lg shadow-sm overflow-x-auto text-gray-800 font-mono text-sm">
[User Browser]
      ↓
  [Vercel CDN] ← GitHub Actions
      ↓
   [Vite Build]
      ↓
[React App Components]
      ↓
[EmailJS (Client-Side Email)]</pre>
              </div>
            </div>
          </section>

          <section id="mockup-motion" class="mb-16 scroll-mt-20">
            <h2 class="text-3xl font-bold mb-6 flex items-center text-gray-900">
              <span class="mr-3">🎨</span>
              From Mockup to Motion
            </h2>
            <div class="bg-white p-6 rounded-xl shadow-sm mb-8">
              <p class="text-gray-800 mb-6">I wireframed the site in Figma, and then translated designs to Tailwind components. Framer Motion made the whole thing come alive with gentle fade-ins, slide-ups, and entrance animations.</p>
              <div class="bg-gray-50 p-4 rounded-lg">
                <pre class="text-sm text-gray-800"><code>&lt;motion.div 
  initial={{opacity:0}} 
  animate={{opacity:1}}
&gt;
  Hello World
&lt;/motion.div&gt;</code></pre>
              </div>
            </div>
          </section>

          <section id="data-game" class="mb-16 scroll-mt-20">
            <h2 class="text-3xl font-bold mb-6 flex items-center text-gray-900">
              <span class="mr-3">📊</span>
              The Data Game
            </h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="text-3xl mb-2">📈</div>
                <h4 class="text-xl font-semibold mb-2 text-gray-900">Google Analytics</h4>
                <p class="text-gray-800">Track session time and user behavior</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="text-3xl mb-2">🔥</div>
                <h4 class="text-xl font-semibold mb-2 text-gray-900">Hotjar</h4>
                <p class="text-gray-800">Visualize user interaction with heatmaps</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="text-3xl mb-2">📧</div>
                <h4 class="text-xl font-semibold mb-2 text-gray-900">EmailJS</h4>
                <p class="text-gray-800">Monitor contact form conversions</p>
              </div>
            </div>
          </section>

          <section id="seo-speed" class="mb-16 scroll-mt-20">
            <h2 class="text-3xl font-bold mb-6 flex items-center text-gray-900">
              <span class="mr-3">⚡</span>
              SEO & Speed
            </h2>
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <ul class="space-y-4">
                <li class="flex items-center text-gray-800">
                  <span class="text-2xl mr-3">🏁</span>
                  <span>Performance score: 99</span>
                </li>
                <li class="flex items-center text-gray-800">
                  <span class="text-2xl mr-3">🚀</span>
                  <span>Deployed to Vercel with global edge network</span>
                </li>
                <li class="flex items-center text-gray-800">
                  <span class="text-2xl mr-3">🔍</span>
                  <span>Indexed with Google Search Console</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="conversion" class="mb-16 scroll-mt-20">
            <h2 class="text-3xl font-bold mb-6 flex items-center text-gray-900">
              <span class="mr-3">🎯</span>
              Conversion Ready
            </h2>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <p class="text-gray-800">I optimized each page to drive action. Sticky mobile bars, clear CTAs, and a fast EmailJS-powered contact form turned visits into conversations.</p>
            </div>
          </section>

          <section id="resources" class="mb-16 scroll-mt-20">
            <h2 class="text-3xl font-bold mb-6 flex items-center text-gray-900">
              <span class="mr-3">🧩</span>
              TL;DR + Resources
            </h2>
            <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
              <ul class="space-y-4">
                <li class="flex items-start text-gray-800">
                  <span class="text-2xl mr-3">✨</span>
                  <span><strong>Success Formula:</strong> Tech + Design + Speed + Intent</span>
                </li>
                <li class="flex items-start text-gray-800">
                  <span class="text-2xl mr-3">🎁</span>
                  <span>Free Dev Portfolio Kit (Meta tags, Tailwind config, Framer snippets)</span>
                </li>
                <li class="flex items-start text-gray-800">
                  <span class="text-2xl mr-3">🤝</span>
                  <span>Contact me for code reviews, portfolio help, or collaboration!</span>
                </li>
              </ul>
            </div>
          </section>

          <div class="text-center mt-12">
            <p class="text-xl text-gray-800">Thanks for reading. Now go build yours 🚀</p>
          </div>
        </div>
      </article>
    `
  },
]; 