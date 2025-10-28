// components/dashboard/DashboardLayout.tsx
"use client"

import { useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import {
  LayoutDashboard,
  Trash2,
  FileText,
  Gift,
  Trophy,
  User,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  ChevronDown,
  ChevronRight,
  Home,
  AlertCircle,
  CheckCircle,
  Clock,
  Settings,
  HelpCircle
} from 'lucide-react'
import Link from 'next/link'

interface DashboardLayoutProps {
  children: ReactNode
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, badge: null },
  { name: 'Report', href: '/dashboard/report', icon: FileText, badge: null },
  { name: 'Collect', href: '/dashboard/collect', icon: Trash2, badge: '3 New' },
  { name: 'Rewards', href: '/dashboard/rewards', icon: Gift, badge: '50 Points' },
  { name: 'Leaderboard', href: '/dashboard/leaderboard', icon: Trophy, badge: null },
]

const notifications = [
  {
    id: 1,
    type: 'warning',
    title: 'Container #A234 at 95% capacity',
    message: 'Immediate collection recommended',
    time: '5 min ago',
    read: false,
    icon: AlertCircle,
    color: 'text-yellow-400'
  },
  {
    id: 2,
    type: 'success',
    title: 'Collection completed',
    message: 'You earned 50 points!',
    time: '15 min ago',
    read: false,
    icon: CheckCircle,
    color: 'text-green-400'
  },
  {
    id: 3,
    type: 'info',
    title: 'New reward unlocked',
    message: 'Check your rewards page',
    time: '1 hour ago',
    read: true,
    icon: Gift,
    color: 'text-blue-400'
  },
]

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.push('/')
  }

  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean)
    return paths.map((path, index) => ({
      name: path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' '),
      href: '/' + paths.slice(0, index + 1).join('/'),
      current: index === paths.length - 1
    }))
  }

  const breadcrumbs = generateBreadcrumbs()
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen bg-[#111827] relative">
      {/* Background Effects */}
      <div
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle 800px at 50% 100px, rgba(132,204,22,0.1), transparent)`,
        }}
      />
      <div
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-[#1f2937]/95 backdrop-blur-xl border-r border-gray-700/50 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <Link href="/dashboard">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:shadow-lime-500/20 transition-shadow">
                  <Trash2 className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                  WasteSmart
                </h1>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                   
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 mt-2 ${
                      isActive
                        ? 'bg-gradient-to-r from-lime-500/20 to-emerald-500/20 text-lime-400 border border-lime-500/30 shadow-lg shadow-lime-500/10'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium flex-1">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-lime-500/20 text-lime-400 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-2 h-2 rounded-full bg-lime-400"
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-gray-700/50">
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-700/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center text-white font-semibold ring-2 ring-lime-500/20 group-hover:ring-lime-500/40 transition-all">
                  {session?.user?.name?.[0]?.toUpperCase() || 'U'}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-white">
                    {session?.user?.name || 'User'}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {session?.user?.email || 'user@example.com'}
                  </p>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bottom-full left-0 right-0 mb-2 bg-[#2d3748] rounded-xl border border-gray-700/50 shadow-xl overflow-hidden"
                  >
                    <Link href="/dashboard/profile">
                      <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 transition-colors cursor-pointer">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-white">Profile</span>
                      </div>
                    </Link>
                    <Link href="/dashboard/settings">
                      <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 transition-colors cursor-pointer">
                        <Settings className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-white">Settings</span>
                      </div>
                    </Link>
                    <div className="border-t border-gray-700/50">
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 transition-colors text-red-400"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm">Sign out</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Enhanced Top Navigation Bar */}
        <header className="sticky top-0 z-30 bg-[#1f2937]/95 backdrop-blur-xl border-b border-gray-700/50">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            {/* Left Section */}
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-400" />
              </button>

              {/* Breadcrumbs */}
              <nav className="hidden md:flex items-center gap-2 text-sm">
                <Link href="/dashboard">
                  <div className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors cursor-pointer">
                    <Home className="w-4 h-4" />
                  </div>
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.href} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                    <Link href={crumb.href}>
                      <span className={`${
                        crumb.current 
                          ? 'text-lime-400 font-semibold' 
                          : 'text-gray-400 hover:text-lime-400'
                      } transition-colors cursor-pointer`}>
                        {crumb.name}
                      </span>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors relative group"
              >
                <Search className="w-5 h-5 text-gray-400 group-hover:text-lime-400 transition-colors" />
              </button>

              <button className="hidden md:block p-2 rounded-lg hover:bg-gray-700/50 transition-colors relative group">
                <HelpCircle className="w-5 h-5 text-gray-400 group-hover:text-lime-400 transition-colors" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors relative group"
                >
                  <Bell className="w-5 h-5 text-gray-400 group-hover:text-lime-400 transition-colors" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                      {unreadCount}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {notificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-96 bg-[#2d3748] rounded-xl border border-gray-700/50 shadow-2xl overflow-hidden"
                    >
                      <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold">Notifications</h3>
                          <p className="text-xs text-gray-400 mt-0.5">{unreadCount} unread</p>
                        </div>
                        <button className="text-xs text-lime-400 hover:text-lime-300 font-medium">
                          Mark all read
                        </button>
                      </div>

                      <div className="max-h-[400px] overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b border-gray-700/30 hover:bg-gray-700/30 transition-colors cursor-pointer ${
                              !notification.read ? 'bg-lime-500/5' : ''
                            }`}
                          >
                            <div className="flex gap-3">
                              <div className={`p-2 rounded-lg ${
                                notification.type === 'warning' ? 'bg-yellow-500/10' :
                                notification.type === 'success' ? 'bg-green-500/10' :
                                'bg-blue-500/10'
                              }`}>
                                <notification.icon className={`w-4 h-4 ${notification.color}`} />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-white">{notification.title}</p>
                                <p className="text-xs text-gray-400 mt-1">{notification.message}</p>
                                <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden md:flex items-center gap-3 ml-2 pl-2 border-l border-gray-700/50">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center text-white text-sm font-semibold ring-2 ring-lime-500/20 cursor-pointer hover:ring-lime-500/40 transition-all">
                  {session?.user?.name?.[0]?.toUpperCase() || 'U'}
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-gray-700/50 overflow-hidden"
              >
                <div className="p-4">
                  <div className="relative max-w-2xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full pl-12 pr-4 py-3 bg-[#2d3748] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                      autoFocus
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="relative z-10 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}