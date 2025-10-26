'use client'

import { signOut } from "next-auth/react"
import { LogOut } from "lucide-react"
import { toast } from 'sonner'

export default function SignOutButton() {
  const handleSignOut = () => {
    toast.loading("Signing out...")
    setTimeout(() => {
       signOut({ callbackUrl: "/" })
    },2000)
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-300 hover:text-white bg-[#2d3748] hover:bg-[#374151] border border-gray-700 hover:border-gray-600 font-medium transition-all duration-200"
    >
      <LogOut className="w-4 h-4 text-lime-500" />
      Sign Out
    </button>
  )
}