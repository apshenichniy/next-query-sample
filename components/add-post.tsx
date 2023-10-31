"use client"

import { Post } from "@prisma/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { nanoid } from "nanoid"

import { createPost } from "@/lib/actions"

import { Button } from "./ui/button"

const AddPost = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createPost,
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] })
      const previousData = queryClient.getQueryData(["posts"])
      queryClient.setQueryData(["posts"], (old: Post[]) => [
        ...old,
        {
          ...data,
          id: nanoid(),
          createdAt: new Date(),
        },
      ])
      return { previousData }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  return (
    <Button
      onClick={() => {
        mutation.mutate({
          //id: 12,
          title: "Hello",
          text: "World",
          author: "Author",
        })
      }}
    >
      Add post
    </Button>
  )
}

export { AddPost }
