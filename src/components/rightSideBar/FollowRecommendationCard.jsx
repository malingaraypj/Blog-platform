import { useMutation } from "@tanstack/react-query";
import PostUserProfile from "../center/PostUserProfile";
import { followUser } from "../../api/user";
import { queryClient } from "../../api/helper";

function FollowRecommendationCard({ data }) {
  const { mutateAsync: followMutate, isPending } = useMutation({
    mutationKey: ["follow user"],
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["follow suggestion"]);
      queryClient.invalidateQueries(["followers"]);
    },
    onError: (error) => {
      console.error("Error following user:", error);
    },
  });

  console.log(data);

  const handleFollow = async () => {
    try {
      await followMutate({ userId: data.userId });
    } catch (error) {
      console.error("Error following user:", error);
    }
  };
  return (
    <div className="h-15 w-full px-3 py-5 hover:scale-110 hover:bg-stone-900 flex items-center justify-between rounded-lg shadow-md">
      <PostUserProfile data={{ user_name: data.username }} />
      <button
        onClick={handleFollow}
        disabled={isPending}
        className="bg-blue-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Follow
      </button>
    </div>
  );
}

export default FollowRecommendationCard;
