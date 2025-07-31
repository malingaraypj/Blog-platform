import PostUserProfile from "./PostUserProfile";
import dummyImg from "../../assets/image.png";
import PostReactionOption from "./PostReactionOption";

function PostItem({ data }) {
  console.log(data._id);
  return (
    <div className=" bg-gray-900 rounded-xl p-3 m-5">
      <PostUserProfile data={data} />
      {/* Content */}
      <div>
        <p className="text-sm">{data.content}</p>
        <img src={dummyImg} alt="post image" />
      </div>
      <PostReactionOption data={data} />
    </div>
  );
}

export default PostItem;
