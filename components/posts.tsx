"use client"

import { Loader2 } from "lucide-react"

import { usePosts } from "@/lib/db-hooks"

import { AddPost } from "./add-post"
import { Post } from "./post"
import { RefreshPosts } from "./refresh-posts"

const Posts = () => {
  const { isPending, data: posts } = usePosts()

  return (
    <div className="container flex w-full max-w-screen-sm flex-col space-y-4 p-6 pb-20">
      <div className="flex items-center justify-between border-b py-2">
        <div className="flex items-center">
          <h1 className="mr-2 text-2xl font-semibold text-slate-800">Posts</h1>
          <RefreshPosts />
        </div>
        <AddPost />
      </div>
      {isPending && (
        <div className="flex items-center text-2xl font-medium text-slate-500">
          <Loader2 className="mr-2 animate-spin" />
          Loading...
        </div>
      )}
      {posts?.length === 0 && (
        <div className="text-lg font-medium text-slate-500">
          No posts found.
        </div>
      )}
      {posts?.map((post) => <Post key={post.id} data={post} />)}
    </div>
  )
}

export { Posts }
