"use client";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-100"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                WasteSmart
              </a>
            </motion.div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Features', 'Services', 'Pricing', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ y: -2 }}
                    className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white py-2 px-6 border border-gray-200 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all hover:shadow-md"
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-md text-sm font-medium rounded-full text-white bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 hover:shadow-xl transition-all"
                >
                  Sign Up
                </motion.button>
              </div>
            </div>

            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-gradient-to-r from-green-600 to-emerald-500 inline-flex items-center justify-center p-2 rounded-lg text-white"
              >
                <span className="sr-only">Open main menu</span>
                <AnimatePresence mode="wait">
                  {!mobileMenuOpen ? (
                    <motion.svg
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['Features', 'Services', 'Pricing', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-green-600 hover:bg-green-50 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col items-center space-y-3 px-5">
                  <button className="w-full bg-white py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Login
                  </button>
                  <button className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-gradient-to-r from-green-600 to-emerald-500">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <main className="pt-16">
        <section className="relative bg-gradient-to-br from-white via-green-50/30 to-emerald-50/40 overflow-hidden pt-16 md:pt-24 pb-12">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-teal-200/20 to-green-200/20 rounded-full blur-3xl"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 mb-6"
                  >
                    <span className="text-sm font-semibold text-green-800">🌱 Smart & Sustainable</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                  >
                    <span className="block">Smart Waste</span>
                    <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                      Management
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                  >
                    Optimize collection routes, reduce costs, and improve sustainability with our intelligent waste management platform
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 sm:mt-12"
                  >
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex gap-3">
                        <div className="min-w-0 flex-1">
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-4 rounded-2xl border-2 border-gray-200 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0">
                          <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="block w-full py-4 px-8 rounded-2xl shadow-lg bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white font-semibold hover:shadow-2xl transition-all"
                          >
                            Get Started
                          </motion.button>
                        </div>
                      </div>
                    </form>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-4 flex items-center justify-center lg:justify-start gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Start your free 14-day trial. No credit card required.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative mx-auto w-full rounded-3xl shadow-2xl lg:max-w-md overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 z-10"></div>
                  <img
                    className="w-full relative"
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Waste Management Dashboard"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-center text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 bg-clip-text text-transparent tracking-tight sm:text-4xl">
                Transform Your Waste Management
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-500">
                Our comprehensive platform provides everything you need to optimize waste collection operations
              </p>
            </motion.div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <dl className="space-y-10">
                  {[
                    {
                      name: 'Optimized Routes',
                      description: 'AI-powered route optimization reduces fuel costs by up to 30%',
                      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
                    },
                    {
                      name: 'Real-time Monitoring',
                      description: 'Track fill levels and collection status across all containers',
                      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    },
                    {
                      name: 'Data Analytics',
                      description: 'Gain insights into waste patterns and optimize resource allocation',
                      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    },
                    {
                      name: 'Sustainability Metrics',
                      description: 'Measure and report environmental impact reduction',
                      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <dt>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={feature.icon}
                            />
                          </svg>
                        </motion.div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                          {feature.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">
                        {feature.description}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-10 -mx-4 relative lg:mt-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative mx-auto rounded-2xl shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm"></div>
                  <img
                    className="relative mx-auto rounded-2xl shadow-lg"
                    width={490}
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Features dashboard"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-green-50/30 overflow-hidden md:py-20 lg:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-base font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent tracking-wide uppercase">
                Process
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                How WasteSmart Works
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Our four-step process transforms traditional waste management into a smart, efficient operation
              </p>
            </motion.div>

            <div className="mt-12">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    number: '1',
                    title: 'Install Sensors',
                    description: 'Deploy IoT sensors in waste containers for real-time monitoring',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    number: '2',
                    title: 'Data Collection',
                    description: 'Our platform collects and processes waste data continuously',
                    color: 'from-emerald-500 to-teal-500'
                  },
                  {
                    number: '3',
                    title: 'Smart Optimization',
                    description: 'AI algorithms optimize collection schedules and routes',
                    color: 'from-teal-500 to-cyan-500'
                  },
                  {
                    number: '4',
                    title: 'Actionable Insights',
                    description: 'Access dashboards and reports for better decision-making',
                    color: 'from-cyan-500 to-green-500'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                  >
                    <dt>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r ${step.color} text-white shadow-lg`}
                      >
                        <span className="font-bold text-xl">{step.number}</span>
                      </motion.div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {step.title}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {step.description}
                    </dd>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden md:py-20 lg:py-24 relative">
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
              transition={{ duration: 30, repeat: Infinity }}
              className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], rotate: [180, 0, 180] }}
              transition={{ duration: 35, repeat: Infinity }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Measurable Results
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-green-100">
                See the impact of smart waste management on your bottom line and environment
              </p>
            </motion.div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
                {[
                  { value: '30%', label: 'Cost Reduction' },
                  { value: '40%', label: 'Fuel Savings' },
                  { value: '25%', label: 'CO2 Reduction' },
                  { value: '50%', label: 'Collection Efficiency' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all"
                  >
                    <dt>
                      <p className="text-lg font-medium text-white">{stat.label}</p>
                    </dt>
                    <dd className="mt-2 flex justify-center items-baseline">
                      <motion.p
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                        className="text-5xl font-extrabold text-white tracking-tight"
                      >
                        {stat.value}
                      </motion.p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Trusted by waste management professionals worldwide
              </p>
            </motion.div>

            <div className="mt-16">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: 'John Smith',
                    title: 'City Manager',
                    company: 'Metro City Waste Authority',
                    quote: '"WasteSmart reduced our operational costs by 35% while improving service quality."',
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    rating: 5
                  },
                  {
                    name: 'Sarah Johnson',
                    title: 'Operations Director',
                    company: 'Green Waste Solutions',
                    quote: '"The real-time monitoring has been a game-changer for our operations."',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <motion.figure
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-gradient-to-br from-gray-50 to-green-50/30 p-8 rounded-2xl shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.svg
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="h-5 w-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>

                    <blockquote className="relative">
                      <div className="text-lg font-medium text-gray-900">
                        <p className="relative z-10">{testimonial.quote}</p>
                      </div>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center space-x-4">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        className="flex-none w-14 h-14 rounded-full bg-gray-100 ring-4 ring-green-100"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div className="flex-none">
                        <div className="text-base font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm font-medium text-gray-600">
                          {testimonial.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.company}
                        </div>
                      </div>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Trusted Worldwide
              </h2>
              <p className="mt-4 text-xl text-green-100">
                Join thousands of satisfied customers
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: '500+', label: 'Cities Served' },
                { value: '10M+', label: 'Waste Bins' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                    className="text-4xl md:text-5xl font-extrabold text-white"
                  >
                    {item.value}
                  </motion.div>
                  <div className="mt-2 text-sm md:text-base font-medium text-green-100">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-green-50/50 overflow-hidden md:py-20 lg:py-24 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/30 to-green-200/30 rounded-full blur-3xl"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
                <div className="text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 bg-clip-text text-transparent tracking-tight sm:text-4xl"
                  >
                    Ready to Transform Your Waste Management?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 max-w-2xl mx-auto text-xl text-gray-600"
                  >
                    Join hundreds of organizations already benefiting from smart waste solutions
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-2xl text-white bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 shadow-lg hover:shadow-2xl transition-all"
                    >
                      Schedule a Demo
                      <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-base font-semibold rounded-2xl text-green-600 bg-white hover:bg-green-50 transition-all"
                    >
                      Contact Sales
                    </motion.a>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No credit card required • 14-day free trial • Cancel anytime
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <a href="#" className="text-3xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              WasteSmart
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Transforming waste management with intelligent solutions
            </p>
          </motion.div>

          <nav className="-mx-5 -my-2 flex flex-wrap justify-center mb-8" aria-label="Footer">
            {[
              'About Us', 'Careers', 'Blog', 'Features',
              'Pricing', 'Documentation', 'Help Center', 'Contact Us'
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-2"
              >
                <motion.a
                  whileHover={{ scale: 1.1, color: "#10b981" }}
                  href="#"
                  className="text-base text-gray-400 hover:text-green-400 transition-colors"
                >
                  {item}
                </motion.a>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center space-x-6"
          >
            {[
              {
                name: 'Twitter',
                icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84'
              },
              {
                name: 'GitHub',
                icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
              },
              {
                name: 'LinkedIn',
                icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
              },
              {
                name: 'Instagram',
                icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
              }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  color: "#10b981"
                }}
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <span className="sr-only">{social.name}</span>
                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 border-t border-gray-700 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-center text-base text-gray-400">
                &copy; 2024 WasteSmart. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1, color: "#10b981" }}
                  href="#"
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, color: "#10b981" }}
                  href="#"
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, color: "#10b981" }}
                  href="#"
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  Cookie Policy
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, boxShadow: "0 10px 20px -5px rgba(16, 185, 129, 0.4)" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  )
}