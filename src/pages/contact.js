import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

const ContactPage = () => {
  const [navScrolled, setNavScrolled] = useState(false);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+260976549012",
      color: "#00AEEF"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "+260964360436",
      color: "#2BB673"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "youengagefoundations.site",
      color: "#F08F24"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Lusaka, Zambia",
      color: "#CC203D"
    }
  ];

  return (
    <div className="min-h-screen bg-[#15153F]">
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
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CC203D] transition-all group-hover:w-full" />
              </motion.a>
            </Link>      
            <Link href="/contact" passHref legacyBehavior>
              <motion.a whileHover={{ scale: 1.05 }} className="relative text-gray-800 hover:text-gray-900 font-semibold text-lg group">
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#CC203D]" />
              </motion.a>
            </Link>
          </div>
        </div>
      </motion.nav>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to transform your leadership journey? We're here to help you reach your full potential.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  <div style={{ color: info.color }}>{info.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 bg-[#15153F]">
              <h2 className="text-3xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="relative">
                <img
                  src="/contact_pic.jpg"
                  alt="Contact"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="p-12">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Message</label>
                  <textarea
                    rows="4"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="Your message"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#CC203D] text-white py-3 rounded-lg font-semibold hover:bg-[#B31E38] transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;