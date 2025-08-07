import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import { Outlet } from "react-router-dom";
import RightSideBar from "../components/rightSideBar/RightSideBar";

function LandingPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-1/4 h-full overflow-y-auto">
        <LeftSideBar />
      </div>

      <div className="w-1/2 min-h-screen scrollbar-hide overflow-y-auto">
        <Outlet />
      </div>

      <div className="w-1/4 h-full overflow-y-auto">
        <RightSideBar />
      </div>
    </div>
  );
}

export default LandingPage;
