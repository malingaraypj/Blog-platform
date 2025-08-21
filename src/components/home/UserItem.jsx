import { useFollow } from "@/Hooks/users/useToggleFollow";
import ProfileAvatar from "../profile/ProfileAvatar";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

function UserItem({ user }) {
  const loggedUser = useSelector((state) => state.auth.user);
  const [follow, setfollow] = useState(false);

  useEffect(() => {
    setfollow(loggedUser?.followings?.includes(user._id));
  }, [loggedUser, user]);
  const { mutate } = useFollow();

  const handleFollow = () => {
    mutate(user._id);
    setfollow((prev) => !prev);
  };

  return (
    <div
      key={user._id}
      className="flex w-full items-center justify-around gap-2 py-2 border-b border-dashed last:border-none"
    >
      {/* Left: Avatar and User Info */}
      <div className="flex items-center gap-3 w-[60%]">
        <ProfileAvatar />
        <div>
          <p className="text-sm font-medium text-background">{user.username}</p>
          <div className="text-sm font-normal text-muted/70 overflow-clip">
            {user.email}
          </div>
        </div>
      </div>

      {/* Right: Badge */}
      <Button size="sm" onClick={handleFollow} className="w-[30%] bg-blue-600">
        {follow ? "following" : "follow"}
      </Button>
    </div>
  );
}

export default UserItem;
