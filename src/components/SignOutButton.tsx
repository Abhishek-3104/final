'use client'

import { signOut } from "next-auth/react"
import { LogOut } from "lucide-react"

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50 font-medium transition-all duration-200"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  )
}