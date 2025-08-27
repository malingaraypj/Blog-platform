import { getBookMarks } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

export const useGetBookmarks = () => {
  return useQuery({
    queryKey: ["posts", "bookmarks"],
    queryFn: getBookMarks,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
