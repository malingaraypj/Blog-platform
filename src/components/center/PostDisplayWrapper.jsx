import PostItem from "./PostItem";

function PostDisplayWrapper({ data, type = "posts" }) {
  return (
    <div className="flex flex-col">
      {data &&
        data.length > 0 &&
        data.map(
          (post) =>
            type === "posts" &&
            !post.is_repost && <PostItem key={post._id} data={post} />
        )}
    </div>
  );
}

export default PostDisplayWrapper;
