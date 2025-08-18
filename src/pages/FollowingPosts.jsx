import PostDisplayWrapper from "../components/center/PostDisplayWrapper";
import { getFollowingPosts } from "../api/post";
import { LoaderOne } from "@/components/ui/loader";
import { useGetPost } from "@/Hooks/post/useGetPost";

function FollowingPosts() {
  const { data, isLoading } = useGetPost(getFollowingPosts, [
    "posts",
    "following",
  ]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LoaderOne />;
      </div>
    );
  }

  if (!isLoading && data && data.length === 0) {
    return (
      <div className="text-center mt-4">No posts from accounts you follow.</div>
    );
  }

  return <PostDisplayWrapper data={data} />;
}

export default FollowingPosts;
