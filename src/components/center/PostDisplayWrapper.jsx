import PostItem from "./PostItem";

function PostDisplayWrapper({ data }) {
  return (
    <div className="flex flex-col">
      {data &&
        data.length > 0 &&
        data.map((post) => <PostItem key={post._id} data={post} />)}
    </div>
  );
}

export default PostDisplayWrapper;
