 "use client"
import { useState, useEffect, useMemo } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ChevronRight, Code, Briefcase, Mail, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Terminal, { TypedReactHooksDemo } from '@/components/mainpage/terminal'

export default function Component() {
  const [activeSection, setActiveSection] = useState('home')
  const controls = useAnimation()

  const sections = useMemo(() => ['home', 'about', 'projects', 'contact'], []);

  useEffect(() => {
    controls.start('visible')
  }, [controls, activeSection])
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top < windowHeight / 2 && bottom > windowHeight / 2) {
            setActiveSection(section)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection, sections])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {sections.map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  className={`text-sm uppercase ${activeSection === section ? 'text-green-400' : 'text-gray-300'}`}
                  onClick={() => {
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {section}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <LandingSection id="home" />
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </main>

      <footer className="bg-gray-800 py-8 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} A.Ewies. All rights reserved.</p>
      </footer>
    </div>
  )
}

function LandingSection({ id } : { id: string }) {
  return (
    <section id={id} className="min-h-screen relative w-full  flex items-center justify-center bg-gray-900">
      <div className="container mx-auto  w-[60%] px-6 text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl h-40 md:text-4xl font-bold mb-6"
        >
          <TypedReactHooksDemo />

        </motion.h1>
   
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="#projects">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg">
            Explore My Work <ChevronRight className="ml-2" />
          </Button>
          </Link>
        </motion.div>
      </div> 
      {/* <div className=" px-6 w-[40%]">
        <Terminal />
      </div> */}
    </section>
  )
}

function AboutSection({ id } : { id: string }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id={id} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-gray-700 p-6 rounded-lg">
            <Code className="text-green-400 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <p>Proficient in JavaScript, TypeScript, React, Node.js, and modern web technologies.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-gray-700 p-6 rounded-lg">
            <Briefcase className="text-green-400 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p>1.5+ years of experience in developing scalable web applications and solving complex problems.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-gray-700 p-6 rounded-lg">
            <Mail className="text-green-400 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p>Strong communicator and team player, always eager to learn and share knowledge.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectsSection({ id } : { id: string }) {
  const projects = [
   
    {
      title: "Building Management System (BMS) Technology Company Website with Integrated Dashboard",
      description: " A website for a BMS technology company with an integrated dashboard for monitoring and controlling building systems.",
      technologies: ["Next.js", "Shadcn UI" ,"tailwind css","useSwr" ,"ReduxToolKit", "MongoDB" ,"Express.js" ,"Node.js" ],
      link: "https://bms-tech.vercel.app/"
    }
  ]




  return (
    <section id={id} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-green-400 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection({ id } : { id: string }) {
  return (
    <section id={id} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xl mb-4">Or connect with me on:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Ahmed-3del" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <GitHubLogoIcon className="w-8 h-8" />
            </a>
            <a href="www.linkedin.com/in/ahmed-adel-1b8466241" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          
          </div>
        </motion.div>
      </div>
    </section>
  )
}