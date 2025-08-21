import { CgMoreO } from "react-icons/cg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProfileAvatar from "../profile/ProfileAvatar";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth/authActions";
import { useNavigate } from "react-router";

function AccountSwitchTab() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex gap-5 justify-around items-center w-full bg-slate-800 hover:cursor-pointer px-5 py-3 hover:bg-gray-900 rounded-lg">
          <ProfileAvatar />
          <div className="flex flex-col items-start justify-center  w-full">
            <h1>m123</h1>
            <p>@Malingaraypj</p>
          </div>
          <CgMoreO color="white" size={30} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-slate-500 border-none flex flex-col gap-3">
        <Button variant="ghost" className="w-full bg-slate-900 text-white">
          Add an existing account
        </Button>
        <Button variant="ghost" className="w-full bg-slate-900 text-white">
          Manage accounts
        </Button>
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full bg-slate-900 text-white"
        >
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export default AccountSwitchTab;
