import { getMyPosts } from "../../api/post";
import PostDisplayWrapper from "../Posts/PostDisplayWrapper";
import { LoaderOne } from "../ui/loader";
import { useGetPost } from "@/Hooks/post/get queries/useGetPost";

function Myposts() {
  const { data, isLoading } = useGetPost(getMyPosts, ["posts", "myposts"]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LoaderOne />;
      </div>
    );
  }
  return <PostDisplayWrapper data={data} />;
}

export default Myposts;
