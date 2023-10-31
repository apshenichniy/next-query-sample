import { useQuery } from "@tanstack/react-query"

import { getPosts } from "./actions"

const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  })
}

export { usePosts }
