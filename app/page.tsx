import Button from "@/components/ui/button"
import { FC } from "react"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-11/12 mx-auto py-5">
      
      <Button size={"lg"}>hello </Button>
    </div>
  )
}

export default page
