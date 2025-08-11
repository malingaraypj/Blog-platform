import { queryClient } from "@/api/helper";
import { toggleLike } from "@/api/post";
import { useMutation } from "@tanstack/react-query";

export const useToggleLike = () => {
  const loggedUser = localStorage.getItem("loggedUser");

  return useMutation({
    mutationFn: ({ post_id }) => toggleLike({ post_id }),
    onMutate: async ({ post_id }) => {
      // cancel all queris
      await queryClient.cancelQueries(["post"]);

      // snapshot previous results
      const prevDiscover = queryClient.getQueryData(["post", "discover"]);
      const prevFollowing = queryClient.getQueryData(["post", "following"]);

      const updateList = (old) => {
        if (!old) return old;

        return old.map((post) => {
          if (post._id === post_id) {
            const isLiked = post.likes.includes(loggedUser);

            return {
              ...post,
              likes: isLiked
                ? post.likes.filter((id) => id !== loggedUser)
                : [...post.likes, loggedUser],
              like_count: isLiked ? post.like_count - 1 : post.like_count + 1,
            };
          }
          return post;
        });
      };

      queryClient.setQueryData(["post", "discover"], updateList);
      queryClient.setQueryData(["post", "following"], updateList);

      return { prevDiscover, prevFollowing };
    },
    onError: (err, variable, context) => {
      queryClient.setQueryData(["post", "discover"], context.prevDiscover);
      queryClient.setQueryData(["post", "following"], context.prevFollowing);
    },
    onSettled: (data, error, { post_id }) => {
      queryClient.invalidateQueries(["post", post_id]);
    },
  });
};
