import { auth } from "@/auth"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/DashboardLayout"
import CollectionsContent from "@/components/CollectionsContent"

export default async function CollectionsPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/signin")
  }

  return (
    <DashboardLayout session={session}>
      <CollectionsContent />
    </DashboardLayout>
  )
}