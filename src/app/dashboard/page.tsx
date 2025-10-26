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
    <div className="min-h-screen w-full bg-[#111827] relative">
      {/* Lime Radial Glow Background */}
      <div
        className="absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage: `radial-gradient(circle 800px at 50% 100px, rgba(132,204,22,0.15), transparent), radial-gradient(circle 600px at 80% 50%, rgba(56,189,248,0.1), transparent)`,
          backgroundSize: "cover",
        }}
      />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <header className="bg-[#1f2937]/90 backdrop-blur-md shadow-md border-b border-gray-700 relative z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-[#1f2937] rounded-3xl shadow-xl p-8 border border-gray-700/50">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl text-white font-bold bg-clip-text">
              Welcome back, {session.user.name || 'User'}! 👋
            </h1>
            <p className="text-gray-400 mt-2">Here's your dashboard overview</p>
          </div>

          {/* User Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#2d3748] to-[#374151] p-6 rounded-2xl border border-gray-700/50 hover:border-lime-600/30 transition-colors duration-300">
              <div className="flex items-center gap-4">
                {session.user.image ? (
                  <img 
                    src={session.user.image} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full ring-4 ring-lime-900/30"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {session.user.name?.charAt(0) || session.user.email?.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-400">Name</p>
                  <p className="text-lg font-semibold text-white">{session.user.name || 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2d3748] to-[#374151] p-6 rounded-2xl border border-gray-700/50 hover:border-lime-600/30 transition-colors duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-semibold text-white">{session.user.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-lime-600 to-emerald-600 p-6 rounded-2xl text-white hover:shadow-lg hover:shadow-lime-900/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lime-100 text-sm">Active Routes</p>
                  <p className="text-3xl font-bold mt-2">12</p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#374151] to-[#1f2937] p-6 rounded-2xl text-white border border-lime-600/20 hover:shadow-lg hover:shadow-lime-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Waste Bins</p>
                  <p className="text-3xl font-bold mt-2">248</p>
                </div>
                <div className="bg-gradient-to-br from-lime-500 to-emerald-500 p-3 rounded-xl">
                  <Package className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-lime-600 p-6 rounded-2xl text-white hover:shadow-lg hover:shadow-lime-900/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Collections Today</p>
                  <p className="text-3xl font-bold mt-2">34</p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <BarChart3 className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Activity Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
              <button className="text-lime-400 hover:text-lime-300 text-sm font-medium transition-colors duration-300">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Route #128 Completed", time: "Today, 2:34 PM", status: "Completed", icon: MapPin },
                { title: "New Waste Bin Registered", time: "Yesterday, 10:15 AM", status: "Added", icon: Package },
                { title: "Weekly Report Generated", time: "May 24, 2024", status: "Generated", icon: BarChart3 }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[#2d3748] border border-gray-700/50 hover:border-lime-600/30 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-lime-500/20 to-emerald-500/20 text-lime-400">
                    <activity.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{activity.title}</h3>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-lime-500/10 text-lime-400 text-xs font-medium">
                    {activity.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}