import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineShare } from "react-icons/hi";
import { useToggleLike } from "@/Hooks/post/useToggleLiks";
import { useState, useEffect } from "react"; // Added useEffect
import { useSavePost } from "@/Hooks/post/useSavePost";

function PostReactionOption({ data, handleOpenReply }) {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const { mutate } = useToggleLike();
  const { mutate: saveMutate } = useSavePost();
  const [isLiked, setIsLiked] = useState(false);

  // Sync isLiked state with data prop changes
  useEffect(() => {
    if (loggedUser && data?.likes) {
      setIsLiked(data.likes.includes(loggedUser._id));
    } else {
      setIsLiked(false);
    }
  }, [data, loggedUser]); // Update when data or loggedUser changes

  const handleLikeClick = () => {
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
      <div
        onClick={handleOpenReply}
        className="flex items-center gap-1 cursor-pointer hover:text-teal-500"
      >
        <AiOutlineComment size={20} />
        <span>{data?.reply_count || 0}</span>
      </div>

      {/* Share */}
      <div className="flex items-center gap-1 cursor-pointer hover:text-teal-500">
        <HiOutlineShare size={20} />
        <span>{data?.shares_count || 0}</span>
      </div>

      {/* Bookmark */}
      <div
        onClick={() => {
          saveMutate(data._id);
        }}
        className="flex items-center gap-1 cursor-pointer hover:text-teal-500"
      >
        <CiBookmark size={20} />
        <span>{data?.saved_count || 0}</span>
      </div>
    </div>
  );
}

export default PostReactionOption;
