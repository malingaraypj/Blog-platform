import { queryClient } from "@/api/helper";
import { useMutation } from "@tanstack/react-query";
import { replyPost } from "@/api/post";

export function useReplyPost() {
  return useMutation({
    mutationFn: ({ post_id, formData }) => replyPost({ post_id, formData }),

    onMutate: async ({ post_id }) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // Snapshot the previous value
      const prevDiscover = queryClient.getQueryData(["posts", "discover"]);
      const prevFollowing = queryClient.getQueryData(["posts", "following"]);

      // optimistically update both rollback
      const updateList = (old) => {
        if (!old) return old;
        return old.map((post) => {
          if (post._id === post_id) {
            return {
              ...post,
              replies: [...(post.replies || []), post_id],
              reply_count: post.reply_count + 1,
            };
          }
          return post;
        });
      };

      queryClient.setQueryData(["posts", "discover"], updateList);
      queryClient.setQueryData(["posts", "following"], updateList);

      return { prevDiscover, prevFollowing };
    },

    onError: (err, variables, context) => {
      // Rollback to previous value
      queryClient.setQueryData(["posts", "discover"], context.prevDiscover);
      queryClient.setQueryData(["posts", "following"], context.prevFollowing);
    },

    onSettled: (data, error, { post_id }) => {
      queryClient.invalidateQueries(["posts", post_id]);
    },
  });
}
