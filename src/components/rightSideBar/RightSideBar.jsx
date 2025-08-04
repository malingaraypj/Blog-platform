import FollowRecommendation from "./FollowRecommendation";
import Search from "./Search";
import Trending from "./Trending";

function RightSideBar() {
  return (
    <div className="overflow-y-auto scrollbar-hide border border-gray-500 w-[25%] h-screen fixed top-0 right-0">
      <Search />
      <Trending />
      <FollowRecommendation />
    </div>
  );
}

export default RightSideBar;
