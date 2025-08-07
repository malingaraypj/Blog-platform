import PostUserProfile from "./PostUserProfile";
import dummyImg from "../../assets/image.png";
import PostReactionOption from "./PostReactionOption";
import { useNavigate } from "react-router";

function PostItem({ data }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${data._id}`);
      }}
      className=" bg-gray-900 rounded-xl p-3 m-5 hover:scale-105 transition-all duration-200 cursor-pointer"
    >
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
