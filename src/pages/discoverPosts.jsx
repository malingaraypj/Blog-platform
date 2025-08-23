// import { useQuery } from "@tanstack/react-query";
import { getDiscoverPosts } from "../api/post";
import PostDisplayWrapper from "../components/Posts/PostDisplayWrapper";
import { useGetPost } from "@/Hooks/post/useGetPost";
import { LoaderOne } from "@/components/ui/loader";
import QueryError from "@/components/Errors/QueryError";
// import { useState } from "react";

function DiscoverPosts() {
  // const [page, setpage] = useState(1);
  const { data, isLoading, isError, error, refetch } = useGetPost(
    getDiscoverPosts,
    ["posts", "discover"]
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LoaderOne />;
      </div>
    );
  }

  if (isError) {
    if (isError) return <QueryError error={error} reset={refetch} />;
  }

  if (!isLoading && data && data.length === 0) {
    return (
      <div className="text-center mt-4">No posts from accounts you follow.</div>
    );
  }

  return (
    <>
      <PostDisplayWrapper data={data} isLoading={isLoading} />
    </>
  );
}

export default DiscoverPosts;
