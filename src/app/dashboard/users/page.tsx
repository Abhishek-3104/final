import { auth } from "@/auth"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/DashboardLayout"
import UsersContent from "@/components/UsersContent"

export default async function UsersPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/signin")
  }

  return (
    <DashboardLayout session={session}>
      <UsersContent />
    </DashboardLayout>
  )
}