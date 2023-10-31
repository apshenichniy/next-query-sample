"use client"

import { RefreshCw } from "lucide-react"

import { usePosts } from "@/lib/db-hooks"
import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

const RefreshPosts = () => {
  const { refetch, isFetching } = usePosts()

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => refetch()}
      disabled={isFetching}
    >
      <RefreshCw size={20} className={cn(isFetching && "animate-spin")} />
    </Button>
  )
}

export { RefreshPosts }
