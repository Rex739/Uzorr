import Button from "@/components/ui/button"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"

const page = async ({}) => {
  const session = await getServerSession(authOptions)
  return (
    <>
      <pre>dashboard</pre>
    </>
  )
}

export default page
