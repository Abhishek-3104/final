'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Mail,
  Phone,
  Shield,
  UserCheck,
  UserX
} from 'lucide-react'

const users = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@wastesmart.com',
    phone: '+1 234 567 8901',
    role: 'driver',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    collections: 245,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@wastesmart.com',
    phone: '+1 234 567 8902',
    role: 'driver',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    collections: 198,
    rating: 4.9
  },
  {
    id: 3,
    name: 'Mike Brown',
    email: 'mike.brown@wastesmart.com',
    phone: '+1 234 567 8903',
    role: 'supervisor',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    collections: 0,
    rating: 5.0
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.d@wastesmart.com',
    phone: '+1 234 567 8904',
    role: 'driver',
    status: 'inactive',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    collections: 167,
    rating: 4.7
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.w@wastesmart.com',
    phone: '+1 234 567 8905',
    role: 'admin',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    collections: 0,
    rating: 5.0
  },
]

export default function UsersContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterRole === 'all' || user.role === filterRole
    return matchesSearch && matchesFilter
  })

  const stats = [
    { label: 'Total Users', value: '48', icon: Users, color: 'from-green-500 to-emerald-500' },
    { label: 'Active Drivers', value: '24', icon: UserCheck, color: 'from-blue-500 to-cyan-500' },
    { label: 'Supervisors', value: '8', icon: Shield, color: 'from-purple-500 to-pink-500' },
    { label: 'Inactive', value: '5', icon: UserX, color: 'from-orange-500 to-red-500' },
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
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600 mt-1">Manage team members and permissions</p>
        </div>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl">
          <Plus className="w-5 h-5" />
          Add User
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
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          >
            <option value="all">All Roles</option>
            <option value="driver">Drivers</option>
            <option value="supervisor">Supervisors</option>
            <option value="admin">Admins</option>
          </select>
        </div>
      </motion.div>

      {/* Users Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-green-100"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold ${
                    user.role === 'admin'
                      ? 'bg-purple-100 text-purple-700'
                      : user.role === 'supervisor'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {user.role}
                  </span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                {user.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                {user.phone}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-600">Collections</p>
                <p className="text-sm font-semibold text-gray-900">{user.collections}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Rating</p>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-gray-900">{user.rating}</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                user.status === 'active'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {user.status}
              </span>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <Edit className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Edit</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-red-200 rounded-xl hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-600">Delete</span>
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}