// app/dashboard/collect/page.tsx
"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  MapPin,
  Navigation,
  Trash2,
  Camera,
  CheckCircle,
  Clock,
  Package,
  AlertCircle,
  Play,
  Filter,
  Map as MapIcon,
  List,
  TrendingUp
} from 'lucide-react'

const collectPoints = [
  {
    id: 1,
    name: 'Downtown Recycling Center',
    address: '123 Main Street, Downtown',
    distance: '0.8 km',
    type: 'Recycling',
    containers: 12,
    fillLevel: 85,
    status: 'high-priority',
    points: 120,
    estimatedTime: '15 min',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 2,
    name: 'Park Central Bins',
    address: '456 Park Avenue, Central',
    distance: '1.2 km',
    type: 'General Waste',
    containers: 8,
    fillLevel: 72,
    status: 'medium',
    points: 80,
    estimatedTime: '20 min',
    coordinates: { lat: 40.7589, lng: -73.9851 }
  },
  {
    id: 3,
    name: 'Industrial Zone Collection',
    address: '789 Factory Road, Industrial',
    distance: '2.5 km',
    type: 'Mixed',
    containers: 15,
    fillLevel: 95,
    status: 'urgent',
    points: 150,
    estimatedTime: '30 min',
    coordinates: { lat: 40.7489, lng: -73.9680 }
  },
  {
    id: 4,
    name: 'Residential Area A',
    address: '321 Oak Lane, Residential',
    distance: '1.8 km',
    type: 'Organic',
    containers: 10,
    fillLevel: 60,
    status: 'normal',
    points: 100,
    estimatedTime: '25 min',
    coordinates: { lat: 40.7356, lng: -74.0089 }
  },
]

export default function CollectPage() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Collection Points</h1>
          <p className="text-gray-400">Choose a location to start collecting waste and earn points</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 bg-[#2d3748] rounded-xl p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                viewMode === 'list'
                  ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
              List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                viewMode === 'map'
                  ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              Map
            </button>
          </div>
          <button className="px-4 py-2 rounded-xl bg-[#2d3748] border border-gray-700 text-white hover:bg-gray-700 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Available Points', value: '24', icon: MapPin, color: 'from-lime-500 to-emerald-500' },
          { label: 'Avg. Points/Stop', value: '85', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
          { label: 'High Priority', value: '6', icon: AlertCircle, color: 'from-orange-500 to-red-500' },
          { label: 'Est. Total Time', value: '2.5h', icon: Clock, color: 'from-purple-500 to-pink-500' },
        ].map((stat, index) => (
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

      {/* Collection Points List */}
      <div className="grid lg:grid-cols-2 gap-6">
        {collectPoints.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border transition-all cursor-pointer ${
              point.status === 'urgent' ? 'border-red-700/50 hover:border-red-500/50' :
              point.status === 'high-priority' ? 'border-orange-700/50 hover:border-orange-500/50' :
              point.status === 'medium' ? 'border-yellow-700/50 hover:border-yellow-500/50' :
              'border-gray-700/50 hover:border-lime-500/50'
            }`}
            onClick={() => setSelectedPoint(point.id)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-xl ${
                  point.status === 'urgent' ? 'bg-red-500/20' :
                  point.status === 'high-priority' ? 'bg-orange-500/20' :
                  point.status === 'medium' ? 'bg-yellow-500/20' :
                  'bg-lime-500/20'
                }`}>
                  <Trash2 className={`w-6 h-6 ${
                    point.status === 'urgent' ? 'text-red-400' :
                    point.status === 'high-priority' ? 'text-orange-400' :
                    point.status === 'medium' ? 'text-yellow-400' :
                    'text-lime-400'
                  }`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{point.name}</h3>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {point.address}
                  </p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                point.status === 'urgent' ? 'bg-red-500/20 text-red-400' :
                point.status === 'high-priority' ? 'bg-orange-500/20 text-orange-400' :
                point.status === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {point.status}
              </div>
            </div>

            {/* Fill Level Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Fill Level</span>
                <span className="text-sm font-semibold text-white">{point.fillLevel}%</span>
              </div>
              <div className="w-full h-2 bg-[#2d3748] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${point.fillLevel}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full rounded-full ${
                    point.fillLevel >= 90 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                    point.fillLevel >= 70 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                    'bg-gradient-to-r from-lime-500 to-emerald-500'
                  }`}
                />
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#2d3748]/50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Type</p>
                <p className="text-sm font-semibold text-white">{point.type}</p>
              </div>
              <div className="bg-[#2d3748]/50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Containers</p>
                <p className="text-sm font-semibold text-white">{point.containers} bins</p>
              </div>
              <div className="bg-[#2d3748]/50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Distance</p>
                <p className="text-sm font-semibold text-white">{point.distance}</p>
              </div>
              <div className="bg-[#2d3748]/50 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Est. Time</p>
                <p className="text-sm font-semibold text-white">{point.estimatedTime}</p>
              </div>
            </div>

            {/* Points & Actions */}
            <div className="flex items-center justify-between">
              <div className="bg-lime-500/10 rounded-lg px-4 py-2 border border-lime-500/30">
                <p className="text-xs text-lime-400 mb-0.5">Earn Points</p>
                <p className="text-xl font-bold text-lime-400">+{point.points}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-xl bg-[#2d3748] border border-gray-700 text-white hover:bg-gray-700 transition-colors flex items-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Navigate
                </button>
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 text-white hover:from-lime-400 hover:to-emerald-400 transition-all flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Start
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active Collection Modal (if started) */}
      {selectedPoint && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        >
          <div className="bg-[#1f2937] rounded-2xl p-8 max-w-md w-full border border-gray-700/50">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Collection Started!</h3>
              <p className="text-gray-400">Follow the directions to reach the collection point</p>
            </div>
            <div className="space-y-3">
              <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 text-white hover:from-lime-400 hover:to-emerald-400 transition-all flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5" />
                Open Navigation
              </button>
              <button
                onClick={() => setSelectedPoint(null)}
                className="w-full px-6 py-3 rounded-xl bg-[#2d3748] border border-gray-700 text-white hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}