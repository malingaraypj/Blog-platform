import { useQuery } from "@tanstack/react-query";
import { getMyPosts } from "../../api/post";
import Loading from "../../utils/Loading";
import PostItem from "../center/PostItem";

function Myposts() {
  const { data, isLoading } = useQuery({
    queryKey: ["post", "myposts"],
    queryFn: getMyPosts,
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {!data ||
        (data.length === 0 && (
          <p className="text-center text-gray-500">No posts available</p>
        ))}
      {data &&
        data.length > 0 &&
        data.map((post) => <PostItem key={post._id} data={post} />)}
    </div>
  );
}

export default Myposts;
