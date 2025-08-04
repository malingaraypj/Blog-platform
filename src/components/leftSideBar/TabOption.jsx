import {
  IoHomeSharp,
  IoSearchSharp,
  IoNotifications,
  IoChatbubblesSharp,
  IoPeopleSharp,
  IoSettingsSharp,
} from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";

const IconsOptions = {
  home: IoHomeSharp,
  explore: IoSearchSharp,
  notification: IoNotifications,
  messages: IoChatbubblesSharp,
  communities: IoPeopleSharp,
  profile: IoSettingsSharp,
  more: CgMoreO,
};

function TabOption({ iconLabel, handleOnClick }) {
  const Icon = IconsOptions[iconLabel];

  return (
    <div
      onClick={handleOnClick}
      className="flex items-center gap-4 hover:bg-gray-900 w-full rounded-full cursor-pointer px-1 py-2 transition-colors"
    >
      <Icon color="white" size={30} />

      <span className="text-xl capitalize">{iconLabel}</span>
    </div>
  );
}

export default TabOption;
