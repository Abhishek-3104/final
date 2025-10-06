"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-300/30 to-emerald-300/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300/30 to-green-300/30 rounded-full blur-3xl"
      />

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center">
          {/* 404 Number Animation */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <motion.h1
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                  "0 0 40px rgba(16, 185, 129, 0.8)",
                  "0 0 20px rgba(16, 185, 129, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-9xl md:text-[200px] font-extrabold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent"
            >
              404
            </motion.h1>
            
            {/* Floating Trash Icons */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-1/4 text-6xl"
            >
              🗑️
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-10 right-1/4 text-5xl"
            >
              ♻️
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Looks like this page has been collected by our waste management system. 
              Don't worry, we'll help you find your way back!
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for what you need..."
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-2xl hover:bg-green-50 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </motion.button>
            </Link>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Features', icon: '⚡', href: '/#features' },
                { name: 'Services', icon: '🚀', href: '/#services' },
                { name: 'Pricing', icon: '💰', href: '/#pricing' },
                { name: 'Contact', icon: '📧', href: '/#contact' }
              ].map((link, index) => (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 20px -5px rgba(16, 185, 129, 0.3)"
                    }}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
                  >
                    <div className="text-3xl mb-2">{link.icon}</div>
                    <div className="font-semibold text-gray-900">{link.name}</div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Error Code */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-sm text-gray-400"
          >
            <p>Error Code: 404 | Page Not Found</p>
            <p className="mt-2">If you believe this is a mistake, please contact our support team.</p>
          </motion.div>
        </div>
      </div>

      {/* Animated Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4
          }}
          className="absolute w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
}