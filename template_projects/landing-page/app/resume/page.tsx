// ============================================================
// DIGITAL RESUME - Bolun Du
// ============================================================

import { Navbar } from "@/components/Navbar";
import {
  CheckIcon,
  LinkedInIcon,
  GitHubIcon,
} from "@/components/Icons";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                BD
              </div>
              <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
                Bolun Du
              </span>
            </a>
          </div>

          {/* Responsive Navigation */}
          <Navbar
            links={[
              { href: "/", label: "Home" },
              { href: "#experience", label: "Experience" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#education", label: "Education" },
              { href: "/#contact", label: "Contact Me", isButton: true },
            ]}
          />
        </div>
      </nav>

      {/* HERO - Professional Summary */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-grow">
                <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-2">
                  Bolun Du
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                  Software Engineer & AI Researcher
                </p>

                {/* Quick info */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Richmond, CA
                  </div>
                </div>

                {/* Professional Summary */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Software Engineer with experience in full-stack development, AI/ML, and system architecture. Proven track record at Meta and startups, specializing in building scalable tools and intelligent systems.
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  <a href="https://linkedin.com/in/bolun-du" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <LinkedInIcon className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Professional Experience
            </h2>

            <div className="space-y-12">
              
              {/* CSTU */}
              <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">California Science and Technology University</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Oct 2025 - Present</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Research Assistant</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Milpitas, CA</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Developing and validating an agentic robot control and planning prototype using multimodal LLMs targeting future deployment on real robotic platforms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Created a React/TypeScript-based operations and debugging dashboard integrating robot control, real-time telemetry, voice interaction, and agent work flow observability.</span>
                  </li>
                </ul>
              </div>

              {/* Meta */}
              <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Meta Platform, Inc</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Dec 2024 - Sep 2025</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Software Engineer</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Menlo Park, CA</p>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">Full-stack engineer for internal A/B testing tool "Quick Experiment" using React, Javascript, Hack (PHP), RESTful APIs, and GraphQL.</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Strengthened testing discipline at scale by integrating metric regression detection into the framework's CI/CD pipeline, resulting in 6% of eligible user changes adopting diff reviews for automated validation and a 50% increase in triggered detection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Introduced soft-blocking for unvalidated changes, proactively preventing 20% of risky changes from landing, and gathering 1,000+ monthly feedback from users to inform product decisions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Revamped gradient rollout experience, enabling default rollout in the backend with visualization in the UI. Resulted in less than 1% opt-out rate, signaling broad trust and adoption across teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Developed a Chronos-based logging pipeline for tracking experiment change landing failures, laying the groundwork for causal impact measurement and long-term quality auditing.</span>
                  </li>
                   <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Spearheaded rollout of "Launch Tracker", helping feature owners monitor deployments at scale, improving visibility and accountability across engineering orgs.</span>
                  </li>
                   <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Built root cause detection for experiment imbalances, resolving 100+ misconfigurations weekly using multi-source log data.</span>
                  </li>
                </ul>
              </div>

              {/* Aptivo */}
              <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Aptivo Ventures, LLC</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Mar 2021 - Feb 2024</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Software Engineer</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Remote</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Developed a royalty points and redemption platform using JSP, Spring, and MySQL, enabling automated loyalty rewards across client systems.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Prototyped a cross-platform mobile game (iOS, Android, WebGL) with Unity (C#) and a Java backend, addressing scalability through user account segregation and dynamic player distribution.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Designed scalable, component-based Unity UI architecture (50+ dynamic scenes) and implemented real-time, event-driven features using WebSockets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Improved engineering efficiency by building internal testing tools, implementing JUnit-based unit testing, and automating CI/CD with Unity Cloud Build, reducing frontend testing time by 50%.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* PROJECTS */}
      <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Key Projects
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Job Application Automation Tools</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Feb 2024 - Aug 2024</span>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 mt-4">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Designed and implemented a job application tool that supports information auto-filling and resume uploading. Using ReactJS, Node.js, and MongoDB for full-stack development.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Using NLP to analyze user resumes for key points and user info such as name and school for auto-filling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Using OAuth2 for secure user login and Gmail API.</span>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Languages & Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'PHP', 'C#', 'C/C++', 'Golang', 'SQL', 'Node.js', 'Spring', 'GraphQL', 'RESTful APIs'].map((skill) => (
                    <span key={skill} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Frontend & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['ReactJS', 'JavaScript', 'HTML/CSS', 'MongoDB', 'MySQL', 'Git', 'Unity', 'Gradle', 'JUnit', 'Linux/Unix', 'CI/CD'].map((skill) => (
                    <span key={skill} className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">M.S. in Computer Science</h3>
                    <p className="text-blue-600 dark:text-blue-400">Sofia University, California Science and Technology University</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">GPA: 3.92 | Expected Feb 2026</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                      Coursework: Data Science, Machine Learning, Data Visualization, Artificial Intelligence, Agentic AI
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">B.S. in Electrical Engineering & Computer Science</h3>
                    <p className="text-blue-600 dark:text-blue-400">University of California - Berkeley</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">GPA: 3.97 | 2018 - 2020</p>
                     <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                      Extracurricular: Eta Kappa Nu (EECS Honor Society) Member
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Bolun Du. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}