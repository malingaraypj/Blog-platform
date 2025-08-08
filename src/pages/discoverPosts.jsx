import { useQuery } from "@tanstack/react-query";
import { getDiscoverPosts } from "../api/post";
import PostDisplayWrapper from "../components/center/PostDisplayWrapper";
import Loading from "../utils/Loading";
import { Outlet } from "react-router";

function DiscoverPosts() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts", "discover"],
    queryFn: getDiscoverPosts,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (data && data.length === 0) {
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
