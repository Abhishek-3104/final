import { auth } from "@/auth"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/DashboardLayout"
import SettingsContent from "@/components/SettingsContent"

export default async function SettingsPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/signin")
  }

  return (
    <DashboardLayout session={session}>
      <SettingsContent session={session} />
    </DashboardLayout>
  )
}