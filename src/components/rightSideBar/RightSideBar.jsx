import FollowRecommendation from "./FollowRecommendation";
import Search from "./Search";
import Trending from "./Trending";


function RightSideBar() {


    return (
        <div className="overflow-y-auto border border-gray-500 w-[27%] min-h-screen absolute right-0">
            <Search />
            <Trending />
            <FollowRecommendation/>
        </div>
    );
}

export default RightSideBar;