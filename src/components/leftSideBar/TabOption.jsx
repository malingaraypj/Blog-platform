import {
  IoHomeSharp,
  IoSearchSharp,
  IoNotifications,
  IoChatbubblesSharp,
  IoPeopleSharp,
  IoSettingsSharp,
} from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { NavLink } from "react-router";

const IconsOptions = {
  home: IoHomeSharp,
  explore: IoSearchSharp,
  notification: IoNotifications,
  messages: IoChatbubblesSharp,
  communities: IoPeopleSharp,
  profile: IoSettingsSharp,
  more: CgMoreO,
};

function TabOption({ Iconlabel }) {
  const Icon = IconsOptions[Iconlabel];

  const baseClass =
    "flex items-center gap-4 w-full rounded-xl cursor-pointer px-3 py-2 transition-colors";
  const activeClass = "bg-gray-800 font-semibold text-white";
  const inactiveClass = "hover:bg-gray-900 text-white";

  return (
    <NavLink
      to={`${Iconlabel}`}
      className={({ isActive }) =>
        `${baseClass} ${isActive ? activeClass : inactiveClass}`
      }
    >
      <Icon size={30} />
      <span className="text-xl capitalize">{Iconlabel}</span>
    </NavLink>
  );
}

export default TabOption;
