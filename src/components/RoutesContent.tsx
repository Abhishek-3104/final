'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Clock,
  Truck,
  Navigation
} from 'lucide-react'

const routes = [
  {
    id: 1,
    name: 'Downtown Route A',
    status: 'active',
    driver: 'John Smith',
    vehicle: 'Truck #001',
    bins: 45,
    distance: '32.5 km',
    efficiency: 92,
    lastRun: '2 hours ago',
    nextScheduled: 'Tomorrow 8:00 AM'
  },
  {
    id: 2,
    name: 'Suburb Zone B',
    status: 'active',
    driver: 'Sarah Johnson',
    vehicle: 'Truck #002',
    bins: 38,
    distance: '28.3 km',
    efficiency: 88,
    lastRun: '4 hours ago',
    nextScheduled: 'Tomorrow 9:00 AM'
  },
  {
    id: 3,
    name: 'Industrial Park C',
    status: 'completed',
    driver: 'Mike Brown',
    vehicle: 'Truck #003',
    bins: 52,
    distance: '41.2 km',
    efficiency: 95,
    lastRun: '6 hours ago',
    nextScheduled: 'Tomorrow 7:00 AM'
  },
  {
    id: 4,
    name: 'Residential Block D',
    status: 'scheduled',
    driver: 'Emily Davis',
    vehicle: 'Truck #004',
    bins: 30,
    distance: '22.8 km',
    efficiency: 90,
    lastRun: '1 day ago',
    nextScheduled: 'Today 2:00 PM'
  },
]

export default function RoutesContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredRoutes = routes.filter(route => {
    const matchesSearch = route.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || route.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const stats = [
    { label: 'Total Routes', value: '24', change: '+3', icon: MapPin, color: 'from-green-500 to-emerald-500' },
    { label: 'Active Now', value: '12', change: '+2', icon: Truck, color: 'from-blue-500 to-cyan-500' },
    { label: 'Avg Efficiency', value: '91%', change: '+5%', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { label: 'Total Distance', value: '485km', change: '-8km', icon: Navigation, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Routes</h1>
          <p className="text-gray-600 mt-1">Manage and optimize collection routes</p>
        </div>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl">
          <Plus className="w-5 h-5" />
          Create Route
        </button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search routes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
          </select>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filters</span>
          </button>
        </div>
      </motion.div>

      {/* Routes List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Route</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Driver</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Bins</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Distance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Efficiency</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Next Run</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRoutes.map((route) => (
                <tr key={route.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">{route.name}</p>
                      <p className="text-sm text-gray-600">{route.vehicle}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      route.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : route.status === 'scheduled'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {route.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{route.driver}</td>
                  <td className="px-6 py-4 text-gray-900">{route.bins}</td>
                  <td className="px-6 py-4 text-gray-900">{route.distance}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-600 to-emerald-600"
                          style={{ width: `${route.efficiency}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{route.efficiency}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{route.nextScheduled}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}