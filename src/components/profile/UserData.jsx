import { SlCalender } from "react-icons/sl";

function UserData() {
  return (
    <div className="w-full h-40 p-2 flex flex-col justify-start items-start gap-3">
      <div>
        <h1 className="text-lg font-bold">TestUser1</h1>
        <p className="text-sm text-gray-400">@MalingarayPj</p>
      </div>
      <div className="flex items-center gap-2">
        <SlCalender className="text-gray-400" />
        <span className="text-gray-400">Joined January 2023</span>
      </div>
      <div>
        <div className="flex items-center gap-5 justify-start">
          <p className="cursor-pointer  hover:text-blue-700">
            <span className="font-bold">53 </span>
            <span className="text-gray-400 hover:text-blue-700">
              Followings
            </span>
          </p>
          <p className="cursor-pointer  hover:text-blue-700">
            <span className="font-bold">53 </span>
            <span className="text-gray-400 hover:text-blue-700">Followers</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserData;
