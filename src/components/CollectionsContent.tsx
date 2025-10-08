'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Package,
  Plus,
  Search,
  Filter,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  Download,
  MapPin,
  Trash2,
  Weight
} from 'lucide-react'

const collections = [
  {
    id: 'COL-001',
    location: 'Downtown Area A',
    date: '2024-01-15',
    time: '08:30 AM',
    status: 'completed',
    bins: 12,
    weight: '245 kg',
    driver: 'John Smith',
    vehicle: 'Truck #001',
    type: 'Organic'
  },
  {
    id: 'COL-002',
    location: 'Suburb Zone B',
    date: '2024-01-15',
    time: '10:00 AM',
    status: 'in-progress',
    bins: 8,
    weight: '180 kg',
    driver: 'Sarah Johnson',
    vehicle: 'Truck #002',
    type: 'Mixed'
  },
  {
    id: 'COL-003',
    location: 'Industrial Park C',
    date: '2024-01-15',
    time: '11:30 AM',
    status: 'scheduled',
    bins: 15,
    weight: '320 kg',
    driver: 'Mike Brown',
    vehicle: 'Truck #003',
    type: 'Recyclable'
  },
  {
    id: 'COL-004',
    location: 'Residential Block D',
    date: '2024-01-15',
    time: '02:00 PM',
    status: 'scheduled',
    bins: 10,
    weight: '195 kg',
    driver: 'Emily Davis',
    vehicle: 'Truck #004',
    type: 'Organic'
  },
  {
    id: 'COL-005',
    location: 'Market Street E',
    date: '2024-01-14',
    time: '09:00 AM',
    status: 'completed',
    bins: 20,
    weight: '410 kg',
    driver: 'John Smith',
    vehicle: 'Truck #001',
    type: 'Mixed'
  },
]

export default function CollectionsContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedDate, setSelectedDate] = useState('')

  const filteredCollections = collections.filter(collection => {
    const matchesSearch = collection.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || collection.status === filterStatus
    const matchesDate = !selectedDate || collection.date === selectedDate
    return matchesSearch && matchesFilter && matchesDate
  })

  const stats = [
    { label: 'Total Collections', value: '1,245', icon: Package, color: 'from-green-500 to-emerald-500' },
    { label: 'Completed Today', value: '34', icon: CheckCircle, color: 'from-blue-500 to-cyan-500' },
    { label: 'In Progress', value: '8', icon: Clock, color: 'from-orange-500 to-yellow-500' },
    { label: 'Total Weight', value: '3,450kg', icon: Weight, color: 'from-purple-500 to-pink-500' },
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
          <h1 className="text-3xl font-bold text-gray-900">Collections</h1>
          <p className="text-gray-600 mt-1">Track and manage waste collections</p>
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Export</span>
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            <Plus className="w-5 h-5" />
            New Collection
          </button>
        </div>
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
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
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
              placeholder="Search collections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          >
            <option value="all">All Status</option>
            <option value="scheduled">Scheduled</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </motion.div>

      {/* Collections List */}
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Bins</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Weight</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Driver</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCollections.map((collection) => (
                <tr key={collection.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-semibold text-gray-900">{collection.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-900">{collection.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{collection.date}</p>
                      <p className="text-xs text-gray-600">{collection.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      collection.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : collection.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {collection.status === 'completed' ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : collection.status === 'in-progress' ? (
                        <Clock className="w-3 h-3" />
                      ) : (
                        <Calendar className="w-3 h-3" />
                      )}
                      {collection.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                      {collection.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{collection.bins}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <Weight className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-900">{collection.weight}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{collection.driver}</p>
                      <p className="text-xs text-gray-600">{collection.vehicle}</p>
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