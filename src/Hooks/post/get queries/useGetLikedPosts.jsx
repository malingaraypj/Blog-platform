import { getLikedPosts } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

export const useLikedPosts = () => {
  return useQuery({
    queryKey: ["posts", "liked"],
    queryFn: getLikedPosts,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
