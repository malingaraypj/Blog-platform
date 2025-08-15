import { getPostById } from "../api/post";
import { useParams } from "react-router";
import { LoaderFive } from "@/components/ui/loader";
import { useGetPost } from "@/Hooks/post/useGetPost";
import PostItem from "@/components/center/PostItem";
import NewReply from "@/components/postDetails/NewReply";
import PageHeader from "@/components/layout/pageHeader";
import PostDisplayWrapper from "@/components/center/PostDisplayWrapper";

function PostDetails() {
  const { postId } = useParams();

  const { data, isLoading } = useGetPost(
    () => getPostById(postId),
    ["post", postId]
  );

  if (isLoading) {
    return <LoaderFive />;
  }

  return (
    <div>
      <PageHeader />
      <PostItem data={data} isDetail={true} />
      <NewReply post_id={data._id} isDetail={true} />
      <PostDisplayWrapper data={data.replies} type="reply" />
    </div>
  );
}

export default PostDetails;
