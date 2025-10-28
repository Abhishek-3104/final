// app/dashboard/rewards/page.tsx
"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Gift,
  Star,
  TrendingUp,
  ShoppingBag,
  Ticket,
  Coffee,
  Smartphone,
  Zap,
  Award,
  Lock,
  CheckCircle,
  ArrowRight,
  Calendar,
  Percent,
  Package
} from 'lucide-react'

const userPoints = {
  current: 3420,
  lifetime: 8750,
  rank: 'Gold',
  nextRank: 'Platinum',
  pointsToNext: 580
}

const rewardCategories = [
  { id: 'all', name: 'All Rewards', count: 24 },
  { id: 'vouchers', name: 'Vouchers', count: 8 },
  { id: 'products', name: 'Products', count: 10 },
  { id: 'experiences', name: 'Experiences', count: 6 },
]

const rewards = [
  {
    id: 1,
    name: '$10 Shopping Voucher',
    description: 'Redeemable at any partner store',
    points: 500,
    category: 'vouchers',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400',
    stock: 50,
    discount: null,
    featured: true,
    icon: ShoppingBag
  },
  {
    id: 2,
    name: 'Coffee Shop Voucher',
    description: 'Free coffee at selected cafes',
    points: 200,
    category: 'vouchers',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    stock: 100,
    discount: '-20%',
    featured: false,
    icon: Coffee
  },
  {
    id: 3,
    name: 'Eco-Friendly Water Bottle',
    description: 'Stainless steel reusable bottle',
    points: 800,
    category: 'products',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    stock: 25,
    discount: null,
    featured: true,
    icon: Gift
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    description: 'Premium sound quality',
    points: 2500,
    category: 'products',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
    stock: 10,
    discount: '-15%',
    featured: true,
    icon: Smartphone
  },
  {
    id: 5,
    name: 'Tree Planting Certificate',
    description: 'Plant a tree in your name',
    points: 300,
    category: 'experiences',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400',
    stock: 'Unlimited',
    discount: null,
    featured: false,
    icon: Award
  },
  {
    id: 6,
    name: 'Cinema Tickets (2x)',
    description: 'Valid at all major cinemas',
    points: 1200,
    category: 'experiences',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400',
    stock: 30,
    discount: null,
    featured: false,
    icon: Ticket
  },
  {
    id: 7,
    name: '$25 Restaurant Voucher',
    description: 'Dine at premium restaurants',
    points: 1500,
    category: 'vouchers',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    stock: 40,
    discount: '-10%',
    featured: false,
    icon: ShoppingBag
  },
  {
    id: 8,
    name: 'Eco Workshop Pass',
    description: 'Join sustainability workshop',
    points: 600,
    category: 'experiences',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
    stock: 20,
    discount: null,
    featured: false,
    icon: Award
  },
]

const recentRedemptions = [
  { id: 1, reward: '$10 Shopping Voucher', points: 500, date: '2 days ago', status: 'completed' },
  { id: 2, reward: 'Coffee Shop Voucher', points: 200, date: '1 week ago', status: 'completed' },
  { id: 3, reward: 'Tree Planting Certificate', points: 300, date: '2 weeks ago', status: 'completed' },
]

export default function RewardsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedReward, setSelectedReward] = useState<number | null>(null)
  const [redeemSuccess, setRedeemSuccess] = useState(false)

  const filteredRewards = selectedCategory === 'all'
    ? rewards
    : rewards.filter(r => r.category === selectedCategory)

  const handleRedeem = (reward: any) => {
    if (userPoints.current >= reward.points) {
      setSelectedReward(reward.id)
      setTimeout(() => {
        setRedeemSuccess(true)
        setTimeout(() => {
          setRedeemSuccess(false)
          setSelectedReward(null)
        }, 3000)
      }, 1000)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Rewards Store</h1>
        <p className="text-gray-400">Redeem your points for exciting rewards and eco-friendly products</p>
      </div>

      {/* Points Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-lime-500/20 via-emerald-500/20 to-lime-500/20 rounded-2xl p-6 border border-lime-500/30"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {/* Current Points */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-lime-400" />
              <p className="text-sm text-gray-300">Available Points</p>
            </div>
            <p className="text-4xl font-bold text-white">{userPoints.current.toLocaleString()}</p>
          </div>

          {/* Lifetime Points */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <p className="text-sm text-gray-300">Lifetime Points</p>
            </div>
            <p className="text-4xl font-bold text-white">{userPoints.lifetime.toLocaleString()}</p>
          </div>

          {/* Current Rank */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <p className="text-sm text-gray-300">Current Rank</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">{userPoints.rank}</span>
              <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold">
                TIER 3
              </span>
            </div>
          </div>

          {/* Next Rank Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-300">Next: {userPoints.nextRank}</p>
              <p className="text-xs text-gray-400">{userPoints.pointsToNext} pts</p>
            </div>
            <div className="w-full h-3 bg-[#2d3748] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full"
                style={{ width: '73%' }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">73% to {userPoints.nextRank}</p>
          </div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        {rewardCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white shadow-lg'
                : 'bg-[#2d3748] text-gray-400 hover:text-white border border-gray-700'
            }`}
          >
            {category.name}
            <span className="ml-2 opacity-70">({category.count})</span>
          </button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRewards.map((reward, index) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all hover:shadow-xl ${
              reward.featured
                ? 'border-lime-500/50 shadow-lime-900/20'
                : 'border-gray-700/50 hover:border-lime-500/30'
            }`}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={reward.image}
                alt={reward.name}
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
              />
              {reward.featured && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}
              {reward.discount && (
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-semibold flex items-center gap-1">
                  <Percent className="w-3 h-3" />
                  {reward.discount}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center gap-2 text-white">
                  <reward.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{reward.category}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{reward.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{reward.description}</p>

              {/* Stock */}
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-400">
                  {typeof reward.stock === 'number' ? `${reward.stock} left` : reward.stock}
                </span>
              </div>

              {/* Points & Action */}
              <div className="flex items-center justify-between">
                <div className="bg-lime-500/10 rounded-lg px-4 py-2 border border-lime-500/30">
                  <p className="text-xs text-lime-400 mb-0.5">Points Required</p>
                  <p className="text-xl font-bold text-lime-400">{reward.points}</p>
                </div>
                <button
                  onClick={() => handleRedeem(reward)}
                  disabled={userPoints.current < reward.points}
                  className={`px-6 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    userPoints.current >= reward.points
                      ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white hover:from-lime-400 hover:to-emerald-400'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {userPoints.current >= reward.points ? (
                    <>
                      Redeem
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Locked
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Redemptions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1f2937]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Recent Redemptions</h2>
        <div className="space-y-4">
          {recentRedemptions.map((redemption) => (
            <div
              key={redemption.id}
              className="flex items-center justify-between p-4 rounded-xl bg-[#2d3748]/50 hover:bg-[#2d3748] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">{redemption.reward}</p>
                  <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    {redemption.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-lime-400">-{redemption.points} pts</p>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                  {redemption.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Success Modal */}
      {redeemSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#1f2937] rounded-2xl p-8 max-w-md w-full border border-gray-700/50 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Reward Redeemed!</h3>
            <p className="text-gray-400 mb-4">Your reward has been successfully redeemed. Check your email for details.</p>
            <div className="bg-lime-500/10 rounded-lg p-4 border border-lime-500/30">
              <p className="text-lime-400 font-semibold">Remaining Points: {userPoints.current}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}