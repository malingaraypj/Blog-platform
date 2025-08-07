import { SlCalender } from "react-icons/sl";
import { formatDate } from "../../utils/helper";

function UserData({ data }) {
  return (
    <div className="w-full h-40 p-2 flex flex-col justify-start items-start gap-3">
      <div>
        <h1 className="text-lg font-bold">{data.username}</h1>
        <p className="text-sm text-gray-400">{`@${data.username}`}</p>
      </div>
      <div className="flex items-center gap-2">
        <SlCalender className="text-gray-400" />
        <span className="text-gray-400">{`Joined ${formatDate(
          data.createdAt
        )}`}</span>
      </div>
      <div>
        <div className="flex items-center gap-5 justify-start">
          <p className="cursor-pointer  hover:text-blue-700">
            <span className="font-bold">{data.following_count}</span>
            <span className="text-gray-400 hover:text-blue-700 ml-2">
              Followings
            </span>
          </p>
          <p className="cursor-pointer  hover:text-blue-700">
            <span className="font-bold">{data.followers_count} </span>
            <span className="text-gray-400 hover:text-blue-700 ml-2">
              Followers
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserData;
