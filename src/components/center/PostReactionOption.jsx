import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineShare } from "react-icons/hi";

function PostReactionOption({ data }) {
  return (
    <div className="h-12 flex justify-between items-center px-4 text-gray-600 text-sm">
      <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
        <AiOutlineLike size={20} />
        <span>{data.likes_count}</span>
      </div>
      <div className="flex items-center gap-1 cursor-pointer hover:text-green-500">
        <BiRepost size={20} />
        <span>{data.retweets_count}</span>
      </div>
      <div className="flex items-center gap-1 cursor-pointer hover:text-purple-500">
        <AiOutlineComment size={20} />
        <span>{data.reply_count}</span>
      </div>
      <div className="flex items-center gap-1 cursor-pointer hover:text-teal-500">
        <HiOutlineShare size={20} />
        <span>100</span>
      </div>
      <div className="cursor-pointer hover:text-yellow-500">
        <CiBookmark size={20} />
      </div>
    </div>
  );
}

export default PostReactionOption;
