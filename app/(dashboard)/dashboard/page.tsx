import Button from "@/components/ui/button"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async ({}) => {
  const session = await getServerSession(authOptions)
  return (
    <>

      <pre>session: {JSON.stringify(session)}</pre>
    </>
  )
}

export default page
