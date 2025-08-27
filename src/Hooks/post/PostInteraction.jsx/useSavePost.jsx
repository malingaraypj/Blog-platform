import { queryClient } from "@/api/helper";
import { savePost } from "@/api/post";
import { useMutation } from "@tanstack/react-query";

export const useSavePost = () => {
  return useMutation({
    // API call
    mutationFn: (post_id) => savePost(post_id),

    // Optimistic update
    onMutate: async (post_id) => {
      // Cancel all queries that could affect posts
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // Snapshot previous state
      const prevData = queryClient.getQueryData(["posts"]);

      const loggedUser = JSON.parse(localStorage.getItem("user"));
      const isSaved = loggedUser?.savedPosts?.includes(post_id);

      // If already saved, skip optimistic update
      if (isSaved) return { prevData };

      // Optimistically update posts
      queryClient.setQueryData(["posts"], (old) => {
        if (!old) return old;

        return old.map((post) => {
          if (post._id === post_id) {
            return {
              ...post,
              savedBy: [...post.savedBy, loggedUser._id],
              saved_count: (post.saved_count ?? 0) + 1,
            };
          }
          return post;
        });
      });

      // Optimistically update loggedUser in localStorage too
      loggedUser.savedPosts.push(post_id);
      localStorage.setItem("user", JSON.stringify(loggedUser));

      // Return snapshot in case we need rollback
      return { prevData };
    },

    // Rollback on error
    onError: (err, post_id, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(["posts"], context.prevData);
      }

      // rollback localStorage as well
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      loggedUser.savedPosts = loggedUser.savedPosts.filter(
        (id) => id !== post_id
      );
      localStorage.setItem("user", JSON.stringify(loggedUser));
    },

    // Refetch after mutation to sync with server
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
