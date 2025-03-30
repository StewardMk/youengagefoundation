"use client"; 
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Homepage = () => {
  const { scrollY } = useScroll();
  const [navScrolled, setNavScrolled] = useState(false);
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  const backgroundColor = useTransform(scrollY, [0, 200], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)']);
  const shadow = useTransform(scrollY, [0, 200], ['0 0 0 rgba(0,0,0,0)', '0 4px 24px rgba(0,0,0,0.1)']);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setNavScrolled(latest > 50);
    });
  }, [scrollY]);

  const features = [
    { 
      title: "Skill Enhancement", 
      color: "#00AEEF",
      content: "Equipping emerging leaders with the essential skills and tools for high-impact leadership."
    },
    { 
      title: "Mindset Cultivation", 
      color: "#F08F24",
      content: "Fostering a growth mindset and promoting self-awareness."
    },
    { 
      title: "Impact Creation", 
      color: "#2BB673",
      content: "Enhancing the ability to create real impact and attain influence within their teams and organizations."
    },
  ];

  return (
    <div className="min-h-screen">
      <motion.nav 
  style={{ backgroundColor, boxShadow: shadow }}
  className="fixed w-full backdrop-blur-md z-50 transition-all duration-300 border-b border-white/10"
>
  <div className="container mx-auto px-6 py-6 flex items-center justify-between">
    {/* Logo with hover animation */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/logo.png"
        alt="YouEngage Foundation"
        className="h-16 transition-transform duration-300 hover:scale-105"
      />
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
          Program<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
        </motion.a>
      </Link>      
      <Link href="/contact" passHref legacyBehavior>
        <motion.a className="relative text-grey/90 hover:text-grey font-semibold text-lg group" whileHover={{ scale: 1.05 }}>Contact<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
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
    <button className="md:hidden text-white">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</motion.nav>

      {/* Hero Section */}
      <div className="relative isolate bg-[#15153F]">
  <svg
    aria-hidden="true"
    className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-white/10 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
  >
    <defs>
      <pattern
        x="50%"
        y={-1}
        id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
        width={200}
        height={200}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y={-1} className="overflow-visible fill-[#15153F]">
      <path
        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        strokeWidth={0}
      />
    </svg>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
  </svg>
  <div
    aria-hidden="true"
    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
  >
    <div
      style={{
        clipPath:
          'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
      }}
      className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#00AEEF] to-[#F08F24] opacity-30"
    />
  </div>
  <div className="overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Building Excellent Young Emerging Leaders
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
          Empowering the next generation of leaders through tailored coaching, workshops, and reflective platforms.
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
              Our mission is to equip them with the essential skills, mindset, and networks to lead with purpose.</p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#CC203D] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#B31A35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC203D]"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-[#F08F24] hover:text-[#FFA726]">
              Live demo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
          {/* Image columns remain the same with updated border color */}
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="/086A9177.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="/086A9181.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="/086A9154.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="/086A9168.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="/team_member_2.jpg"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
          {/* Repeat same border color change for other image containers */}
        </div>
      </div>
    </div>
  </div>
  <ul class="circles">
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
</div>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#231F20]">
            Our Program Objectives

          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg border-t-4"
                style={{ borderColor: feature.color }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#231F20]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
<section className="py-20 bg-[#15153F] text-white">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image Column */}
      <div className="relative">
        <img
          src="/about_pic.jpg"
          alt="About YouEngage"
          className="rounded-xl shadow-2xl"
        />
        <div className="absolute -bottom-8 -right-8 bg-[#00AEEF] p-6 rounded-xl shadow-lg hidden md:block">
          <div className="text-4xl font-bold">12+</div>
          <div className="text-lg">Years of Experience</div>
        </div>
      </div>

      {/* Content Column */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">
          About <span className="text-[#F08F24]">YouEngage Foundation</span>
        </h2>
        <p className="text-lg text-gray-200">
          YouEngage Foundation is a Human Capital Social enterprise focused on coaching services for young, emerging leaders. Our core emphasis lies in facilitating reflective and profound conversations to foster their growth and development.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-[#F08F24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">200+ Organizations Transformed</div>
              <div className="text-gray-300 text-sm">Across various industries worldwide</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#F08F24]/10 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-[#F08F24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>   
            </div>
            <div>
              <div className="font-semibold">Proven Methodologies</div>
              <div className="text-gray-300 text-sm">Backed by research and real-world results</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#CC203D]/10 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Global Network</div>
              <div className="text-gray-300 text-sm">Certified facilitators in 15+ countries</div>
            </div>
          </div>
        </div>

        <button className="mt-6 bg-[#CC203D] px-8 py-3 rounded-lg font-semibold hover:bg-[#B31A35] transition-colors">
          Our Story
        </button>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-[#231F20]">   
      Program Offerings
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Service 1: High-Impact Leadership Coaching Sessions */}
      <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-[#CC203D] hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-center w-16 h-16 bg-[#00AEEF]/10 rounded-full mb-6">
          <svg className="w-8 h-8 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#231F20] mb-4">Leadership Development</h3>
        <p className="text-gray-600 mb-6">
          Personalized one-on-one coaching with experienced mentors.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#CC203D] rounded-full mr-3" />
            Tailored leadership development plans
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#CC203D] rounded-full mr-3" />
            Regular progress tracking and accountability
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#CC203D] rounded-full mr-3" />
            
          </li>
        </ul>
      </div>

      {/* Service 2: Leadership Skills Workshops */}
      <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-[#F08F24] hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-center w-16 h-16 bg-[#F08F24]/10 rounded-full mb-6">
          <svg className="w-8 h-8 text-[#F08F24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#231F20] mb-4">Team Engagement</h3>
        <p className="text-gray-600 mb-6">
        Interactive workshops focusing on essential leadership skills.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#F08F24] rounded-full mr-3" />
            Topics including communication, emotional intelligence
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#F08F24] rounded-full mr-3" />
            team-building, decision-making, and more.
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#F08F24] rounded-full mr-3" />
            Practical activities to apply learned skills in real-world scenarios.
          </li>
        </ul>
      </div>

      {/* Service 3: Performance Optimization */}
      <div className="bg-gray-50 rounded-xl p-8 border-t-4 border-[#2BB673] hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-center w-16 h-16 bg-[#2BB673]/10 rounded-full mb-6">
          <svg className="w-8 h-8 text-[#2BB673]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#231F20] mb-4">Performance Optimization</h3>
        <p className="text-gray-600 mb-6">
        Group discussions facilitated by experts.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#2BB673] rounded-full mr-3" />
            Opportunities to share experiences, insights, and challenges
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#2BB673] rounded-full mr-3" />
            Mutual learning and support among participants.
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-[#2BB673] rounded-full mr-3" />
            Continuous improvement systems
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Program Overview */}
      <section className="py-20 bg-[#15153F] text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/program_pic.jpg"
            alt="Leadership Program"
            className="rounded-2xl shadow-xl"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6">The Engagement Accelerator</h2>
            <p className="text-lg mb-6">
              Our flagship 12-week program combines leadership coaching with team workshops to:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#F08F24] rounded-full mr-3" />
                High-Impact Leadership Coaching Sessions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3" />
                Leadership Skills Workshops
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#2BB673] rounded-full mr-3" />
                Reflective Conversations
              </li><li className="flex items-center">
                <div className="w-2 h-2 bg-[#CC203D] rounded-full mr-3" />
                Create sustainable performance frameworks
              </li>
            </ul>
            <button className="bg-[#CC203D] px-6 py-3 rounded-lg font-semibold hover:bg-[#B31E38]">
              Program Details
            </button>
          </div>
        </div>
      </section>

      

      {/* Impact Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#231F20]">
            Proven Results
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border-l-4 border-[#00AEEF]">
              <div className="text-4xl font-bold text-[#231F20] mb-2">87%</div>
              <div className="text-gray-600">Employee Retention Increase</div>
            </div>
            <div className="p-6 border-l-4 border-[#F08F24]">
              <div className="text-4xl font-bold text-[#231F20] mb-2">2.3x</div>
              <div className="text-gray-600">Productivity Growth</div>
            </div>
            <div className="p-6 border-l-4 border-[#2BB673]">
              <div className="text-4xl font-bold text-[#231F20] mb-2">94%</div>
              <div className="text-gray-600">Leadership Satisfaction</div>
            </div>
            <div className="p-6 border-l-4 border-[#CC203D]">
              <div className="text-4xl font-bold text-[#231F20] mb-2">200+</div>
              <div className="text-gray-600">Organizations Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#231F20]">Start Your Transformation</h2>
            <p className="text-lg text-gray-600">
              Ready to unlock your team's potential? Our engagement specialists are here to help.
            </p>
            <img
              src="/contact_pic.jpg"
              alt="Contact Us"
              className="rounded-xl"
            />
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#CC203D] text-white py-3 rounded-lg font-semibold hover:bg-[#B31E38]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homepage;