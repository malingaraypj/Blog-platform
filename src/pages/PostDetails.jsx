import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../api/post";
import { useParams } from "react-router";
import { LoaderFive } from "@/components/ui/loader";

function PostDetails() {
  const { postId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["postDetails", postId],
    queryFn: () => getPostById(postId),
  });

  if (isLoading) {
    return <LoaderFive />;
  }

  console.log(data);
  return <div></div>;
}

export default PostDetails;
