import EditUserProfile from "./EditUser";
import ProfileAvatar from "./ProfileAvatar";

function ProfilePicture() {
  return (
    <div className="w-full h-80 my-5 relative">
      <div className="w-full h-44 bg-gray-600"></div>
      <div className="absolute flex justify-center items-center text-5xl w-32 h-32 rounded-full border-4 border-black -mt-16 ml-5">
        <ProfileAvatar className="h-full w-full" />
      </div>
      <div className="flex justify-end items-end mt-8 mr-8">
        <EditUserProfile />
      </div>
    </div>
  );
}

export default ProfilePicture;
