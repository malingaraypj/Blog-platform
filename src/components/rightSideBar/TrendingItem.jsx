import { MdOutlineMoreHoriz } from "react-icons/md";

function TrendingItem() {
    return <div className="flex justify-between items-center bg-gray-950 rounded-lg hover:bg-white hover:text-black px-5 transform transition duration-700 cursor-pointer">
        <div>
            <p className="text-sm">Entertainment Trending</p>
            <h1 className="text-lg font-bold">#AliaBhatt</h1>
            <p className="text-sm">122.3M posts</p>
        </div>
        <div>
            <MdOutlineMoreHoriz className="text-lg" />
        </div>
    </div>
}

export default TrendingItem;