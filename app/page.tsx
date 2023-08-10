import Button from "@/components/ui/button"
import { db } from "@/lib/db"



export const Home = async ({ }) => {
  await db.set('hello', 'hello')
  return (
    <div className="text-red-500">
      hello world 
    </div>
  )
}

export default Home
