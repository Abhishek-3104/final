// app/dashboard/page.tsx
"use client"

import { motion } from 'framer-motion'
import {
  TrendingUp,
  TrendingDown,
  Trash2,
  MapPin,
  AlertCircle,
  CheckCircle,
  Clock,
  Package,
  Activity,
  DollarSign,
  Users,
  BarChart3
} from 'lucide-react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

const stats = [
  {
    name: 'Total Collections',
    value: '2,543',
    change: '+12.5%',
    trend: 'up',
    icon: Trash2,
    color: 'from-lime-500 to-emerald-500'
  },
  {
    name: 'Active Routes',
    value: '48',
    change: '+3.2%',
    trend: 'up',
    icon: MapPin,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Fill Rate',
    value: '67%',
    change: '-5.1%',
    trend: 'down',
    icon: Package,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cost Savings',
    value: '$12.4K',
    change: '+18.2%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-orange-500 to-red-500'
  }
]

const collectionData = [
  { name: 'Mon', collections: 65, optimal: 45 },
  { name: 'Tue', collections: 78, optimal: 52 },
  { name: 'Wed', collections: 90, optimal: 68 },
  { name: 'Thu', collections: 81, optimal: 70 },
  { name: 'Fri', collections: 95, optimal: 75 },
  { name: 'Sat', collections: 72, optimal: 50 },
  { name: 'Sun', collections: 45, optimal: 30 }
]

const wasteTypeData = [
  { name: 'General Waste', value: 45, color: '#84cc16' },
  { name: 'Recyclables', value: 30, color: '#22d3ee' },
  { name: 'Organic', value: 15, color: '#a78bfa' },
  { name: 'Hazardous', value: 10, color: '#fb923c' }
]

const recentAlerts = [
  { id: 1, type: 'warning', message: 'Container #A234 at 95% capacity', time: '5 min ago', location: 'Downtown District' },
  { id: 2, type: 'success', message: 'Route optimization completed', time: '15 min ago', location: 'All Districts' },
  { id: 3, type: 'error', message: 'Sensor malfunction detected', time: '1 hour ago', location: 'Bin #B567' },
  { id: 4, type: 'info', message: 'Scheduled maintenance today', time: '2 hours ago', location: 'West Zone' }
]

const topRoutes = [
  { id: 1, name: 'Route A-12', efficiency: 94, collections: 45, status: 'active' },
  { id: 2, name: 'Route B-08', efficiency: 89, collections: 38, status: 'active' },
  { id: 3, name: 'Route C-15', efficiency: 85, collections: 42, status: 'completed' },
  { id: 4, name: 'Route D-03', efficiency: 78, collections: 35, status: 'active' }
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your waste management today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-lime-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-lime-900/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">{stat.name}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Collection Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Collection Trends</h3>
              <p className="text-sm text-gray-400">Weekly overview</p>
            </div>
            <Activity className="w-5 h-5 text-lime-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={collectionData}>
              <defs>
                <linearGradient id="colorCollections" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#84cc16" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#84cc16" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem',
                  color: '#fff'
                }}
              />
              <Area
                type="monotone"
                dataKey="collections"
                stroke="#84cc16"
                strokeWidth={2}
                fill="url(#colorCollections)"
              />
              <Area
                type="monotone"
                dataKey="optimal"
                stroke="#22d3ee"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="none"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Waste Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Waste Distribution</h3>
              <p className="text-sm text-gray-400">By category</p>
            </div>
            <BarChart3 className="w-5 h-5 text-lime-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={wasteTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {wasteTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem',
                  color: '#fff'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Recent Alerts</h3>
            <AlertCircle className="w-5 h-5 text-lime-400" />
          </div>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#2d3748]/50 hover:bg-[#2d3748] transition-colors"
              >
                <div className={`p-2 rounded-lg ${
                  alert.type === 'error' ? 'bg-red-500/20 text-red-400' :
                  alert.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                  alert.type === 'success' ? 'bg-green-500/20 text-green-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {alert.type === 'error' && <AlertCircle className="w-5 h-5" />}
                  {alert.type === 'warning' && <Clock className="w-5 h-5" />}
                  {alert.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {alert.type === 'info' && <Activity className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium mb-1">{alert.message}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{alert.time}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {alert.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Routes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Top Performing Routes</h3>
            <MapPin className="w-5 h-5 text-lime-400" />
          </div>
          <div className="space-y-4">
            {topRoutes.map((route) => (
              <div
                key={route.id}
                className="flex items-center justify-between p-4 rounded-xl bg-[#2d3748]/50 hover:bg-[#2d3748] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                    {route.efficiency}%
                  </div>
                  <div>
                    <p className="text-white font-semibold">{route.name}</p>
                    <p className="text-sm text-gray-400">{route.collections} collections</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  route.status === 'active'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {route.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}