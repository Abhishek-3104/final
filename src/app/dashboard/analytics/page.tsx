
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/DashboardLayout"
import AnalyticsContent from "@/components/AnalyticsContent"

export default async function AnalyticsPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/signin")
  }

  return (
    <DashboardLayout session={session}>
      <AnalyticsContent />
    </DashboardLayout>
  )
}