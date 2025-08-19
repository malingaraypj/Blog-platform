// import { useQuery } from "@tanstack/react-query";
import { getDiscoverPosts } from "../api/post";
import PostDisplayWrapper from "../components/Posts/PostDisplayWrapper";
import { Outlet } from "react-router";
import { useGetPost } from "@/Hooks/post/useGetPost";
import { LoaderOne } from "@/components/ui/loader";

function DiscoverPosts() {
  const { data, isLoading } = useGetPost(getDiscoverPosts, [
    "posts",
    "discover",
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

  return (
    <>
      <PostDisplayWrapper data={data} />
      <Outlet />
    </>
  );
}

export default DiscoverPosts;
