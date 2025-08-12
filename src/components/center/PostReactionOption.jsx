import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineShare } from "react-icons/hi";
import ReplyPost from "./ReplyPost";
import { useToggleLike } from "@/Hooks/post/useToggleLiks";
import { useState } from "react";

function PostReactionOption({ data }) {
  const loggedUser = localStorage.getItem("loggedUser");

  const { mutate } = useToggleLike();
  const [isLiked, setIsLiked] = useState(
    loggedUser && data?.likes ? data.likes.includes(loggedUser) : false
  );

  const handleLikeClick = () => {
    const newLikeStatus = !isLiked;
    setIsLiked(newLikeStatus);
    mutate({
      post_id: data._id,
    });
  };

  return (
    <div className="h-12 flex justify-between items-center px-4 text-gray-600 text-sm">
      {/* Like */}
      <div
        onClick={handleLikeClick}
        className={`flex items-center gap-1 cursor-pointer hover:${
          isLiked ? "text-red-500" : "text-green-500"
        } ${isLiked ? "text-red-500" : ""}`}
      >
        {isLiked ? (
          <AiFillLike
            size={20}
            className={`${isLiked ? "text-red-500" : "hover:text-red-500"}`}
          />
        ) : (
          <AiOutlineLike size={20} />
        )}
        <span>{data?.likes_count}</span>
      </div>

      {/* Retweet */}
      <div className="flex items-center gap-1 cursor-pointer hover:text-green-500">
        <BiRepost size={20} />
        <span>{data?.retweets_count}</span>
      </div>

      {/* Reply */}
      <div className="flex items-center gap-1 cursor-pointer hover:text-purple-500">
        <span>{data?.reply_count || 0}</span>
        <ReplyPost post_id={data?._id} />
      </div>

      {/* Share */}
      <div className="flex items-center gap-1 cursor-pointer hover:text-teal-500">
        <HiOutlineShare size={20} />
        <span>{data?.shares_count || 0}</span>
      </div>

      {/* Bookmark */}
      <div className="cursor-pointer hover:text-yellow-500">
        <CiBookmark size={20} />
      </div>
    </div>
  );
}

export default PostReactionOption;
