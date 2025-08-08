import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../api/post";
import Loading from "../utils/Loading";
import { useParams } from "react-router";

function PostDetails() {
  const { postId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["postDetails", postId],
    queryFn: () => getPostById(postId),
  });

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);
  return <div></div>;
}

export default PostDetails;
