import { queryClient } from "@/api/helper";
import { createPost } from "@/api/post";
import { useMutation } from "@tanstack/react-query";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (data) => createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
    onError: (error) => {
      console.error("Post creation failed:", error.message);
    },
  });
};
