import { getPostById } from "../api/post";
import { useParams } from "react-router";
import { LoaderFive } from "@/components/ui/loader";
import { useGetPost } from "@/Hooks/post/useGetPost";

function PostDetails() {
  const { postId } = useParams();

  const { data, isLoading } = useGetPost(getPostById, ["post", postId]);
  if (isLoading) {
    return <LoaderFive />;
  }

  console.log(data);
  return <div>Post details</div>;
}

export default PostDetails;
