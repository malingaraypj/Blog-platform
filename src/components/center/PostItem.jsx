import PostUserProfile from "./PostUserProfile";
import dummyImg from "../../assets/image.png";
import PostReactionOption from "./PostReactionOption";
import { useNavigate } from "react-router";
import NewReply from "../postDetails/NewReply";
import { useState } from "react";

function PostItem({ data, isDetail = false }) {
  const navigate = useNavigate();
  const [openReply, setopenReply] = useState();

  const handleOpenReply = () => {
    setopenReply((prev) => !prev);
  };

  return (
    <div className=" bg-gray-900 rounded-xl p-3 m-5 transition-all duration-200 cursor-pointer">
      <PostUserProfile data={data} />
      {/* Content */}
      <div
        onClick={() => {
          navigate(`/app/${data._id}`);
        }}
        className="w-full flex flex-col justify-start items-start gap-2 overflow-clip"
      >
        <p className={`text-sm ${!isDetail && "line-clamp-3"}`}>
          {data.content}
        </p>

        <img src={dummyImg} alt="post image" />
      </div>
      <PostReactionOption handleOpenReply={handleOpenReply} data={data} />
      {openReply && (
        <NewReply post_id={data._id} handleOpenReply={handleOpenReply} />
      )}
    </div>
  );
}

export default PostItem;
