import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getPostById } from "../../api/post";
import Loading from "../../utils/Loading";

function PostDetails() {
  const params = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["post", params.postId],
    queryFn: () => getPostById(params.postId),
  });
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  console.log(params.postId);
  return <div>post Details</div>;
}

export default PostDetails;
