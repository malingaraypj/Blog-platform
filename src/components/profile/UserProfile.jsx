import { IoMdArrowRoundBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import ProfilePicture from "./ProfilePicture";
import UserData from "./UserData";
import UserOptions from "./UserOptions";

function UserProfile() {
  return (
    <div className="flex flex-col items-center justify-start p-5 h-screen overflow-auto scrollbar-hide">
      <div className="w-full h-10 bg-black flex items-center justify-between">
        <div className="flex items-center p-2 text-white ml-5 gap-5">
          <IoMdArrowRoundBack size={20} className="cursor-pointer" />
          <div>
            <h1 className="font-bold">TestUser1</h1>
            <p className="text-sm">3 posts</p>
          </div>
        </div>
        <IoSearchOutline />
      </div>

      {/* component to store userProfile picture */}
      <ProfilePicture />
      {/* Component to store user personal details */}
      <UserData />
      {/* Component to switch between differnt details of user interactions */}
      <UserOptions />
    </div>
  );
}

export default UserProfile;
