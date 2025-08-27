import { useLikedPosts } from "@/Hooks/post/get queries/useGetLikedPosts";
import PostDisplayWrapper from "../Posts/PostDisplayWrapper";

function LikedPosts() {
  const { data, isLoading } = useLikedPosts();
  return <PostDisplayWrapper data={data} isLoading={isLoading} />;
}

export default LikedPosts;
