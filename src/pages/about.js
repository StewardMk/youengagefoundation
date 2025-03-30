"use client";
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const AboutPage = () => {
  const { scrollY } = useScroll();
  const [navScrolled, setNavScrolled] = useState(false);
  const missionRef = useRef(null);
  const historyRef = useRef(null);
  const teamRef = useRef(null);
  
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const historyInView = useInView(historyRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  const backgroundColor = useTransform(scrollY, [0, 200], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)']);
  const shadow = useTransform(scrollY, [0, 200], ['0 0 0 rgba(0,0,0,0)', '0 4px 24px rgba(0,0,0,0.1)']);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setNavScrolled(latest > 50);
    });
  }, [scrollY]);

  // Animations for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar (Same as in index.js for consistency) */}
      <motion.nav 
        style={{ backgroundColor, boxShadow: shadow }}
        className="fixed w-full backdrop-blur-md z-50 transition-all duration-300 border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <img
                src="/logo.png"
                alt="YouEngage Foundation"
                className="h-16 transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10 items-center">    
            <Link href="/" passHref legacyBehavior>
              <motion.a className="relative text-grey/90 hover:text-grey font-semibold text-lg group" whileHover={{ scale: 1.05 }}>
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
              </motion.a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <motion.a className="relative text-grey/90 hover:text-grey font-semibold text-lg group" whileHover={{ scale: 1.05 }}>
                About
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
              </motion.a>
            </Link>
            <Link href="/programs" passHref legacyBehavior>
              <motion.a className="relative text-grey/90 hover:text-grey font-semibold text-lg group" whileHover={{ scale: 1.05 }}>
                Program
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
              </motion.a>
            </Link>      
            <Link href="/contact" passHref legacyBehavior>
              <motion.a className="relative text-grey/90 hover:text-grey font-semibold text-lg group" whileHover={{ scale: 1.05 }}>
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
              </motion.a>
            </Link> 
            <motion.a
              href="#"
              className="ml-4 px-6 py-2.5 bg-[#CC203D] text-white rounded-full hover:bg-[#B31A35] transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 bg-[#15153F]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-[#F08F24]">YouEngage</span></h1>
              <p className="text-lg md:text-xl mb-8">
                YouEngage Foundation is a Human Capital Social enterprise dedicated to developing the next generation of thoughtful and impactful leaders. Through our tailored coaching services and workshops, we equip young, emerging leaders with the skills, mindset, and networks they need to thrive.
              </p>
              <div className="flex space-x-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-[#CC203D] text-white rounded-lg font-semibold"
                >
                  Our Mission
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 border border-[#00AEEF] text-white rounded-lg font-semibold"
                >
                  Meet Our Team
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/about_pic.jpg" 
                alt="About YouEngage" 
                className="rounded-xl shadow-2xl relative z-10"
              />
              <div className="absolute w-full h-full bg-[#00AEEF] rounded-xl top-6 left-6 -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6 text-[#231F20]">Our Mission</motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600">
              At YouEngage Foundation, we believe in the power of authentic leadership. Our mission is to empower the next generation of leaders with the essential skills, mindset, and networks to lead with purpose and create meaningful impact in their communities and organizations.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-[#00AEEF]"
            >
              <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#231F20]">Empower</h3>
              <p className="text-gray-600">
                We empower emerging leaders to discover their unique leadership style and develop confidence in their abilities through personalized coaching and mentorship.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-[#F08F24]"
            >
              <div className="w-16 h-16 bg-[#F08F24]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#F08F24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#231F20]">Equip</h3>
              <p className="text-gray-600">
                We equip leaders with practical tools, frameworks, and skills needed to navigate complex challenges and lead effectively in rapidly changing environments.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-[#2BB673]"
            >
              <div className="w-16 h-16 bg-[#2BB673]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#231F20]">Engage</h3>
              <p className="text-gray-600">
                We create opportunities for emerging leaders to connect, collaborate, and build meaningful relationships with peers and established leaders in various fields.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section ref={historyRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={historyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#231F20]">Our Journey</h2>
            <p className="text-xl text-gray-600">
              For over a decade, YouEngage Foundation has been at the forefront of leadership development, working with organizations across various sectors to nurture the next generation of impactful leaders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-1 bg-[#CC203D] relative">
                <motion.div 
                  initial={{ height: '0%' }}
                  animate={historyInView ? { height: '100%' } : { height: '0%' }}
                  transition={{ duration: 1.2 }}
                  className="absolute top-0 left-0 w-full bg-[#15153F]"
                ></motion.div>
              </div>
            </div>

            <div className="md:col-span-11 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-md relative"
              >
                <div className="absolute -left-14 top-8 w-8 h-8 bg-[#00AEEF] rounded-full border-4 border-white flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#231F20]">2010: The Beginning</h3>
                <p className="text-gray-600 mb-4">
                  YouEngage Foundation was established with a vision to transform how leadership development is approached. We started with a small team of dedicated coaches and a handful of corporate clients.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-[#00AEEF]">Key Milestone:</div>
                  <div className="text-gray-600">Launched our first leadership development program with 25 participants.</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-md relative"
              >
                <div className="absolute -left-14 top-8 w-8 h-8 bg-[#F08F24] rounded-full border-4 border-white flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#231F20]">2015: Expansion Phase</h3>
                <p className="text-gray-600 mb-4">
                  After five successful years, we expanded our reach to multiple countries and diversified our program offerings to cater to different leadership needs and contexts.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-[#F08F24]">Key Milestone:</div>
                  <div className="text-gray-600">Established offices in 5 countries and served over 100 organizations.</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white p-8 rounded-xl shadow-md relative"
              >
                <div className="absolute -left-14 top-8 w-8 h-8 bg-[#2BB673] rounded-full border-4 border-white flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#231F20]">2020: Digital Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Adapting to changing global circumstances, we embraced digital transformation, launching virtual coaching platforms and online leadership workshops to reach a wider audience.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-[#2BB673]">Key Milestone:</div>
                  <div className="text-gray-600">Developed proprietary digital coaching methodology that has now impacted over 10,000 emerging leaders.</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-white p-8 rounded-xl shadow-md relative"
              >
                <div className="absolute -left-14 top-8 w-8 h-8 bg-[#CC203D] rounded-full border-4 border-white flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#231F20]">Today: Global Impact</h3>
                <p className="text-gray-600 mb-4">
                  Today, YouEngage Foundation stands as a global leader in leadership development, with a network of certified facilitators in over 15 countries and partnerships with leading organizations worldwide.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-[#CC203D]">Key Milestone:</div>
                  <div className="text-gray-600">Proudly transforming over 200 organizations and positively impacting thousands of emerging leaders globally.</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-[#15153F] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our <span className="text-[#F08F24]">Leadership Team</span></h2>
            <p className="text-xl text-gray-200">
              Meet the passionate experts behind YouEngage Foundation. Our diverse team brings decades of combined experience in leadership development, coaching, and organizational transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="/team_member_1.jpg" 
                  alt="Team Member" 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15153F] to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Sarah Johnson</h3>
                <div className="text-[#00AEEF] mb-4">Founder & CEO</div>
                <p className="text-gray-300 mb-6">
                  With over 15 years of experience in leadership development, Sarah brings visionary guidance and deep expertise to YouEngage Foundation.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-[#00AEEF]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#00AEEF]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="/team_member_2.jpg" 
                  alt="Team Member" 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15153F] to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Michael Rodriguez</h3>
                <div className="text-[#F08F24] mb-4">Director of Programs</div>
                <p className="text-gray-300 mb-6">
                  As our Program Director, Michael designs and oversees the implementation of our leadership development initiatives across regions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-[#F08F24]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#F08F24]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="/team_member_3.jpg" 
                  alt="Team Member" 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15153F] to-transparent opacity-70"></div>
              </div>
              
                <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Amina Patel</h3>
                <div className="text-[#2BB673] mb-4">Head of Coaching</div>
                <p className="text-gray-300 mb-6">
                  With expertise in executive coaching, Amina leads our talented team of coaches and ensures excellence in our leadership development approach.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-[#2BB673]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#2BB673]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white text-[#15153F] rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
            >
              Meet Our Full Team
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#231F20]">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              At the heart of everything we do are our core values. These principles guide our approach to leadership development and shape our organizational culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-50 rounded-xl p-8 border-b-4 border-[#00AEEF] hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#231F20]">Authenticity</h3>
              <p className="text-gray-600">
                We believe effective leadership starts with being true to yourself. We encourage leaders to embrace their unique strengths and vulnerabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-50 rounded-xl p-8 border-b-4 border-[#F08F24] hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#F08F24]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#F08F24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#231F20]">Integrity</h3>
              <p className="text-gray-600">
                We promote ethical leadership and decision-making, encouraging leaders to act with honesty, transparency, and moral courage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-50 rounded-xl p-8 border-b-4 border-[#2BB673] hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#2BB673]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#231F20]">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and forward-thinking approaches to leadership development, constantly evolving our methodologies to meet emerging needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-50 rounded-xl p-8 border-b-4 border-[#CC203D] hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#CC203D]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#CC203D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#231F20]">Collaboration</h3>
              <p className="text-gray-600">
                We foster meaningful connections and partnerships, believing that leadership thrives in environments of mutual support and shared learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#231F20]">What Our Partners Say</h2>
            <p className="text-xl text-gray-600">
              Hear from the organizations and individuals we've partnered with on their leadership development journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-md p-8 relative"
            >
              <div className="absolute -top-5 left-8 text-[#00AEEF] text-6xl">"</div>
              <div className="pt-6">
                <p className="text-gray-600 mb-8 italic">
                  YouEngage's leadership program transformed how our emerging leaders approach challenges and collaborate. Their personalized coaching methodology helped our team develop authentic leadership styles that align with our organizational values.
                </p>
                <div className="flex items-center">
                  <img 
                    src="/testimonial_1.jpg" 
                    alt="Testimonial" 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-[#231F20]">Rebecca Chen</div>
                    <div className="text-gray-500">Chief HR Officer, Global Tech Solutions</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-md p-8 relative"
            >
              <div className="absolute -top-5 left-8 text-[#F08F24] text-6xl">"</div>
              <div className="pt-6">
                <p className="text-gray-600 mb-8 italic">
                  The coaching and mentorship provided by YouEngage has been instrumental in building our leadership pipeline. Their approach to developing leaders who can navigate complexity while staying true to themselves is truly exceptional.
                </p>
                <div className="flex items-center">
                  <img 
                    src="/testimonial_2.jpg" 
                    alt="Testimonial" 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-[#231F20]">Marcus Johnson</div>
                    <div className="text-gray-500">Executive Director, Community Impact Foundation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-[#15153F] text-white rounded-lg font-semibold shadow-lg hover:bg-[#1E1E4F] transition-colors"
            >
              Read More Success Stories
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#231F20]">Our Partners</h2>
            <p className="text-xl text-gray-600">
              We collaborate with leading organizations across sectors to develop leadership capabilities and drive organizational transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={`/partner_${partner}.png`} 
                  alt={`Partner ${partner}`} 
                  className="max-h-16 w-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#15153F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CC203D]/10 rounded-l-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-[#00AEEF]/10 rounded-tr-full"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Leadership Journey?</h2>
            <p className="text-xl text-gray-200 mb-10">
              Join thousands of emerging leaders who have enhanced their leadership capabilities through our programs. Let's work together to unlock your full potential.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-[#CC203D] text-white rounded-lg font-semibold shadow-lg hover:bg-[#B31A35] transition-colors"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A29] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <img src="/logo_white.png" alt="YouEngage Foundation" className="h-16 mb-6" />
              <p className="text-gray-300 mb-6">
                Empowering the next generation of leaders with the skills, mindset, and networks to create meaningful impact.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00AEEF] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3b5998] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff0000] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="/programs" className="text-gray-300 hover:text-white transition-colors">Our Programs</a>
                </li>
                <li>
                  <a href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Programs</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/leadership-coaching" className="text-gray-300 hover:text-white transition-colors">Leadership Coaching</a>
                </li>
                <li>
                  <a href="/workshops" className="text-gray-300 hover:text-white transition-colors">Workshops & Training</a>
                </li>
                <li>
                  <a href="/consulting" className="text-gray-300 hover:text-white transition-colors">Organizational Consulting</a>
                </li>
                <li>
                  <a href="/mentorship" className="text-gray-300 hover:text-white transition-colors">Mentorship Programs</a>
                </li>
                <li>
                  <a href="/events" className="text-gray-300 hover:text-white transition-colors">Leadership Events</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">
                    123 Leadership Avenue<br />
                    Suite 101<br />
                    San Francisco, CA 94107
                  </span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">info@youengage.org</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 YouEngage Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;