import { queryClient } from "@/api/helper";
import { useMutation } from "@tanstack/react-query";
import { replyPost } from "@/api/post";

export function useReplyPost() {
  return useMutation({
    mutationFn: ({ post_id, reply }) => replyPost(post_id, reply),

    onMutate: async (data) => {
      const { post_id } = data;
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["post"] });

      // Snapshot the previous value
      const prevDiscover = queryClient.getQueryData(["post", "discover"]);
      const prevFollowing = queryClient.getQueryData(["post", "following"]);

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

      queryClient.setQueryData(["post", "discover"], updateList);
      queryClient.setQueryData(["post", "following"], updateList);

      return { prevDiscover, prevFollowing };
    },

    onError: (err, variables, context) => {
      // Rollback to previous value
      queryClient.setQueryData(["post", "discover"], context.prevDiscover);
      queryClient.setQueryData(["post", "following"], context.prevFollowing);
    },

    onSettled: (data, error, { post_id }) => {
      queryClient.invalidateQueries(["post", post_id]);
    },
  });
}
