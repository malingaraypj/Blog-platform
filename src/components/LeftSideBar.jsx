import AccountSwitchTab from "./AccountSwitchTab";
import SectionTab from "./SectionTab";
import SiteIcon from "./SiteIcon";

function LeftSideBar() {
    return <div className="flex flex-col border border-gray-500 items-center justify-around h-screen w-sm gap-5"> 
      <SiteIcon />  
      <SectionTab />
      <AccountSwitchTab />
    </div>

}

export default LeftSideBar;