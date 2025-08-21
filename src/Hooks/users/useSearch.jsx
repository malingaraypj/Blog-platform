import { useQuery } from "@tanstack/react-query";

export const useSearch = (fn, key, params) => {
  return useQuery({
    queryKey: [key, params],
    queryFn: () => fn(params),
    enabled: !!params,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
