import { useQuery } from "@tanstack/react-query";

export const useGetPost = (queryFn, key, options = {}) => {
  return useQuery({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: 1,
    ...options,
  });
};
