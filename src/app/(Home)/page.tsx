"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/navigation"
import { 
  Menu, 
  X, 
  CheckCircle, 
  MapPin, 
  Eye, 
  BarChart3, 
  Globe, 
  Star,
  ArrowRight,
  ArrowUp,
  Twitter,
  Github,
  Linkedin,
  Instagram
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen w-full bg-[#111827] relative">
      {/* Lime Radial Glow Background */}
      <div
        className="absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage: `radial-gradient(circle 1000px at 50% 100px, rgba(132,204,22,0.15), transparent), radial-gradient(circle 800px at 90% 50%, rgba(56,189,248,0.1), transparent)`,
          backgroundSize: "cover",
        }}
      />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1f2937]/90 backdrop-blur-md shadow-md fixed w-full top-0 z-50 border-b border-gray-700"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="text-2xl font-bold bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent transition-transform duration-300 cursor-pointer">
                WasteSmart
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['Features', 'Services', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-200 hover:text-lime-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-lime-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => router.push("/auth/signin")}
                className="px-6 py-2 text-sm font-medium text-gray-200 hover:text-lime-300 transition-colors duration-300 cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/auth/signup")}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white text-sm font-semibold hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-lime-900/20 cursor-pointer"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-lime-500 to-emerald-500 text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#1f2937] border-t border-gray-700"
            >
              <div className="px-4 py-3 space-y-1">
                {['Features', 'Services', 'Pricing', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 rounded-lg text-gray-200 hover:text-lime-300 hover:bg-gray-700 font-medium transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => router.push("/auth/signin")}
                    className="w-full px-4 py-2 text-sm font-medium text-gray-200 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => router.push("/auth/signup")}
                    className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-lime-500 to-emerald-500 text-white text-sm font-semibold hover:from-lime-400 hover:to-emerald-400 transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <main className="pt-16 relative z-10">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-lime-900/30 text-lime-300 text-sm font-semibold mb-8">
                  🌱 Eco-Friendly Solutions
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Making Waste Management
                  <span className="block bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-300 bg-clip-text text-transparent mt-1">
                    Smarter & Cleaner
                  </span>
                </h1>

                <p className="mt-8 text-lg text-gray-300 leading-relaxed">
                  Our smart platform helps cities reduce collection costs by up to 30% while improving sustainability and service quality.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    className="flex-1 px-5 py-3.5 border border-gray-600 rounded-xl bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400/50 focus:border-transparent transition-all duration-300"
                  />
                  <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 text-white font-semibold hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lime-900/20 whitespace-nowrap">
                    Start Free Trial
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-lime-400" />
                  <p className="text-gray-300">No credit card required • 14-day free trial</p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-lime-900/10 border border-gray-700/50">
                  <img
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Waste Management Dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-600/5 to-emerald-600/5" />
                </div>
                <div className="absolute -z-10 bottom-0 right-0 left-0 h-1/2 bg-gradient-to-br from-lime-500/10 to-emerald-500/10 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-[#111827] to-[#1f2937]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-lime-900/30 text-lime-300 text-sm font-semibold mb-4">
                Smart Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Optimize Your Waste Operations
              </h2>
              <p className="text-lg text-gray-300">
                Our comprehensive platform provides everything you need to streamline collection, reduce costs, and improve sustainability
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Features List */}
              <div className="space-y-10">
                {[
                  {
                    name: 'Smart Route Optimization',
                    description: 'AI algorithms reduce collection distances by up to 40%, saving fuel and time',
                    icon: MapPin
                  },
                  {
                    name: 'Real-time Container Monitoring',
                    description: 'Track fill levels across your container network to collect only when needed',
                    icon: Eye
                  },
                  {
                    name: 'Powerful Analytics Dashboard',
                    description: 'Gain actionable insights into waste patterns and optimize resource allocation',
                    icon: BarChart3
                  },
                  {
                    name: 'Sustainability Reporting',
                    description: 'Measure and document your environmental impact reductions',
                    icon: Globe
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-lime-300 transition-colors duration-300">
                        {feature.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Features Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative mt-10 lg:mt-0"
              >
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-lime-500/10 to-emerald-500/10 blur-3xl rounded-full transform -translate-y-1/4" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-lime-900/10 border border-gray-700/50">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                    alt="Features dashboard"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-emerald-500/5" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-[#1f2937]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-lime-900/30 text-lime-300 text-sm font-semibold mb-4">
                Simple Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How WasteSmart Works
              </h2>
              <p className="text-lg text-gray-300">
                Get up and running in days, not months, with our simple four-step implementation process
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: '1',
                  title: 'Install Sensors',
                  description: 'Quick installation of IoT sensors in your existing waste containers'
                },
                {
                  number: '2',
                  title: 'Connect Platform',
                  description: 'Seamless integration with your current fleet management systems'
                },
                {
                  number: '3',
                  title: 'Optimize Routes',
                  description: 'AI algorithms create the most efficient collection schedules'
                },
                {
                  number: '4',
                  title: 'Track Results',
                  description: 'Monitor savings and environmental impact in real-time'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#2d3748] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:shadow-lime-900/10 border border-gray-700/50 hover:border-lime-500/30 group hover:-translate-y-1 transition-transform"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-lime-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-[#1f2937]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-lime-900/30 text-lime-300 text-sm font-semibold mb-4">
                Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-300">
                Join hundreds of waste management professionals already using WasteSmart
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'John Smith',
                  title: 'City Manager',
                  company: 'Metro City Waste Authority',
                  quote: 'We ve reduced our collection costs by 35% in just six months while actually improving our service quality. The ROI has been incredible.',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1170&q=80'
                },
                {
                  name: 'Sarah Johnson',
                  title: 'Operations Director',
                  company: 'Green Waste Solutions',
                  quote: 'The real-time monitoring changed everything about how we operate. Our trucks only collect when needed, and our drivers love the optimized routes.',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1170&q=80'
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#2d3748] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-lime-500/30 hover:-translate-y-1"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-white text-lg mb-8 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-lime-900/50"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-300">{testimonial.title}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#1f2937]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#1f2937] to-[#2d3748] rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-700/50 relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-lime-500/10 to-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-lime-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-lime-900/30 text-lime-300 text-sm font-semibold mb-6">
                  Get Started Today
                </div>
              
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Waste Operations?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Join leading cities and waste management companies already saving money and reducing their environmental impact
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 text-white text-lg font-semibold hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 hover:shadow-lime-900/20">
                    Schedule a Demo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 rounded-xl border-2 border-lime-500 text-lime-400 text-lg font-semibold hover:bg-lime-900/20 transition-all duration-300">
                    Contact Sales
                  </button>
                </div>

                <p className="mt-8 text-gray-400 flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1729] text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                WasteSmart
              </div>
              <p className="text-gray-400 mb-6">
                Transforming waste management with intelligent solutions for smarter, cleaner cities.
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'Twitter', icon: Twitter },
                  { name: 'GitHub', icon: Github },
                  { name: 'LinkedIn', icon: Linkedin },
                  { name: 'Instagram', icon: Instagram }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Case Studies', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-lime-300 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-lime-300 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {['Documentation', 'Help Center', 'API Status', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-lime-300 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} WasteSmart. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-lime-300 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-lime-300 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-lime-300 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-lime-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}