// app/dashboard/profile/page.tsx
"use client"

import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import {
  User,
  Mail,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Trash2,
  Gift,
  FileText,
  Edit,
  Camera
} from 'lucide-react'

export default function ProfilePage() {
  const { data: session } = useSession()

  const stats = [
    { label: 'Total Collections', value: '147', icon: Trash2, color: 'from-lime-500 to-emerald-500' },
    { label: 'Points Earned', value: '3,420', icon: Gift, color: 'from-blue-500 to-cyan-500' },
    { label: 'Reports Submitted', value: '24', icon: FileText, color: 'from-purple-500 to-pink-500' },
    { label: 'Current Rank', value: '#12', icon: Award, color: 'from-yellow-500 to-orange-500' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400">Manage your account information and view your statistics</p>
      </div>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center text-white text-4xl font-bold ring-4 ring-lime-500/20">
              {session?.user?.name?.[0]?.toUpperCase() || 'U'}
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-white hover:bg-lime-400 transition-colors">
              <Camera className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <h2 className="text-3xl font-bold text-white">{session?.user?.name || 'User'}</h2>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 text-sm font-semibold border border-yellow-500/30">
                Gold Member
              </span>
            </div>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                {session?.user?.email || 'user@example.com'}
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <Calendar className="w-4 h-4" />
                Joined March 2024
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                New York, USA
              </p>
            </div>
          </div>

          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 text-white hover:from-lime-400 hover:to-emerald-400 transition-all flex items-center gap-2">
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
          >
            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} w-fit mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}