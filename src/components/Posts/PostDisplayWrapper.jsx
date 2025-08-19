import { LoaderOne } from "../ui/loader";
import PostItem from "./PostItem";

function PostDisplayWrapper({ data, type = "posts", isLoading }) {
  if (isLoading) {
    return <LoaderOne />;
  }
  return (
    <div className="flex flex-col">
      {data &&
        data.length > 0 &&
        data.map(
          (post) =>
            (type == "posts" ? !post.is_reply : post.is_reply) && (
              <PostItem key={post._id} data={post} />
            )
        )}
    </div>
  );
}

export default PostDisplayWrapper;
