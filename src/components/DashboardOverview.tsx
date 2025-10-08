'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  TrendingDown,
  MapPin,
  Package,
  BarChart3,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Truck,
  Trash2,
  Users
} from 'lucide-react'
import {
  LineChart,
  Line,
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

const collectionData = [
  { month: 'Jan', collections: 120, waste: 450 },
  { month: 'Feb', collections: 135, waste: 480 },
  { month: 'Mar', collections: 145, waste: 520 },
  { month: 'Apr', collections: 160, waste: 550 },
  { month: 'May', collections: 155, waste: 530 },
  { month: 'Jun', collections: 170, waste: 580 },
]

const wasteTypeData = [
  { name: 'Organic', value: 45, color: '#10b981' },
  { name: 'Plastic', value: 25, color: '#3b82f6' },
  { name: 'Paper', value: 20, color: '#f59e0b' },
  { name: 'Metal', value: 10, color: '#8b5cf6' },
]

const recentCollections = [
  { id: 1, location: 'Downtown Area A', time: '2 hours ago', status: 'completed', bins: 12 },
  { id: 2, location: 'Suburb Zone B', time: '4 hours ago', status: 'completed', bins: 8 },
  { id: 3, location: 'Industrial Park C', time: '5 hours ago', status: 'pending', bins: 15 },
  { id: 4, location: 'Residential Block D', time: '6 hours ago', status: 'in-progress', bins: 10 },
]

interface DashboardOverviewProps {
  session: any
}

export default function DashboardOverview({ session }: DashboardOverviewProps) {
  const stats = [
    {
      title: 'Total Collections',
      value: '1,245',
      change: '+12.5%',
      trend: 'up',
      icon: Package,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Active Routes',
      value: '24',
      change: '+3',
      trend: 'up',
      icon: MapPin,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Waste Collected',
      value: '3,450kg',
      change: '+8.2%',
      trend: 'up',
      icon: Trash2,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Active Vehicles',
      value: '18',
      change: '-2',
      trend: 'down',
      icon: Truck,
      color: 'from-orange-500 to-red-500'
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {session?.user?.name || 'User'}! 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Here's what's happening with your waste management today
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Collection Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Collection Trends</h2>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
              View All
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={collectionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="collections"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: '#10b981' }}
              />
              <Line
                type="monotone"
                dataKey="waste"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Waste Type Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Waste Distribution</h2>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
              Details
              <ArrowUpRight className="w-4 h-4" />
            </button>
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
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Collections & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Collections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Collections</h2>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentCollections.map((collection) => (
              <div
                key={collection.id}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    collection.status === 'completed'
                      ? 'bg-green-100 text-green-600'
                      : collection.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    {collection.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{collection.location}</p>
                    <p className="text-sm text-gray-600">{collection.bins} bins • {collection.time}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  collection.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : collection.status === 'in-progress'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {collection.status.replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-200">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">New Route</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-200">
              <Package className="w-5 h-5" />
              <span className="font-medium">Schedule Collection</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-200">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">View Reports</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-200">
              <Users className="w-5 h-5" />
              <span className="font-medium">Manage Team</span>
            </button>
          </div>

          {/* Alerts */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Alerts</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-yellow-900">3 bins need maintenance</p>
                  <p className="text-xs text-yellow-700 mt-0.5">Zone A, B, C</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
                <Calendar className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-blue-900">5 routes scheduled today</p>
                  <p className="text-xs text-blue-700 mt-0.5">All on track</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}