import { MdOutlineMoreHoriz } from "react-icons/md";

function TrendingItem({ data }) {
  return (
    <div className="flex justify-between items-center bg-gray-950 rounded-lg hover:bg-white hover:text-black px-5 transform transition duration-700 cursor-pointer">
      <div>
        <p className="text-sm">Entertainment Trending</p>
        <h1 className="text-lg font-bold">{`#${data.hashtag}`}</h1>
        <p className="text-sm">{data.count} posts</p>
      </div>
      <div>
        <MdOutlineMoreHoriz className="text-lg" />
      </div>
    </div>
  );
}

export default TrendingItem;
