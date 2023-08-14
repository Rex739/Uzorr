"use client"

import { User } from "lucide-react"
import { FC, useState } from "react"
import Link from "next/link"
import { number } from "zod"
interface FriendRequestSidebarOptionsProps {
  sessionId: string
  initialUnseenRequestCount: number
}

const FriendRequestSidebarOptions: FC<FriendRequestSidebarOptionsProps> = ({
  sessionId,
  initialUnseenRequestCount,
}) => {
  const [unseenRequestCount, setUnseenRequestCount] = useState<number>(
    initialUnseenRequestCount
  )
  return (
    <Link
      href="/dashboard/requests"
      className="text-gray-600 hover:text-indigo-600 hover:bg-gray-50 group flex rounded-md gap-3 leading-6 text-sm p-2 font-semibold"
    >
      <span className="text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-meduim bg-white">
        <User className="h-4 w-4" />
      </span>
      <span className="truncate">Friend requests</span>
      {unseenRequestCount > 0 ? (
        <div className="rounded-full w-5 h-5 text-xs flex justify-center items-center text-white bg-indigo-600">
          {unseenRequestCount}
        </div>
      ) : null}
    </Link>
  )
}
export default FriendRequestSidebarOptions
