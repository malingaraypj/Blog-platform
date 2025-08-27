import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/api/helper";
import { sharePost } from "@/api/post";

const useSharePost = () => {
  return useMutation({
    mutationFn: ({ post_id, sendTo }) => sharePost({ post_id, sendTo }),

    onMutate: async ({ post_id }) => {
      // Cancel outgoing fetches
      await queryClient.cancelQueries(["posts"]);

      // Snapshot previous data
      const prevPosts = queryClient.getQueryData(["posts"]);
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      const user_id = loggedUser?._id;

      // Optimistic update
      queryClient.setQueryData(["posts"], (prevData) => {
        if (!prevData) return prevData;

        return prevData.map((post) =>
          post._id === post_id
            ? {
                ...post,
                sharedBy: [...post.sharedBy, user_id],
                shared_count: (post.shared_count || 0) + 1,
              }
            : post
        );
      });

      // return context for rollback
      return { prevPosts };
    },

    onError: (err, variables, context) => {
      if (context?.prevPosts) {
        queryClient.setQueryData(["posts"], context.prevPosts);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};

export { useSharePost };
