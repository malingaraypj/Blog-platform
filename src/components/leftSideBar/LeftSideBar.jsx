import AccountSwitchTab from "./AccountSwitchTab";
import SectionTab from "./SectionTab";
import SiteIcon from "../others/SiteIcon";

function LeftSideBar() {
  return (
    <div className="flex flex-col border border-gray-500 items-center justify-around h-screen w-[25%] gap-5 fixed top-0 left-0">
      <SiteIcon />
      <SectionTab />
      <AccountSwitchTab />
    </div>
  );
}

export default LeftSideBar;
