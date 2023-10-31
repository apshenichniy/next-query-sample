import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"

import { getPosts } from "@/lib/actions"
import { Posts } from "@/components/posts"

export default async function RootPage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  )
}
