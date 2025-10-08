import { auth } from "@/auth"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/DashboardLayout"
import RoutesContent from "@/components/RoutesContent"

export default async function RoutesPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/signin")
  }

  return (
    <DashboardLayout session={session}>
      <RoutesContent />
    </DashboardLayout>
  )
}