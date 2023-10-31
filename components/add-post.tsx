"use client"

import { useRef } from "react"
import { Post } from "@prisma/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createPost } from "@/lib/actions"

import { Button } from "./ui/button"

const AddPost = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createPost,
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] })
      const prevData = queryClient.getQueryData(["posts"])
      queryClient.setQueryData(["posts"], (old: Post[]) => [
        ...old,
        {
          ...data,
          id: `temp-${Math.random()}`,
          createdAt: new Date(),
        },
      ])
      return { prevData }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      className="grid gap-3"
      action={(formData) => {
        mutation.mutate({
          author: formData.get("author") as string,
          title: formData.get("title") as string,
          text: formData.get("text") as string,
        })
        ref.current?.reset()
      }}
    >
      <input name="author" value="John Doe" type="hidden" />
      <input
        name="title"
        className="rounded border p-2"
        placeholder="Title"
        autoFocus
        required
      />
      <textarea
        name="text"
        className="rounded border p-2 text-sm"
        placeholder="Text"
      />
      <div className="grid grid-cols-4 gap-2">
        <Button variant="secondary" type="reset">
          Reset
        </Button>
        <Button className="col-span-3">Add post</Button>
      </div>
    </form>
  )
}

export { AddPost }
