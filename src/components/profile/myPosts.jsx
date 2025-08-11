import { getMyPosts } from "../../api/post";
import PostDisplayWrapper from "../center/PostDisplayWrapper";
import { LoaderOne } from "../ui/loader";
import { useGetPost } from "@/Hooks/post/useGetPost";

function Myposts() {
  const { data, isLoading } = useGetPost(getMyPosts, ["myPosts"]);
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
