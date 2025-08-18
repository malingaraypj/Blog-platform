import { queryClient } from "@/api/helper";
import { toggleLike } from "@/api/post";
import { useMutation } from "@tanstack/react-query";

export const useToggleLike = () => {
  return useMutation({
    mutationFn: ({ post_id }) => toggleLike({ post_id }),
    onMutate: async ({ post_id }) => {
      // Cancel any outgoing refetches to avoid overwriting
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // Get current user fresh each time
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      if (!loggedUser) return;

      // Snapshot previous values
      const previousPosts = queryClient.getQueryData(["posts"]);

      // Optimistically update all relevant queries
      queryClient.setQueryData(["posts"], (old) => {
        if (!old) return old;

        return old.map((post) => {
          if (post._id === post_id) {
            const isLiked = post.likes.includes(loggedUser._id);
            return {
              ...post,
              likes: isLiked
                ? post.likes.filter((id) => id !== loggedUser._id)
                : [...post.likes, loggedUser._id],
              likes_count: isLiked
                ? post.likes_count - 1
                : post.likes_count + 1,
            };
          }
          return post;
        });
      });

      return { previousPosts };
    },
    // eslint-disable-next-line no-unused-vars
    onError: (err, { post_id }, context) => {
      // Roll back to previous state on error
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts"], context.previousPosts);
      }
    },
    onSettled: (data, error, { post_id }) => {
      // Invalidate both the specific post and the posts list
      queryClient.invalidateQueries({ queryKey: ["posts", post_id] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
