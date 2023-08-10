"use client"

import Button from "@/components/ui/button"
import { FC } from "react"
import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { signIn } from "next-auth/react"
import { toast } from "react-hot-toast"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      await signIn("google")
    } catch (error) {
      // display error message
      toast.error("something went wrong with your login")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <section className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in your account
            </h2>
          </div>
          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={loginWithGoogle}
          >
            {isLoading ? null : (
              <Image
                src={"images/login/google.svg"}
                alt={"google logo"}
                width={30}
                height={30}
                className="mr-2 h-4 w-4"
              />
            )}
            <span className="mr-2">Google</span>
          </Button>
        </div>
      </section>
    </>
  )
}

export default page
