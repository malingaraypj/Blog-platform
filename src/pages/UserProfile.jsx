import { IoMdArrowRoundBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import ProfilePicture from "../components/profile/ProfilePicture";
import UserData from "../components/profile/UserData";
import UserOptions from "../components/profile/UserOptions";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/user";
import Loading from "../utils/Loading";

function UserProfile() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getMe,
    refetchOnWindowFocus: true,
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col items-center justify-start p-5 h-screen overflow-auto scrollbar-hide">
      <div className="sticky top-0 left-0 z-10 w-[97%] h-15 bg-black flex items-center justify-between pr-5 shadow-md">
        <div className="flex items-center p-2 text-white gap-5">
          <IoMdArrowRoundBack
            onClick={() => {
              navigate(-1);
            }}
            size={20}
            className="cursor-pointer"
          />
          <div>
            <h1 className="font-bold">{data.username}</h1>
            <p className="text-sm">{`${data.post_count} posts`}</p>
          </div>
        </div>
        <IoSearchOutline />
      </div>

      {/* component to store userProfile picture */}
      <ProfilePicture />
      {/* Component to store user personal details */}
      <UserData data={data} />
      {/* Component to switch between differnt details of user interactions */}
      <UserOptions />
    </div>
  );
}

export default UserProfile;
