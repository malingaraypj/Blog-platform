import { useQuery } from "@tanstack/react-query";
import PostDisplayWrapper from "../components/center/PostDisplayWrapper";
import { getFollowingPosts } from "../api/post";
import Loading from "../utils/Loading";

function FollowingPosts() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts", "followingPosts"],
    queryFn: getFollowingPosts,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (data && data.length === 0) {
    return (
      <div className="text-center mt-4">No posts from accounts you follow.</div>
    );
  }
  return <PostDisplayWrapper data={data} />;
}

export default FollowingPosts;
