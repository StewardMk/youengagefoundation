"use client";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Programs = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const programRefs = useRef([]);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Program details
  const programs = [
    {
      id: "leadership-development",
      title: "Leadership Development",
      description: "One-on-one coaching sessions designed to enhance leadership capabilities and drive personal growth.",
      image: "/program_coaching.jpg",
      features: [
        "Personalized leadership assessment and growth plans",
        "Targeted skill-building for emerging leaders",
        "Regular progress reviews and goal alignment",
        "Action-based development strategies"
      ],
      benefits: [
        "Increased leadership confidence and capability",
        "Enhanced decision-making skills",
        "Improved performance management abilities",
        "Greater strategic thinking capabilities"
      ],
      duration: "8-12 weeks"
    },
    {
      id: "team-workshops",
      title: "Leadership Skills Workshops",
      description: "Interactive group workshops that build critical skills through hands-on activities and collaborative learning.",
      image: "/program_workshops.jpg",
      features: [
        "Engaging, activity-based learning experiences",
        "Practical skill application scenarios",
        "Peer feedback and collaborative problem-solving",
        "Customized content based on team needs assessment"
      ],
      benefits: [
        "Strengthened team cohesion and communication",
        "Practical leadership tools for immediate application",
        "Enhanced cross-functional collaboration",
        "Better conflict resolution capabilities"
      ],
      duration: "1-2 days per workshop"
    },
    {
      id: "reflective-conversations",
      title: "Reflective Conversations",
      description: "Guided reflective sessions that foster deeper understanding and application of leadership principles.",
      image: "/program_conversations.jpg",
      features: [
        "Structured reflection frameworks",
        "Small group discussions on leadership challenges",
        "Expert facilitation to guide meaningful insights",
        "Action planning for continuous improvement"
      ],
      benefits: [
        "Deeper integration of leadership concepts",
        "Increased self-awareness and emotional intelligence",
        "Broader perspective on leadership challenges",
        "Sustainable behavior change"
      ],
      duration: "Bi-weekly sessions over 3-6 months"
    }
  ];

  const testimonialsData = [
    {
      quote: "The leadership development program transformed our team dynamics and boosted productivity significantly.",
      author: "Sarah J.",
      position: "Operations Director",
      company: "Global Tech Solutions"
    },
    {
      quote: "The workshops provided practical tools that our emerging leaders could implement immediately. We saw results within weeks.",
      author: "Michael L.",
      position: "HR Manager",
      company: "Innovative Systems Inc."
    },
    {
      quote: "The reflective conversations created a space for honest dialogue that helped us address underlying issues affecting performance.",
      author: "David T.",
      position: "Team Lead",
      company: "Forward Thinking Group"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Programs | YouEngage Foundation</title>
        <meta name="description" content="Leadership development programs offered by YouEngage Foundation" />
      </Head>

      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${navScrolled ? 'bg-white/70 shadow-md border-b border-white/10' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" passHref legacyBehavior>
            <a>
              <img
                src="/logo.png"
                alt="YouEngage Foundation"
                className="h-16 transition-transform duration-300 hover:scale-105"
              />
            </a>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10 items-center">    
            <Link href="/" passHref legacyBehavior>
              <motion.a whileHover={{ scale: 1.05 }} className="relative text-gray-800 hover:text-gray-900 font-semibold text-lg group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
              </motion.a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <motion.a whileHover={{ scale: 1.05 }} className="relative text-gray-800 hover:text-gray-900 font-semibold text-lg group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
              </motion.a>
            </Link>
            <Link href="/programs" passHref legacyBehavior>
              <motion.a whileHover={{ scale: 1.05 }} className="relative text-gray-800 hover:text-gray-900 font-semibold text-lg group">
                Programs
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#CC203D]" />
              </motion.a>
            </Link>      
            <Link href="/contact" passHref legacyBehavior>
              <motion.a whileHover={{ scale: 1.05 }} className="relative text-gray-800 hover:text-gray-900 font-semibold text-lg group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
              </motion.a>
            </Link>
            <motion.a
              href="#contact-section"
              className="ml-4 px-6 py-2.5 bg-[#CC203D] text-white rounded-full hover:bg-[#B31A35] transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#15153F] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[64rem] w-full stroke-white/10 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="programs-hero-pattern"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#programs-hero-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              custom={0}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Transformative <span className="text-[#F08F24]">Leadership Programs</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              custom={1}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Empowering the next generation of leaders through structured development opportunities that build essential skills, foster growth mindsets, and create lasting impact.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              custom={2}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#program-offerings" className="px-8 py-3 bg-[#CC203D] rounded-full font-semibold hover:bg-[#B31A35] transition-colors">
                Explore Programs
              </a>
              <a href="#contact-section" className="px-8 py-3 bg-transparent border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Request Information
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#231F20] mb-6">The Engagement Accelerator Framework</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive approach integrates three core elements to create a powerful leadership development experience that drives sustainable growth and measurable impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Framework card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-50 rounded-xl p-8 border-t-4 border-[#00AEEF] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#00AEEF]/10 rounded-full mb-6">
                <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#231F20] mb-4">Phase 1: Assessment</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive evaluation of leadership capabilities, strengths, opportunities, and team dynamics.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3" />
                  Leadership style assessment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3" />
                  360° feedback collection
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3" />
                  Personalized development planning
                </li>
              </ul>
            </motion.div>

            {/* Framework card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-50 rounded-xl p-8 border-t-4 border-[#F08F24] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#F08F24]/10 rounded-full mb-6">
                <svg className="w-8 h-8 text-[#F08F24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#231F20] mb-4">Phase 2: Development</h3>
              <p className="text-gray-600 mb-4">
                Targeted skill-building through a combination of coaching, workshops, and facilitated learning experiences.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#F08F24] rounded-full mr-3" />
                  One-on-one coaching sessions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#F08F24] rounded-full mr-3" />
                  Group workshops and practice labs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#F08F24] rounded-full mr-3" />
                  Reflective conversations
                </li>
              </ul>
            </motion.div>

            {/* Framework card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-50 rounded-xl p-8 border-t-4 border-[#2BB673] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#2BB673]/10 rounded-full mb-6">
                <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#231F20] mb-4">Phase 3: Integration</h3>
              <p className="text-gray-600 mb-4">
                Embedding new skills into daily practice and creating sustainable systems for continuous growth.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2BB673] rounded-full mr-3" />
                  Application coaching
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2BB673] rounded-full mr-3" />
                  Progress measurement
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2BB673] rounded-full mr-3" />
                  Long-term sustainability planning
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Program cycle graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto mt-12 p-8 bg-gray-50 rounded-2xl shadow-sm"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#231F20]">Our 12-Week Transformation Cycle</h3>
              <p className="text-gray-600 mt-2">A structured approach to developing leadership excellence</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00AEEF]/10 mb-3">
                  <span className="text-xl font-bold text-[#00AEEF]">1</span>
                </div>
                <h4 className="font-semibold text-[#231F20]">Discovery</h4>
                <p className="text-sm text-gray-600">Weeks 1-2</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F08F24]/10 mb-3">
                  <span className="text-xl font-bold text-[#F08F24]">2</span>
                </div>
                <h4 className="font-semibold text-[#231F20]">Foundation</h4>
                <p className="text-sm text-gray-600">Weeks 3-5</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2BB673]/10 mb-3">
                  <span className="text-xl font-bold text-[#2BB673]">3</span>
                </div>
                <h4 className="font-semibold text-[#231F20]">Application</h4>
                <p className="text-sm text-gray-600">Weeks 6-9</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#CC203D]/10 mb-3">
                  <span className="text-xl font-bold text-[#CC203D]">4</span>
                </div>
                <h4 className="font-semibold text-[#231F20]">Integration</h4>
                <p className="text-sm text-gray-600">Weeks 10-12</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Offerings */}
      <section id="program-offerings" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#231F20] mb-6">Our Core Program Offerings</h2>
            <p className="text-lg text-gray-600">
              We deliver transformative experiences through three interconnected development pathways, each designed to build specific leadership capabilities.
            </p>
          </motion.div>

          {programs.map((program, index) => (
            <div 
              key={program.id}
              id={program.id}
              ref={el => programRefs.current[index] = el}
              className="mb-20"
            >
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <motion.div 
                  variants={index % 2 === 0 ? fadeInFromLeft : fadeInFromRight}
                  className="w-full md:w-1/2"
                >
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="rounded-xl shadow-lg w-full h-[300px] md:h-[400px] object-cover"
                  />
                </motion.div>
                
                <motion.div 
                  variants={index % 2 === 0 ? fadeInFromRight : fadeInFromLeft}
                  className="w-full md:w-1/2"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-[#231F20] mb-4">{program.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{program.description}</p>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                    <h4 className="font-semibold text-[#231F20] mb-3">Program Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-[#CC203D] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-4">
                    <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-800">
                      <span className="font-bold">Duration:</span> {program.duration}
                    </div>
                    <Link href="/contact" passHref legacyBehavior>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-2 bg-[#CC203D] text-white rounded-full font-semibold text-center hover:bg-[#B31A35] transition-colors"
                      >
                        Request Information
                      </motion.a>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
{/* Program Outcomes */}
<section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#231F20] mb-6">Program Outcomes</h2>
            <p className="text-lg text-gray-600">
              Our programs consistently deliver measurable improvements in leadership capabilities, team performance, and organizational culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Outcome Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-[#00AEEF]/10 rounded-full mx-auto mb-6">
                <svg className="w-10 h-10 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#231F20] mb-3">94%</h3>
              <p className="text-gray-700">
                Report increased leadership confidence and decision-making ability
              </p>
            </motion.div>

            {/* Outcome Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-[#F08F24]/10 rounded-full mx-auto mb-6">
                <svg className="w-10 h-10 text-[#F08F24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#231F20] mb-3">87%</h3>
              <p className="text-gray-700">
                Of teams show improved collaboration and communication metrics
              </p>
            </motion.div>

            {/* Outcome Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-[#2BB673]/10 rounded-full mx-auto mb-6">
                <svg className="w-10 h-10 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#231F20] mb-3">76%</h3>
              <p className="text-gray-700">
                Experience improved performance indicators within 6 months
              </p>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#231F20] mb-10">What Our Participants Say</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonialsData.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="mb-4 text-[#F08F24]">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-[#231F20]">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact-section" className="py-20 bg-[#15153F] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Leadership?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Take the first step toward creating lasting impact through our specialized leadership development programs.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC203D] text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC203D] text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-200 mb-1">Program of Interest</label>
                  <select
                    id="program"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC203D] text-white"
                  >
                    <option value="">Select a program</option>
                    <option value="leadership-development">Leadership Development</option>
                    <option value="team-workshops">Leadership Skills Workshops</option>
                    <option value="reflective-conversations">Reflective Conversations</option>
                    <option value="custom">Custom Program</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC203D] text-white"
                    placeholder="Tell us about your leadership development needs..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="w-full px-6 py-3 mt-2 bg-[#CC203D] text-white rounded-lg font-semibold hover:bg-[#B31A35] transition-colors"
                >
                  Request Program Information
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#231F20] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logo-white.png" alt="YouEngage Foundation" className="h-16 mb-4" />
              <p className="text-gray-400">
                Empowering the next generation of leaders through transformative development experiences.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#leadership-development" className="text-gray-400 hover:text-white transition-colors">Leadership Development</a></li>
                <li><a href="#team-workshops" className="text-gray-400 hover:text-white transition-colors">Leadership Skills Workshops</a></li>
                <li><a href="#reflective-conversations" className="text-gray-400 hover:text-white transition-colors">Reflective Conversations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                <p className="mb-2">123 Leadership Way</p>
                <p className="mb-2">San Francisco, CA 94107</p>
                <p className="mb-2">info@youengagefoundation.org</p>
                <p className="mb-2">(555) 123-4567</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} YouEngage Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CSS for animated background circles */}
      <style jsx>{`
        .circles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .circles li {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          animation: animate 25s linear infinite;
          bottom: -150px;
          border-radius: 50%;
        }

        .circles li:nth-child(1) {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
          animation-duration: 20s;
          background: rgba(255, 255, 255, 0.05);
        }

        .circles li:nth-child(2) {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 25s;
          background: rgba(255, 255, 255, 0.07);
        }

        .circles li:nth-child(3) {
          left: 70%;
          width: 30px;
          height: 30px;
          animation-delay: 4s;
          animation-duration: 18s;
          background: rgba(255, 255, 255, 0.03);
        }

        .circles li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 15s;
          background: rgba(255, 255, 255, 0.04);
        }

        .circles li:nth-child(5) {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
          animation-duration: 12s;
          background: rgba(255, 255, 255, 0.06);
        }

        .circles li:nth-child(6) {
          left: 75%;
          width: 110px;
          height: 110px;
          animation-delay: 3s;
          animation-duration: 30s;
          background: rgba(255, 255, 255, 0.02);
        }

        .circles li:nth-child(7) {
          left: 35%;
          width: 150px;
          height: 150px;
          animation-delay: 7s;
          animation-duration: 25s;
          background: rgba(255, 255, 255, 0.01);
        }

        .circles li:nth-child(8) {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
          background: rgba(255, 255, 255, 0.05);
        }

        .circles li:nth-child(9) {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
          background: rgba(255, 255, 255, 0.07);
        }

        .circles li:nth-child(10) {
          left: 85%;
          width: 150px;
          height: 150px;
          animation-delay: 0s;
          animation-duration: 20s;
          background: rgba(255, 255, 255, 0.02);
        }

        @keyframes animate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }
          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Programs;