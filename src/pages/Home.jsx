import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../api/post";
import PostItem from "../components/center/PostItem";
import { queryClient } from "../api/helper";
import Loading from "../utils/Loading";

function Home() {
  const [followingPost, setFollowingPost] = useState(true);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["posts", followingPost],
    queryFn: () => getAllPosts(followingPost),
  });

  const toggleFeed = (val) => {
    queryClient.invalidateQueries({ queryKey: "posts" });
    setFollowingPost(val);
  };

  return (
    <div className="w-full p-4 min-h-screen flex flex-col justify-start">
      <div className="flex w-full justify-around items-center my-5 h-15 font-bold">
        <h1
          className={`${
            !followingPost ? "text-white" : "text-gray-500"
          } cursor-pointer`}
          onClick={() => toggleFeed(false)}
        >
          For you
        </h1>
        <h1
          className={`${
            followingPost ? "text-white" : "text-gray-500"
          } cursor-pointer`}
          onClick={() => toggleFeed(true)}
        >
          Following
        </h1>
      </div>
      {/* Handle loading state */}
      {isLoading && (
        <div className="mt-50">
          <Loading />
        </div>
      )}

      {/* Handle error state */}
      {isError && <div>Error: {error.message}</div>}

      {/* all posts are displayed  */}
      {data &&
        data.length > 0 &&
        data.map((post) => <PostItem key={post._id} data={post} />)}
      {data && data.length > 0 && (
        <div className="flex justify-around">
          <button className="bg-blue-700 px-5 py-3 hover:cursor-pointer rounded-lg">
            prev
          </button>
          <button className="bg-blue-700 px-5 py-3 hover:cursor-pointer rounded-lg">
            next
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
