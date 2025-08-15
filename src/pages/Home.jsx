import NewReply from "@/components/postDetails/NewReply";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router";
import NewPost from "./NewPost";

function Home() {
  const postStatus = useSelector((state) => state.newpost.status);
  const activeClassName = "font-bold text-lg";
  const inactiveClassName = "text-gray-400";

  return (
    <div className="w-full p-4 min-h-screen flex flex-col justify-start">
      <div className="flex w-full justify-around items-center my-5 h-15">
        <NavLink
          to={"discover"}
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Discover
        </NavLink>
        <NavLink
          to={"following"}
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Following
        </NavLink>
      </div>
      {postStatus === "active" && <NewPost />}
      <Outlet />
    </div>
  );
}

export default Home;
