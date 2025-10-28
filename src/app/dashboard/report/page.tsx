// app/dashboard/analytics/page.tsx
"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  DollarSign,
  Leaf,
  Users,
  Package
} from 'lucide-react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'

const timeRanges = ['7 Days', '30 Days', '3 Months', '1 Year']

const collectionTrend = [
  { month: 'Jan', collections: 1245, cost: 8500, emissions: 420 },
  { month: 'Feb', collections: 1389, cost: 8200, emissions: 395 },
  { month: 'Mar', collections: 1567, cost: 7900, emissions: 378 },
  { month: 'Apr', collections: 1423, cost: 7650, emissions: 356 },
  { month: 'May', collections: 1678, cost: 7200, emissions: 334 },
  { month: 'Jun', collections: 1834, cost: 6800, emissions: 312 }
]

const efficiencyData = [
  { subject: 'Route Planning', value: 92 },
  { subject: 'Fill Optimization', value: 85 },
  { subject: 'Time Management', value: 88 },
  { subject: 'Fuel Efficiency', value: 78 },
  { subject: 'Cost Reduction', value: 95 },
  { subject: 'Sustainability', value: 90 }
]

const wasteByType = [
  { type: 'General', amount: 450, percentage: 45 },
  { type: 'Recyclables', amount: 300, percentage: 30 },
  { type: 'Organic', amount: 150, percentage: 15 },
  { type: 'Hazardous', amount: 100, percentage: 10 }
]

export default function AnalyticsPage() {
  const [selectedRange, setSelectedRange] = useState('30 Days')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics & Reports</h1>
          <p className="text-gray-400">Comprehensive insights into your waste management operations</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 bg-[#2d3748] rounded-xl p-1">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedRange === range
                    ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 text-white hover:from-lime-400 hover:to-emerald-400 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Savings',
            value: '$45,230',
            change: '+23.5%',
            trend: 'up',
            icon: DollarSign,
            color: 'from-green-500 to-emerald-500'
          },
          {
            title: 'CO₂ Reduced',
            value: '12.4 tons',
            change: '+18.2%',
            trend: 'up',
            icon: Leaf,
            color: 'from-lime-500 to-green-500'
          },
          {
            title: 'Collections',
            value: '8,542',
            change: '+12.8%',
            trend: 'up',
            icon: Package,
            color: 'from-blue-500 to-cyan-500'
          },
          {
            title: 'Efficiency',
            value: '94.2%',
            change: '+5.3%',
            trend: 'up',
            icon: TrendingUp,
            color: 'from-purple-500 to-pink-500'
          }
        ].map((kpi, index) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${kpi.color}`}>
                <kpi.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${
                kpi.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {kpi.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {kpi.change}
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">{kpi.title}</p>
            <p className="text-3xl font-bold text-white">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Collection Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Collection & Cost Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={collectionTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis yAxisId="left" stroke="#9ca3af" />
              <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem'
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="collections"
                stroke="#84cc16"
                strokeWidth={3}
                dot={{ fill: '#84cc16', r: 4 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="cost"
                stroke="#22d3ee"
                strokeWidth={3}
                dot={{ fill: '#22d3ee', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Performance Radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={efficiencyData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
              <PolarRadiusAxis stroke="#9ca3af" />
              <Radar
                name="Efficiency"
                dataKey="value"
                stroke="#84cc16"
                fill="#84cc16"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Emissions Reduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <h3 className="text-xl font-semibold text-white mb-6">CO₂ Emissions Reduction</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={collectionTrend}>
              <defs>
                <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#84cc16" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#84cc16" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem'
                }}
              />
              <Area
                type="monotone"
                dataKey="emissions"
                stroke="#84cc16"
                strokeWidth={2}
                fill="url(#colorEmissions)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Waste by Type */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Waste by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={wasteByType}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="type" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem'
                }}
              />
              <Bar dataKey="amount" fill="#84cc16" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
      >
        <h3 className="text-xl font-semibold text-white mb-6">Key Insights</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Peak Collection Hours',
              value: '8AM - 12PM',
              description: '67% of daily collections occur during morning hours',
              icon: Calendar
            },
            {
              title: 'Most Efficient Route',
              value: 'Route A-12',
              description: '94% efficiency with 23% fuel savings',
              icon: TrendingUp
            },
            {
              title: 'Environmental Impact',
              value: '12.4 tons CO₂',
              description: 'Reduced emissions equivalent to 5,600 trees planted',
              icon: Leaf
            }
          ].map((insight, index) => (
            <div key={insight.title} className="bg-[#2d3748]/50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-lime-500/20">
                  <insight.icon className="w-5 h-5 text-lime-400" />
                </div>
                <h4 className="font-semibold text-white">{insight.title}</h4>
              </div>
              <p className="text-2xl font-bold text-lime-400 mb-2">{insight.value}</p>
              <p className="text-sm text-gray-400">{insight.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}