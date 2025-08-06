import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getPostById } from "../../http";

function PostDetails() {
  const params = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["post", params.postId],
    queryFn: () => getPostById(params.postId),
  });
  console.log(params.postId);
  return <div>post Details</div>;
}

export default PostDetails;
