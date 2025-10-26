import { auth } from "@/auth"
import { redirect } from "next/navigation"
import SignOutButton from "@/components/SignOutButton"
import { Mail, MapPin, Package, BarChart3 } from "lucide-react"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                WasteSmart
              </a>
            </div>
            <div>
              <SignOutButton />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 bg-clip-text text-transparent">
              Welcome back, {session.user.name || 'User'}! 👋
            </h1>
            <p className="text-gray-600 mt-2">Here's your dashboard overview</p>
          </div>

          {/* User Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
              <div className="flex items-center gap-4">
                {session.user.image ? (
                  <img 
                    src={session.user.image} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full ring-4 ring-green-100"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                    {session.user.name?.charAt(0) || session.user.email?.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="text-lg font-semibold text-gray-900">{session.user.name || 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-lg font-semibold text-gray-900">{session.user.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Active Routes</p>
                  <p className="text-3xl font-bold mt-2">12</p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Waste Bins</p>
                  <p className="text-3xl font-bold mt-2">248</p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <Package className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Collections Today</p>
                  <p className="text-3xl font-bold mt-2">34</p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <BarChart3 className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}