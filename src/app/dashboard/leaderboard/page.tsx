// app/dashboard/leaderboard/page.tsx
"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Trophy,
  Medal,
  Award,
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Zap,
  Crown,
  Star,
  ChevronUp,
  ChevronDown,
  Minus
} from 'lucide-react'

const timeRanges = ['Weekly', 'Monthly', 'All Time']

const topUsers = [
  {
    rank: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    points: 8750,
    collections: 234,
    change: 0,
    badge: 'Platinum',
    streak: 45,
    co2Saved: '892 kg'
  },
  {
    rank: 2,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    points: 8420,
    collections: 221,
    change: 1,
    badge: 'Platinum',
    streak: 38,
    co2Saved: '856 kg'
  },
  {
    rank: 3,
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    points: 7890,
    collections: 198,
    change: -1,
    badge: 'Gold',
    streak: 42,
    co2Saved: '803 kg'
  },
]

const leaderboardData = [
  {
    rank: 4,
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    points: 7234,
    collections: 187,
    change: 2,
    badge: 'Gold',
    streak: 29,
    co2Saved: '734 kg'
  },
  {
    rank: 5,
    name: 'Lisa Anderson',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    points: 6890,
    collections: 175,
    change: -1,
    badge: 'Gold',
    streak: 31,
    co2Saved: '701 kg'
  },
  {
    rank: 6,
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    points: 6543,
    collections: 168,
    change: 3,
    badge: 'Gold',
    streak: 24,
    co2Saved: '665 kg'
  },
  {
    rank: 7,
    name: 'Sophia Martinez',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    points: 6123,
    collections: 159,
    change: -2,
    badge: 'Silver',
    streak: 27,
    co2Saved: '622 kg'
  },
  {
    rank: 8,
    name: 'Robert Taylor',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
    points: 5890,
    collections: 152,
    change: 1,
    badge: 'Silver',
    streak: 19,
    co2Saved: '599 kg'
  },
  {
    rank: 9,
    name: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100',
    points: 5654,
    collections: 147,
    change: 0,
    badge: 'Silver',
    streak: 22,
    co2Saved: '575 kg'
  },
  {
    rank: 10,
    name: 'Daniel Brown',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100',
    points: 5432,
    collections: 142,
    change: 4,
    badge: 'Silver',
    streak: 18,
    co2Saved: '552 kg'
  },
  {
    rank: 11,
    name: 'Olivia Davis',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    points: 5123,
    collections: 136,
    change: -3,
    badge: 'Silver',
    streak: 15,
    co2Saved: '521 kg'
  },
  {
    rank: 12,
    name: 'You',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    points: 3420,
    collections: 147,
    change: 3,
    badge: 'Gold',
    streak: 7,
    co2Saved: '284 kg',
    isCurrentUser: true
  },
]

const achievements = [
  { name: 'First Collection', icon: Award, completed: true },
  { name: '10 Collections', icon: Trophy, completed: true },
  { name: '50 Collections', icon: Medal, completed: true },
  { name: '100 Collections', icon: Crown, completed: false },
  { name: '7 Day Streak', icon: Zap, completed: true },
  { name: '30 Day Streak', icon: Star, completed: false },
]

export default function LeaderboardPage() {
  const [selectedRange, setSelectedRange] = useState('Monthly')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
          <p className="text-gray-400">Compete with others and track your ranking</p>
        </div>
        <div className="flex gap-2 bg-[#2d3748] rounded-xl p-1">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedRange === range
                  ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Your Rank', value: '#12', icon: Trophy, color: 'from-yellow-500 to-orange-500', trend: '+3' },
          { label: 'Total Points', value: '3,420', icon: Star, color: 'from-lime-500 to-emerald-500', trend: '+120' },
          { label: 'Total Users', value: '1,247', icon: Users, color: 'from-blue-500 to-cyan-500', trend: '+45' },
          { label: 'Current Streak', value: '7 Days', icon: Zap, color: 'from-purple-500 to-pink-500', trend: '+1' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-green-400">{stat.trend}</span>
            </div>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Top 3 Podium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
      >
        <h2 className="text-2xl font-bold text-white mb-8 text-center">🏆 Top Performers</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:order-1 order-2"
          >
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full ring-4 ring-gray-400 overflow-hidden">
                  <img src={topUsers[1].avatar} alt={topUsers[1].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{topUsers[1].name}</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-gray-400/20 text-gray-400 text-xs font-semibold">
                  {topUsers[1].badge}
                </span>
              </div>
              <p className="text-2xl font-bold text-lime-400 mb-1">{topUsers[1].points.toLocaleString()}</p>
              <p className="text-sm text-gray-400">{topUsers[1].collections} collections</p>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:order-2 order-1"
          >
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full ring-4 ring-yellow-400 overflow-hidden">
                  <img src={topUsers[0].avatar} alt={topUsers[0].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  <Crown className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{topUsers[0].name}</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-xs font-semibold border border-purple-500/30">
                  {topUsers[0].badge}
                </span>
              </div>
              <p className="text-3xl font-bold text-lime-400 mb-1">{topUsers[0].points.toLocaleString()}</p>
              <p className="text-sm text-gray-400">{topUsers[0].collections} collections</p>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:order-3 order-3"
          >
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full ring-4 ring-amber-600 overflow-hidden">
                  <img src={topUsers[2].avatar} alt={topUsers[2].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{topUsers[2].name}</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-amber-600/20 text-amber-600 text-xs font-semibold">
                  {topUsers[2].badge}
                </span>
              </div>
              <p className="text-2xl font-bold text-lime-400 mb-1">{topUsers[2].points.toLocaleString()}</p>
              <p className="text-sm text-gray-400">{topUsers[2].collections} collections</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Full Leaderboard Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
      >
        <div className="p-6 border-b border-gray-700/50">
          <h2 className="text-2xl font-bold text-white">All Rankings</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#2d3748]/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Points</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Collections</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Streak</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">CO₂ Saved</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/30">
              {leaderboardData.map((user, index) => (
                <motion.tr
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`hover:bg-[#2d3748]/30 transition-colors ${
                    user.isCurrentUser ? 'bg-lime-500/10 border-l-4 border-lime-500' : ''
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-white">#{user.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full ring-2 ring-gray-700"
                      />
                      <div>
                        <p className="text-white font-semibold">{user.name}</p>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          user.badge === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                          user.badge === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {user.badge}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-lime-400 font-bold text-lg">{user.points.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white">{user.collections}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-orange-400" />
                      <span className="text-white font-semibold">{user.streak}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-green-400">{user.co2Saved}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.change > 0 ? (
                      <div className="flex items-center gap-1 text-green-400">
                        <ChevronUp className="w-4 h-4" />
                        <span className="font-semibold">{user.change}</span>
                      </div>
                    ) : user.change < 0 ? (
                      <div className="flex items-center gap-1 text-red-400">
                        <ChevronDown className="w-4 h-4" />
                        <span className="font-semibold">{Math.abs(user.change)}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-gray-400">
                        <Minus className="w-4 h-4" />
                        <span>0</span>
                      </div>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Your Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.name}
              className={`p-4 rounded-xl text-center transition-all ${
                achievement.completed
                  ? 'bg-gradient-to-br from-lime-500/20 to-emerald-500/20 border border-lime-500/30'
                  : 'bg-[#2d3748]/50 border border-gray-700/30 opacity-50'
              }`}
            >
              <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                achievement.completed
                  ? 'bg-gradient-to-r from-lime-500 to-emerald-500'
                  : 'bg-gray-700'
              }`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <p className={`text-xs font-semibold ${
                achievement.completed ? 'text-white' : 'text-gray-500'
              }`}>
                {achievement.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}