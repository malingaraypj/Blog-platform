import PostDisplayWrapper from "../components/Posts/PostDisplayWrapper";
import { getFollowingPosts } from "../api/post";
import { LoaderOne } from "@/components/ui/loader";
import { useGetPost } from "@/Hooks/post/useGetPost";

function FollowingPosts() {
  const { data, isLoading, isError, error, refetch } = useGetPost(
    getFollowingPosts,
    ["posts", "following"]
  );
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

  if (isError) {
    if (isError) return <QueryError error={error} reset={refetch} />;
  }

  return <PostDisplayWrapper data={data} />;
}

export default FollowingPosts;
