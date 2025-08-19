import PostUserProfile from "./PostUserProfile";
import PostReactionOption from "./PostReactionOption";
import { useNavigate } from "react-router";
import NewReply from "../postDetails/NewReply";
import { useState } from "react";
import ImageSlider from "@/utils/ImageSlider";

function PostItem({ data, isDetail = false }) {
  const navigate = useNavigate();
  const [openReply, setOpenReply] = useState(false);

  const handleOpenReply = () => {
    setOpenReply((prev) => !prev);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-4 mb-4 transition-all duration-200 cursor-pointer">
      <PostUserProfile data={data} />

      {/* Content */}
      <div
        onClick={() => !isDetail && navigate(`/app/${data._id}`)}
        className="w-full flex flex-col justify-start items-start gap-3 mt-2"
      >
        <p
          className={`text-sm text-gray-200 ${!isDetail ? "line-clamp-3" : ""}`}
        >
          {data.content}
        </p>

        {data?.media?.length > 0 && <ImageSlider images={data.media} />}
      </div>

      <PostReactionOption handleOpenReply={handleOpenReply} data={data} />

      {!isDetail && openReply && (
        <NewReply post_id={data._id} handleOpenReply={handleOpenReply} />
      )}
    </div>
  );
}

export default PostItem;
