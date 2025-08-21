import { queryClient } from "@/api/helper";
import { handleFollow } from "@/api/user";
import { authActions } from "@/store/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export const useFollow = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (user_id) => handleFollow(user_id),

    onMutate: async (user_id) => {
      // cancel ongoing queries
      await queryClient.cancelQueries({ queryKey: ["follow", "suggestion"] });
      await queryClient.cancelQueries({ queryKey: ["users"] });

      const prevUser = JSON.parse(localStorage.getItem("user"));
      const newUser = { ...prevUser };

      if (!newUser.followings) {
        newUser.followings = [];
      }

      // toggle follow/unfollow
      if (newUser.followings.includes(user_id)) {
        newUser.followings = newUser.followings.filter((id) => id !== user_id);
      } else {
        newUser.followings = [...newUser.followings, user_id];
      }

      localStorage.setItem("user", JSON.stringify(newUser));
      dispatch(authActions.updateUser(newUser));

      return { prevUser };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["follow", "suggestion"] });
      queryClient.invalidateQueries({ queryKey: ["followers"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (error, _, context) => {
      console.error("Error following user:", error);

      if (context?.prevUser) {
        localStorage.setItem("user", JSON.stringify(context.prevUser));
        dispatch(authActions.updateUser(context.prevUser));
      }
    },
  });
};
