"use client"

import { RefreshCw } from "lucide-react"

import { usePosts } from "@/lib/db-hooks"

import { Button } from "./ui/button"

const RefreshPosts = () => {
  const { isPending, refetch } = usePosts()
  const handleRefresh = () => {
    refetch()
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={handleRefresh}
      disabled={isPending}
    >
      <RefreshCw size={20} />
    </Button>
  )
}

export { RefreshPosts }
